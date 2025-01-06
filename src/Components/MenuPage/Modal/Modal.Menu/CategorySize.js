export const CategorySize = ({ sizeKey, size, isSelected, onSelect }) => (
  <div
    className={`option__btn ${isSelected ? "option__btn_active" : ""}`}
    onClick={onSelect}
  >
    <div className={`option ${isSelected ? "option_active" : ""}`}>
      {sizeKey.toLocaleUpperCase()}
    </div>
    <span className={`modal-menu__text ${isSelected ? "modal-menu__text_active" : ""}`}>{size.size}</span>
  </div>
);
