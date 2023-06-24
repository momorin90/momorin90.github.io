import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { navigation } from "@/router/navigation";

const NavBar = (props) => {
  const router = useRouter();

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuActive]);

  return (
    <header className="absolute top-0 z-20 w-full flex items-center justify-center pt-10 pb-6 text-primary bg-transparent">
      <div className="flex-row justify-start w-full px-10 hidden md:flex">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={
              "px-6 pb-2 text-lg tracking-wide font-bold uppercase hover:text-primary " +
              (router.route === item.href
                ? "text-primary border-b-4 border-b-primary"
                : "text-white")
            }
            aria-current={router.route === item.href ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {menuActive && (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-bg-color bg-opacity-95 fixed top-0 overflow-auto z-10">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              onClick={handleMenuActive}
              className={
                "px-6 py-4 mb-4 text-3xl tracking-wide font-bold uppercase  hover:text-primary " +
                (router.route === item.href ? "text-primary" : "text-white")
              }
              aria-current={router.route === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/*
      <nav
        id="main-nav"
        className={`flex flex-col flex-auto absolute w-2/5 top-0 left-0 my-0 pt-10 mx-auto h-screen bg-bg-color shadow-lg transition -translate-x-full z-[999999] ${
          menuActive ? "translate-x-0" : ""
        }`}
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            onClick={handleMenuActive}
            className={
              "px-6 py-4 text-md tracking-wide font-bold uppercase border-b border-b-primary hover:text-primary " +
              (router.route === item.href ? "text-primary" : "text-white")
            }
            aria-current={router.route === item.href ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </nav>
          */}

      <div className="flex flex-row w-full items-center justify-end pr-10 md:hidden">
        {menuActive ? (
          <XMarkIcon
            className={
              "h-8 w-8 text-title-color stroke-2 ml-4 cursor-pointer z-20 md:hidden"
            }
            onClick={handleMenuActive}
          />
        ) : (
          <Bars3Icon
            className={
              "h-8 w-8 text-title-color stroke-2 ml-4 cursor-pointer z-20 md:hidden"
            }
            onClick={handleMenuActive}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
