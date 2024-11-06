import { useDispatch, useSelector } from "react-redux";
import { addItemToTotal, filterCategoryAdditives, getSelectedCategoryAdditives } from "../../../../redux/menuSlice";

export const CategoryAdditives = ({ dishesToMenu, additiveKey, additive, adjustedKey }) => {
  const dispatch = useDispatch();
  const selectedCategoryAdditives = useSelector(getSelectedCategoryAdditives);

  return (
    <div onClick={() => {
      dispatch(filterCategoryAdditives(additiveKey));
      dispatch(addItemToTotal(dishesToMenu));
    }}
      className={`option__btn ${selectedCategoryAdditives === additiveKey ? "option__btn_active" : ""}`}
      key={additiveKey}>
      <div className={`option ${selectedCategoryAdditives === additiveKey ? "option_active" : ""}`}>
        {adjustedKey}
      </div>
      <span className={`modal-menu__text ${selectedCategoryAdditives === additiveKey ? "modal-menu__text_active" : ""}`}>{additive.name}</span>
    </div>
  )
}