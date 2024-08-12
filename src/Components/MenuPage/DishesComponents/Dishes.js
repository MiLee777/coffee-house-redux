import { dataMenu } from "../../../Data/dataMenu"
import { Dish } from "./Dish";

export const Dishes = () => {
  return (
    <div className="menu__items">
      {dataMenu.map((item, index) => <Dish item={ item } key={ index }/>)}
    </div>
  )
}