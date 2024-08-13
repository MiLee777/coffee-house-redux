import { useState } from "react"
import { Quantity } from "../Cart/Quantity"

export const Dish = ({ item }) => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="menu__box">
      <div className="box__img">
        <img src={`../assets/images/menu/${item.img}.jpg`} alt='Menu' />
      </div>
      <div className="box__content">
        <div className="box__content-info">
          <h2 className="box__content-title">{item.name}</h2>
          <p className="box__content-text">{item.description}</p>
        </div>
        <div className="box__content-add">
          <p className="box__content-title">${item.price}</p>
          <Quantity quantity={ quantity } setQuantity={ setQuantity } />
          <button className="box__content-btn">Add</button>
        </div>
      </div>
    </div>
  )
}