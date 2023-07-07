"use client";

import Image from "next/image";
import React from "react";
import { GiAlarmClock, GiHeartBeats, GiForkKnifeSpoon } from "react-icons/gi";
import { CiBadgeDollar } from "react-icons/ci";

export default function Details({
  data: {
    pricePerServing,
    readyInMinutes,
    servings,
    image,
    title,
    healthScore,
    instructions,
    extendedIngredients,
  },
}) {
  return (
    <div className='max-w-[700px] w-full'>
      <h1 className='font-semibold text-[17px]'>{title}</h1>
      <div className='pt-1'>
        <Image
          src={image}
          height={400}
          width={700}
          alt={title}
          className='rounded-lg'
        />
      </div>
      <div className='pt-2 flex justify-between'>
        <div className='flex flex-col text-[15px] text-gray-800 font-medium'>
          <div className='flex items-center'>
            <GiForkKnifeSpoon size={20} />
            <p className='pl-1'>Serving: </p>
            <span className='pl-1'>{servings}</span>
          </div>
          <div className='flex items-center'>
            <CiBadgeDollar size={20} />
            <p className='pl-1'>Price per Serving:</p>
            <span className='pl-1'>{pricePerServing}</span>
          </div>
        </div>
        <div className='flex flex-col text-[15px] text-gray-800 font-medium'>
          <div className='flex items-center'>
            <GiAlarmClock size={20} />
            <p className='pl-1'>Prep time:</p>
            <span className='pl-1'>{readyInMinutes}</span>
          </div>
          <div className='flex items-center'>
            <div className='text-green-500'>
              <GiHeartBeats size={20} />
            </div>
            <p className='pl-1'>Health Score: </p>
            <span className='pl-1'>{healthScore}</span>
          </div>
        </div>
      </div>
      <div className='pt-[7px]'>
        <h1 className='font-semibold text-[16px] text-gray-700'>Ingredients</h1>
        <div className='pl-6'>
          <ul className='list-disc text-[15px] font-medium text-gray-700'>
            {extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      </div>

      {instructions && (
        <div className='pt-[7px]'>
          <h1 className='font-semibold text-[16px] text-gray-700'>
            Preparation
          </h1>
          <h3
            className='font-medium text-gray-700 text-[16px]'
            dangerouslySetInnerHTML={{ __html: instructions }}
          ></h3>
        </div>
      )}
    </div>
  );
}
