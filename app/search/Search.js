"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };
  return (
    <div className='max-w-[550px] mx-auto mt-5'>
      <form
        onSubmit={handleSubmit}
        className='relative flex items-center w-full h-12 shadow-2xl rounded-lg focus-within:shadow-lg bg-white overflow-hidden'
      >
        <input
          className='h-full w-full outline-none text-[14px] font-semibold text-gray-800 pl-3 placeholder:text-gray-400'
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='Search by food name..'
        />
        <div
          onClick={handleSubmit}
          className='grid place-items-center h-full w-12 text-gray-500 cursor-pointer'
        >
          <BsSearch />
        </div>
      </form>
    </div>
  );
}
