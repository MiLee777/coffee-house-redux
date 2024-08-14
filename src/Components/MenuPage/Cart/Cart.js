import { useState } from "react";
import { ModalCart } from "../Modal/Modal.Cart/Modal.Cart";
import { ContentCart } from "../Modal/Modal.Cart/Content.Cart";

export const Cart = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu__cart">
      <div onClick={() => setIsOpen(true)}
        className="cart__content">
        <box-icon name='cart' type='solid' ></box-icon>
        <span></span>
      </div>

      {isOpen &&
        <ModalCart setIsOpen={setIsOpen}>
          <ContentCart setIsOpen={setIsOpen} />
        </ModalCart>
      }
    </div>
  )
}