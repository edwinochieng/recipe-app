import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const key = process.env.REACT_APP_API_KEY;
    const api = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=" + key + "&number=9"
    );

    const data = await api.json();

    setPopular(data.recipes);
  };

  return (
    <div>
      <h>Popular picks</h>
      <Splide options={{
        perPage : 4,
        arrows : false,
        pagination : false,
        drag: 'free',
        gap : '5 rem'
        
      }}>
      {popular.map((recipe) => {
        return (

          <SplideSlide>
          <div key={recipe.id}>
            <p className="font-semibold text-black text-sm ">{recipe.title}</p>
            <img src = {recipe.image} alt = {recipe.title} className ="rounded-3xl h-56 w-96 object-fill mr-8"/>
          </div>
          </SplideSlide>
          
        );
      })}
      </Splide>
     
    </div>
  );
}

export default Popular;
