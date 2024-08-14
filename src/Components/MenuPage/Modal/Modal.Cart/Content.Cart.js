import './style.cart.css';
import '../../../../index.css';
import { useSelector } from "react-redux";
import { getCartItems } from '../../../../redux/cartSlice';
import { CartItem } from './CartItem';


export const ContentCart = ({ setIsOpen }) => {

  const cartItems = useSelector(getCartItems); 

  return (
    <div className="modal_content">
      {cartItems.map((cartItem, index) => <CartItem cartItem={ cartItem } key={ index } />)}
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  )
}