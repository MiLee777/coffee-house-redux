import { useState } from "react";
import { Quantity } from "../Cart/Quantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../redux/cartSlice";
import { ModalMenu } from "../Modal/Modal.Menu/Modal.Menu";
import { ContentMenu } from "../Modal/Modal.Menu/Content.Menu";
import '../Modal/Modal.Menu/style.menu.css'

export const Dish = ({ item }) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);

  const handleOpenModalMenu = () => {
    setIsOpenModalMenu(true);
  }

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(addItemToCart({ item, quantity }));
  };

  return (
    <div className="menu__box" onClick={ handleOpenModalMenu }>
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
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <button className="box__content-btn"
            onClick={ handleAddToCart }
          >
            Add
          </button>
        </div>
      </div>

      {isOpenModalMenu &&
        <ModalMenu setIsOpenModalMenu={setIsOpenModalMenu}>
          <ContentMenu setIsOpenModalMenu={setIsOpenModalMenu} item={ item } />
        </ModalMenu>
      }
    </div>
  )
}