import Providers from "../components/Providers";
import Sidebar from "../components/Sidebar";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <head />
      <head />
      <body className='lg:flex flex-row'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='bg-white px-2 pt-6 sm:pt-8 lg:px-28 lg:ml-[330px] min-h-screen flex flex-col'>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
