import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Picker from "react-month-picker";
import "react-month-picker/css/month-picker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import defaultCover from "./default.png";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import {
  getStorage,
  ref as refStorage,
  getDownloadURL,
} from "firebase/storage";
import { firebaseConfig } from "./config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);
// Get a reference to the storage service
const storage = getStorage(app);

const INIT_VALUE = { year: 2022, month: 1 };
const INIT_ACTIVE_VALUES = {
  min: { year: 2022, month: 1 },
  max: { year: 2023, month: 1 },
};

const MonthBox = (props) => {
  const _handleClick = (e) => {
    props.onClick && props.onClick(e);
  };

  return (
    <div className="box" onClick={_handleClick}>
      <label>{props.value}</label>
      <FontAwesomeIcon icon={faChevronDown} className="box-icon" />
    </div>
  );
};

function App() {
  const pickAMonth = useRef();
  const [singleValue, setSingleValue] = useState(INIT_VALUE);
  const [activeMonths, setActiveMonths] = useState(INIT_ACTIVE_VALUES);
  const [selectionData, setSelectionData] = useState([]);
  const [ageIncrement, setAgeIncrement] = useState(0);

  const _loadSelectionData = async (currentMonth) => {
    const tmpData = [];
    const dataRef = ref(database);
    return get(
      child(dataRef, `selection/${currentMonth.year}/${currentMonth.month}`)
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.entries(snapshot.val()).forEach(([key, val]) => {
            const tmpVal = { ...val };
            tmpVal.id = key;
            tmpData.push(tmpVal);
          });
          //setSelectionData(tmpData);
          return tmpData;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const _getLastMonth = async () => {
    const dataRef = ref(database);
    return get(child(dataRef, `last_month`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const lastMonth = {
            year: snapshot.val().year,
            month: snapshot.val().month,
          };
          setSingleValue(lastMonth);
          return lastMonth;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getAlbumImages = async (items) => {
    const orderedItems = Object.entries(items);
    const requests = orderedItems.map(([key, value]) => {
      return getDownloadURL(
        refStorage(storage, `albums/${value.imgName}`)
      ).catch((error) => {
        console.log(error);
        return null;
      });
    });

    const allPromise = Promise.all(requests);
    return allPromise
      .then((urls) => {
        // Create items array for the Flatlist
        const mergedItems = [];
        let index = 0;
        orderedItems.forEach(([key, value]) => {
          const mergedValue = { ...value };
          // Important: use same name as default js for path
          mergedValue.imgPath = urls[index]; // map preserves order
          mergedItems.push(mergedValue);
          index++;
        });
        return mergedItems;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const _updateSelectionData = (currentMonth) => {
    // Load data from firebase
    _loadSelectionData(currentMonth).then((res) => {
      // get album images
      if (res) {
        getAlbumImages(res).then((distantData) => {
          // set data with images
          setSelectionData(distantData);
        });
      }
    });
  };

  async function initData() {
    // Get last month with data
    const lastMonth = await _getLastMonth();
    // Set active months for picker
    const tmp = { ...activeMonths };
    tmp.max = lastMonth;
    setActiveMonths(tmp);
    setAgeIncrement(ageIncrement + 1);
    // Initialize data
    _updateSelectionData(lastMonth);
  }

  useEffect(() => {
    initData();
    // eslint-disable-next-line
  }, []);

  const pickerLang = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    from: "From",
    to: "To",
  };

  const makeText = (m) => {
    if (m && m.year && m.month) {
      const value = pickerLang.months[m.month - 1] + ". " + m.year;
      return value;
    }
    return "?";
  };

  const handleAMonthChange = (value, text) => {
    const changedMonth = { year: value, month: text };
    setSingleValue(changedMonth);
    // Load new data here
    _updateSelectionData(changedMonth);
  };

  const handleAMonthDissmis = (value) => {
    //Do someting on dismiss
  };

  const handleClickMonthBox = (e) => {
    pickAMonth.current.show();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Discord Monthly Chart</p>
      </header>
      <div className="list-area">
        <Picker
          ref={pickAMonth}
          key={JSON.stringify(singleValue)}
          age={ageIncrement}
          years={activeMonths}
          value={singleValue}
          lang={pickerLang.months}
          onChange={handleAMonthChange}
          onDismiss={handleAMonthDissmis}
        >
          <MonthBox
            value={makeText(singleValue)}
            onClick={handleClickMonthBox}
          />
        </Picker>
        <div className="tool-btns">
          <a
            href="https://forms.gle/pqHsLggWwhFJK5Gq8"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button
              className="add-btn"
              type="button"
              //onClick={console.log("add button")}
            >
              <FontAwesomeIcon icon={faPlus} className="tool-icon" />
              Ajouter un son
            </button>
          </a>
        </div>
        <div className="chart-table-area">
          <table className="chart-table">
            <thead>
              <tr>
                <th>Pseudo</th>
                <th>Titre</th>
                <th>Album</th>
                <th>Écouter</th>
              </tr>
            </thead>
            <tbody>
              {selectionData.map((cell) => {
                const isMelon = cell.pseudo === "Melon";
                const pseudo = isMelon ? "Melon Charts" : cell.pseudo;
                return (
                  <tr key={cell.id}>
                    <td
                      className={`pseudo-cell ${isMelon ? "pseudo-melon" : ""}`}
                    >
                      {pseudo}
                    </td>
                    <td>
                      <div className="title-cell">
                        <img
                          src={cell.imgPath ? cell.imgPath : defaultCover}
                          alt=""
                        />
                        <div>
                          <div className="text-ellipsis">{cell.title}</div>
                          <div className="artist-cell">{cell.artist}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-ellipsis">{cell.album}</div>
                    </td>
                    <td>
                      <div className="link-cell">
                        <a
                          href={cell.youtubeUrl ? cell.youtubeUrl : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="link-icon"
                          />
                        </a>
                        <a
                          href={cell.spotifyUrl ? cell.spotifyUrl : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faSpotify}
                            className="link-icon"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
