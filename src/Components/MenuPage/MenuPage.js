import { Cart } from "./Cart/Cart";
import { Dishes } from "./DishesComponents/Dishes";
import { Categories } from "./Filter/Categories";

export const MenuPage = () => {
  return (
    <main>
      <div className="menu__container">
        <h1 className="menu__title">Behind each of our cups <br /> hides an <span className="menu__detail">amazing surprise</span></h1>
        <Cart />
        <Categories />
        <Dishes />
      </div>
    </main>
  )
}