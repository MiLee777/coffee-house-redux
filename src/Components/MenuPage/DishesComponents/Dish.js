import { useState } from "react";
import { Quantity } from "../Cart/Quantity";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../redux/cartSlice";
import { ModalMenu } from "../Modal/Modal.Menu/Modal.Menu";
import { ContentMenu } from "../Modal/Modal.Menu/Content.Menu";
import '../Modal/Modal.Menu/style.menu.css';
import { dataMenu } from "../../../Data/dataMenu";
import { getMenuSelections } from "../../../redux/menuSlice";


export const Dish = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);

  const handleOpenModalMenu = () => {
    setIsOpenModalMenu(true);
  }

  const handleAddToCart = (e) => {
    e.stopPropagation();

    const totalPrice = calculateTotalPrice();

    dispatch(addItemToCart({ item, quantity, price: totalPrice }));
  };

  const dishesToMenu = dataMenu.find((dish) => item.id === dish.id);

  const menuSelections = useSelector(getMenuSelections);
  const selection = menuSelections[item.id] || { selectedCategorySize: "s", selectedCategoryAdditives: "" };

  // Функция для расчета общей стоимости
  const calculateTotalPrice = () => {
    const basePrice = Number(dishesToMenu.price); // Преобразование в число
    const selectedSize = selection.selectedCategorySize;
    const sizePrice = Number(dishesToMenu.sizes[selectedSize]?.add || 0); // Цена за размер
    const additivesPrice = Object.keys(selection.selectedCategoryAdditives || {})
      .filter((key) => selection.selectedCategoryAdditives[key])
      .reduce((sum, key) => sum + Number(dishesToMenu.additives[key]?.add || 0), 0); // Цена за добавки

    const totalPrice = basePrice + sizePrice + additivesPrice;

    return totalPrice.toFixed(2);
  };

  return (
    <div className="menu__box" onClick={handleOpenModalMenu}>
      <div className="box__img">
        <img src={`../assets/images/menu/${item.img}.jpg`} alt='Menu' />
      </div>
      <div className="box__content">
        <div className="box__content-info">
          <h2 className="box__content-title">{item.name}</h2>
          <p className="box__content-text">{item.description}</p>
        </div>
        <div className="box__content-add">
          <p className="box__content-title">${calculateTotalPrice()}</p>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <button className="box__content-btn"
            onClick={handleAddToCart}
          >
            Add
          </button>
        </div>
      </div>

      {isOpenModalMenu &&
        <ModalMenu setIsOpenModalMenu={setIsOpenModalMenu}>
          <ContentMenu setIsOpenModalMenu={setIsOpenModalMenu}
            item={item}
            selection={selection}
            dishesToMenu={dishesToMenu}
            calculateTotalPrice={calculateTotalPrice} />
        </ModalMenu>
      }
    </div>
  )
}