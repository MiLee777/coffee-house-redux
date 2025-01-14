import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../../redux/dishesSlice";

export const Filter = ({ category }) => {

  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div onClick={() => { dispatch(filterCategory(category.title)) }}
      className={selectedCategory === category.title ? 'category_active category' : 'category'}>
      <div className={selectedCategory === category.title ? 'category__img category__img_active' : 'category__img category__img_inactive'}>
        <img src={`../assets/icons/${category.src}.svg`} alt="Icon" />
      </div>
      <span className={selectedCategory === category.title ? 'category__title category__title_active' : 'category__title category__title_inactive'}>{category.title}</span>
    </div>
  )
}