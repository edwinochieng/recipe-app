"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { cuisines } from "../utils/data";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/*Desktop*/}
      <div className='hidden lg:block max-w-[340px] w-full min-h-screen bg-gray-300  fixed left-0 top-0'>
        <div className='flex flex-col'>
          <div>
            <div className='flex items-center'>
              <AiFillHome />
              <span className='ml-2'>Home</span>
            </div>
            <div className='flex items-center'>
              <MdFavoriteBorder />
              <span className='ml-2'>Favourites</span>
            </div>
          </div>
          <div>
            <h1>Cuisines</h1>
            <div className='grid grid-cols-2'>
              {cuisines.map((cuisine) => (
                <div key={cuisine.id}>
                  <button className='rounded-lg px-4 py-1'>
                    {cuisine.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Toggle button*/}
      <div
        className='block lg:hidden'
        onClick={() => setIsOpen((prevValue) => !prevValue)}
      >
        <AiOutlineMenu />
      </div>

      {/*mobile menu*/}
      {isOpen && (
        <div className='max-w-[330px] sm:max-w-[360px] w-full h-screen bg-gray-300  fixed left-0 top-0'></div>
      )}
    </div>
  );
}
