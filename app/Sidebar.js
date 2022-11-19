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
        className={`bg-transparent top-0 left-0 block lg:hidden z-10 text-black`}
        onClick={openSideBar}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu size={24} />}
      </div>
      {/*Desktop*/}
      <div className='hidden lg:block max-w-[330px] z-[10] w-full min-h-screen bg-gray-200 fixed left-0 top-0 bottom-0 shadow-md'>
        <div className='flex flex-col items-start mt-28 px-4'>
          <div className=''>
            <div className='pt-2'>
              <Link href='/' className='flex items-start'>
                <HiHome size={22} />
                <span className='ml-2'>Home</span>
              </Link>
            </div>
            <div className='pt-4'>
              <Link href='/favourites' className='flex items-start'>
                <MdFavoriteBorder size={22} />
                <span className='ml-2'>Favourites</span>
              </Link>
            </div>
          </div>
          <div className='pt-4'>
            <div className='flex items-center'>
              <MdFilterList size={26} />
              <h1 className='ml-2'>Filter by Cuisines</h1>
            </div>

            <div className='py-2 grid grid-cols-2'>
              {cuisines.map((cuisine) => (
                <div key={cuisine.id} className='m-1 text-[15px]'>
                  <button
                    className='max-w-[160px] w-full bg-gray-500 rounded-2xl px-3 py-1'
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
        <div className='max-w-[330px] w-full h-screen z-[10] fixed left-0 top-0 bottom-0 bg-cream rounded-r-lg shadow-md transform ease-in duration-300'>
          <div className='flex flex-col items-start mt-28 px-4'>
            <div className=''>
              <div className='pt-2' onClick={openSideBar}>
                <Link href='/' className='flex items-start'>
                  <HiHome size={22} />
                  <span className='ml-2'>Home</span>
                </Link>
              </div>
              <div className='pt-4' onClick={openSideBar}>
                <Link href='/favourites' className='flex items-start'>
                  <MdFavoriteBorder size={22} />
                  <span className='ml-2'>Favourites</span>
                </Link>
              </div>
            </div>
            <div className='pt-4'>
              <div className='flex items-center'>
                <MdFilterList size={26} />
                <h1 className='ml-2'>Filter by Cuisines</h1>
              </div>

              <div className='py-2 grid grid-cols-2'>
                {cuisines.map((cuisine) => (
                  <div key={cuisine.id} className='m-1 text-[15px]'>
                    <button
                      className='max-w-[160px] w-full bg-gray-500 rounded-2xl px-3 py-1'
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
