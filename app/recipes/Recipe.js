import React from "react";
import Image from "next/image";
import chickenPic from "../../public/chicken.jpeg";
import Link from "next/link";

export default function Recipe() {
  return (
    <Link href={`/recipes/`}>
      <div className='relative max-w-[250px] max-h-[180px]'>
        <Image
          src={chickenPic}
          alt='chicken'
          width='250'
          height='180'
          className='absolte left-0 rounded-xl object-cover'
        />
        <p className='absolute bottom-0 left-1/2 transform translate-x-[-50%] h-[40%] w-full z-5 font-semibold text-[15px] text-white text-center flex justify-center items-center'>
          Chicken soup
        </p>
      </div>
    </Link>
  );
}
