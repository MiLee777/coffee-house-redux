import { useDispatch, useSelector } from "react-redux";
import { addItemToTotal, filterCategorySize, getSelectedCategorySize } from "../../../../redux/menuSlice";

export const CategorySize = ({ dishesToMenu, sizeKey, size }) => {
  const dispatch = useDispatch();
  const selectedCategorySize = useSelector(getSelectedCategorySize);

  return (
    <div onClick={() => {
      dispatch(filterCategorySize(sizeKey));
      dispatch(addItemToTotal(dishesToMenu));
    }}
      className={`option__btn ${selectedCategorySize === sizeKey ? "option__btn_active" : ""}`}>
      <div className={`option ${selectedCategorySize === sizeKey ? "option_active" : ""}`}>
        {sizeKey.toLocaleUpperCase()}
      </div>
      <span className={`modal-menu__text ${selectedCategorySize === sizeKey ? "modal-menu__text_active" : ""}`}>{size.size}</span>
    </div>
  )
}