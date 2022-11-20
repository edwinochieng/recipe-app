import "./globals.css";
import Sidebar from "./Sidebar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "200",
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
        <div className='bg-gray-100 px-2 pt-1 lg:ml-[330px] w-full h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}
