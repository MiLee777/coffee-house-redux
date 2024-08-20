import { useState } from "react";
import { ModalCart } from "../Modal/Modal.Cart/Modal.Cart";
import { ContentCart } from "../Modal/Modal.Cart/Content.Cart";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../../redux/cartSlice";
import '../Modal/Modal.Cart/style.cart.css'

export const Cart = () => {

  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className="menu__cart">
      <div onClick={() => setIsOpen(true)}
        className="cart__content">
        <box-icon name='cart' type='solid'></box-icon>
        <span>{totalQuantity}</span>
      </div>

      {isOpen &&
        <ModalCart setIsOpen={setIsOpen}>
          <ContentCart setIsOpen={setIsOpen} />
        </ModalCart>
      }
    </div>
  )
}