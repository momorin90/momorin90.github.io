import "@/styles/globals.css";
import "@/styles/slick.css";
import "@/styles/slick-theme.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import NavBar from "@/components/navbar/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} bg-bg-color`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
