export const CategoryAdditives = ({ additiveKey, additive, isSelected, onToggle }) => (
  <div
    className={`option__btn ${isSelected ? "option__btn_active" : ""}`}
    onClick={onToggle}
  >
    <div className={`option ${isSelected ? "option_active" : ""}`}>
      {additiveKey}
    </div>
    <span className={`modal-menu__text ${isSelected ? "modal-menu__text_active" : ""}`}>{additive.name}</span>
  </div>
);