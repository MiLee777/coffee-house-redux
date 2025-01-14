import { dataCategories } from "../../../Data/dataCategories"
import { Filter } from "./Filter"

export const Categories = () => {
  return (
    <div className="menu__categories">
      {dataCategories.map((category, index) => 
      <Filter category={category} key={index} />)}
    </div>
  )
}