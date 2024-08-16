import { dataMenu } from "../../../../Data/dataMenu"

export const CartItem = ({ cartItem }) => {

  console.log(cartItem);
  
  const dishesToCart = dataMenu.find(dish => dish.id === cartItem.id);
  console.log(dishesToCart);
  
  
  return (
    <div className="content">
      <h2>{ dishesToCart.name }</h2>
      <p>{ cartItem.quantity }</p>
    </div>
  )
}