"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { searchData } from "../../utils/data";

export default function Search() {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setInput(searchWord);
    const searchFilter = searchData.filter((value) =>
      value.name.toLowerCase().includes(input.toLowerCase())
    );

    input === "" ? setFilteredData([]) : setFilteredData(searchFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };

  const clearInput = () => {
    setFilteredData([]);
    setInput("");
  };
  return (
    <div className='max-w-[550px] mx-auto mt-5 z-[8]'>
      <form
        onSubmit={handleSubmit}
        className='relative flex items-center w-full h-12 shadow-2xl shadow-gray-500 rounded-lg focus-within:shadow-xl bg-white overflow-hidden'
      >
        <input
          className='h-full w-full outline-none text-[14px] font-medium text-gray-800 pl-3 placeholder:text-gray-400'
          type='text'
          onChange={handleFilter}
          value={input}
          placeholder='Search by food name..'
        />
        <div className='grid place-items-center h-full w-12 text-gray-500 cursor-pointer'>
          {filteredData.length ? (
            <MdClear onClick={clearInput} />
          ) : (
            <BsSearch onClick={handleSubmit} />
          )}
        </div>
      </form>

      {filteredData.length > 0 && (
        <div className='w-full bg-white mt-[6px] shadow-2xl rounded-lg py-4 text-[15px] text-gray-800 font-medium'>
          {filteredData.slice(0, 10).map((data) => (
            <div key={data.id} className='py-[1px] px-3 hover:bg-gray-100'>
              <Link href={`/search/${data.name}`}>{data.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
