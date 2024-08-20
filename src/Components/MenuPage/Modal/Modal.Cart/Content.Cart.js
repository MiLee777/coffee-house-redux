import "./style.cart.css";
import "../../../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems, getTotalPrice, getTotalQuantity } from "../../../../redux/cartSlice";
import { CartItem } from "./CartItem";

export const ContentCart = ({ setIsOpen }) => {

  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice).toFixed(2);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className="modal__content">
      <h2 className="modal__title">Order list: {totalQuantity}</h2>
      <h2 className="modal__subtitle">Total price: ${totalPrice}</h2>
      <div className="modal__container">
        {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index} />)}
      </div>
      <button onClick={() => { dispatch(clearCart()) }}
        className="modal__btn-delete">DELETE ALL</button>
      <button onClick={() => setIsOpen(false)}
        className="modal__btn-close">
        <box-icon name='x' className='icon-close'></box-icon>
      </button>
    </div>
  )
}