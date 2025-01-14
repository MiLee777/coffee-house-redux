import { useDispatch } from "react-redux";
import { dataMenu } from "../../../../Data/dataMenu";
import { removeItemFromCart } from "../../../../redux/cartSlice";

export const CartItem = ({ cartItem }) => {

  const dishesToCart = dataMenu.find(dish => dish.id === cartItem.id);
  const price = (dishesToCart.price * cartItem.quantity).toFixed(2);

  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="content__box">
        <p className="content__text content__price">Price: ${ price }</p>
        <div className="content__info">
          <p className="content__text content__name">{dishesToCart.name}</p>
          <p className="content__text content__portions">{cartItem.quantity} portion(s)</p>
        </div>
        <div className="content__box-delete"
          onClick={() => { dispatch(removeItemFromCart({ cartItemId: cartItem.id })) }}>
          <box-icon type='solid' name='trash'></box-icon>
        </div>
      </div>
    </div>
  )
}