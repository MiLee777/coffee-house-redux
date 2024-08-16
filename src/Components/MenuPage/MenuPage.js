import { Header } from "../Header"
import { Cart } from "./Cart/Cart"
import { Dishes } from "./DishesComponents/Dishes"
import { Categories } from "./Filter/Categories"

export const MenuPage = () => {
  return (
    <div className="menu__container">
      <Header />
      <h1 className="menu__title">Behind each of our cups <br/> hides an <span className="menu__detail">amazing surprise</span></h1>
      <Cart />
      <Categories />
      <Dishes />
    </div>
  )
}