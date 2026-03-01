import {Outfit} from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { AllContextProvider } from "./context/allcontext";
import Footer from "./Components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "./utils/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./utils/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
     {
      path: "./utils/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});


export const metadata = {
  title: "Scammrader",
  description: "Scammrader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${clashDisplay.variable} font-[400] antialiased`}>
      <body
        className={`${outfit.variable}`}
      >
        <AllContextProvider>
        {children}
        {/* <Footer /> */}
        </AllContextProvider>
      </body>
    </html>
  );
}
