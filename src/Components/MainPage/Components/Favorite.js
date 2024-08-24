import { useState } from "react";
import { dataFavoriteCoffee } from "../../../Data/dataFavoriteCoffee";



export const Favorite = () => {

  const [itemCoffee, setItemCoffee] = useState(0);
  const { title, image, description, price } = dataFavoriteCoffee[itemCoffee];

  const handleNextSliderBtn = () => {
    setItemCoffee(item => {
      item++;
      if(item > dataFavoriteCoffee.length - 1) {
        item = 0;
      }
      return item;
    })
  }

  const handlePrevSliderBtn = () => {
    setItemCoffee(item => {
      item--;
      if(item < 0) {
        item = dataFavoriteCoffee.length - 1;
      }
      return item;
    })
  }
  
  return (
    <section className="favorite">
      <div className="container favorite__container">
        <h2 className="title">
          Choose your 
          <span className="italic"> favorite </span> 
          coffee
        </h2>
        <div className="favorite__slider">
          <button className="slider__btn" onClick={ handlePrevSliderBtn }>
            <svg width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 12H6M6 12L12 6M6 12L12 18" 
              stroke="#403F3D" 
              strokeLinecap="round" 
              strokeLinejoin="round" />
            </svg>
          </button>
          <div className="slider__wrapper">
              <img src={`../assets/images/favorite-coffee/${ image }.png`} alt="Coffee"/>
              <div className="slider__description">
                <h3 className="slider__title">{ title }</h3>
                <p className="slider__text">{ description }</p>
                <p className="slider__title">${ price.toFixed(2) }</p>
              </div>
          </div>
          <button className="slider__btn"
          onClick={ handleNextSliderBtn }>
            <svg width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" 
              stroke="#403F3D" 
              strokeLinecap="round" 
              strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="favorite__slider-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

      </div>
    </section>
  )
}