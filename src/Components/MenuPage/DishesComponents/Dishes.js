import { useSelector } from "react-redux";
import { dataMenu } from "../../../Data/dataMenu"
import { Dish } from "./Dish";
import { getSelectedCategory } from "../../../redux/dishesSlice";

export const Dishes = () => {

  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="menu__items">
      {dataMenu
        .filter(item => {
          return selectedCategory === item.category;
        })
        .map((item) => <Dish item={item} key={item.id} />)}
    </div>
  )
}