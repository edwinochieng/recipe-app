"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { MdFavoriteBorder, MdFilterList } from "react-icons/md";

import { cuisines } from "../utils/data";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openSideBar = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleSidebar = (cuisine) => {
    router.push(`/cuisines/${cuisine}`);
    setIsOpen(false);
  };

  return (
    <div>
      {/*Toggle button*/}
      <div
        className='bg-transparent fixed top-1 left-1 block lg:hidden text-black'
        onClick={openSideBar}
      >
        <AiOutlineMenu size={24} />
      </div>

      {/*Desktop*/}
      <div className='hidden lg:block max-w-[330px] z-[10] w-full min-h-screen bg-gray-900 fixed left-0 top-0 bottom-0 shadow-md'>
        <div className='flex flex-col items-start mt-28 px-4 w-full'>
          <div className='w-full'>
            <div className='py-2 pl-0.5 text-gray-100 rounded-lg hover:bg-gray-800 '>
              <Link href='/' className='flex items-start'>
                <HiHome size={22} />
                <span className='ml-2'>Home</span>
              </Link>
            </div>
            <div className='py-2 pl-0.5 text-gray-100 rounded-lg hover:bg-gray-800'>
              <Link href='/favourites' className='flex items-start'>
                <MdFavoriteBorder size={22} />
                <span className='ml-2'>Favourites</span>
              </Link>
            </div>
          </div>
          <div className='pt-1'>
            <div className='flex items-center text-gray-100'>
              <MdFilterList size={26} />
              <h1 className='ml-2'>Filter by Cuisines</h1>
            </div>

            <div className='py-2 grid grid-cols-2'>
              {cuisines.map((cuisine) => (
                <div key={cuisine.id} className='m-1 text-[15px] text-gray-300'>
                  <button
                    className='max-w-[160px] w-full bg-gray-700 rounded-2xl px-3 py-1 hover:bg-gray-800 hover:text-gray-200'
                    onClick={() => router.push(`/cuisines/${cuisine.query}`)}
                  >
                    {cuisine.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*mobile menu*/}

      {isOpen && (
        <div className='max-w-[330px] w-full h-screen z-[10] fixed left-0 top-0 bottom-0 bg-gray-900 rounded-r-lg shadow-md transform ease-in duration-300'>
          <div
            className='absolute top-1 left-1 text-gray-400'
            onClick={openSideBar}
          >
            <AiOutlineClose size={26} />
          </div>
          <div className='flex flex-col items-start mt-28 px-4 w-full'>
            <div className='w-full'>
              <div
                className='py-2 pl-0.5 text-gray-100 rounded-lg hover:bg-gray-800 '
                onClick={openSideBar}
              >
                <Link href='/' className='flex items-start'>
                  <HiHome size={22} />
                  <span className='ml-2'>Home</span>
                </Link>
              </div>
              <div
                className='py-2 pl-0.5 text-gray-100 rounded-lg hover:bg-gray-800 '
                onClick={openSideBar}
              >
                <Link href='/favourites' className='flex items-start'>
                  <MdFavoriteBorder size={22} />
                  <span className='ml-2'>Favourites</span>
                </Link>
              </div>
            </div>
            <div className='pt-2'>
              <div className='flex items-center text-gray-100'>
                <MdFilterList size={26} />
                <h1 className='ml-2'>Filter by Cuisines</h1>
              </div>

              <div className='py-2 grid grid-cols-2'>
                {cuisines.map((cuisine) => (
                  <div
                    key={cuisine.id}
                    className='m-1 text-[15px] text-gray-300'
                  >
                    <button
                      className='max-w-[160px] w-full bg-gray-700 rounded-2xl px-3 py-1 hover:bg-gray-800 hover:text-gray-200'
                      onClick={() => handleSidebar({ cuisine: cuisine.query })}
                    >
                      {cuisine.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
