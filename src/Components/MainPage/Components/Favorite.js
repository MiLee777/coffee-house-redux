import { useEffect, useState } from "react";
import { dataFavoriteCoffee } from "../../../Data/dataFavoriteCoffee";
import { useSwipeable } from "react-swipeable";

export const Favorite = () => {

  const [itemCoffee, setItemCoffee] = useState(0);
  const { title, image, description, price } = dataFavoriteCoffee[itemCoffee];

  useEffect(() => {
    const interval = setInterval(() => {
      setItemCoffee((prevItem) => (prevItem + 1) % dataFavoriteCoffee.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSliderBtn = () => {
    setItemCoffee(item => {
      item++;
      if (item > dataFavoriteCoffee.length - 1) {
        item = 0;
      }
      return item;
    })
  }

  const handlePrevSliderBtn = () => {
    setItemCoffee(item => {
      item--;
      if (item < 0) {
        item = dataFavoriteCoffee.length - 1;
      }
      return item;
    })
  }

  const handlers = useSwipeable({
    onSwipedLeft: handleNextSliderBtn,
    onSwipedRight: handlePrevSliderBtn,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="favorite" id="favorite">
      <div className="container favorite__container">
        <h2 className="title favorite__title">
          Choose your
          <span className="italic"> favorite </span>
          coffee
        </h2>
        <div className="favorite__slider" {...handlers}>
          <button className="slider__btn" onClick={handlePrevSliderBtn}>
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
            <img src={`../assets/images/favorite-coffee/${image}.png`} alt="Coffee" />
            <div className="slider__description">
              <h3 className="subtitle slider__title">{title}</h3>
              <p className="text slider__text">{description}</p>
              <p className="subtitle slider__title">${price.toFixed(2)}</p>
            </div>
          </div>
          <button className="slider__btn"
            onClick={handleNextSliderBtn}>
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
          {dataFavoriteCoffee.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === itemCoffee ? "dot__active" : ""}`} />
          ))}
        </div>

      </div>
    </section>
  )
}