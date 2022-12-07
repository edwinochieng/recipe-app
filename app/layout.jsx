import "./globals.css";
import Sidebar from "./Sidebar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.className}>
      <head />
      <head />
      <body className='lg:flex flex-row'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='bg-white px-2 pt-6 sm:pt-8 lg:px-28 lg:ml-[330px] min-h-screen flex flex-col'>
          {children}
        </div>
      </body>
    </html>
  );
}
