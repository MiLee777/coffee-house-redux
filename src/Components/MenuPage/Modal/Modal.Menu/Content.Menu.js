import { useDispatch, useSelector } from "react-redux";
import { dataMenu } from "../../../../Data/dataMenu";
import "./style.menu.css";
import { filterCategoryAdditives, filterCategorySize, getSelectedCategoryAdditives, getSelectedCategorySize } from "../../../../redux/menuSlice";


export const ContentMenu = ({ setIsOpenModalMenu, item }) => {

  const dishesToMenu = dataMenu.find(dish => item.id === dish.id);
  const dispatch = useDispatch();
  const selectedCategorySize = useSelector(getSelectedCategorySize);
  const selectedCategoryAdditives = useSelector(getSelectedCategoryAdditives)


  return (
    <div className="modal-menu__content"
      onClick={(e) => e.stopPropagation()}>
      <div className="modal-menu__container">
        <div className="modal-menu__img">
          <img src={`../assets/images/menu/${dishesToMenu.img}.jpg`} alt="Coffee" />
        </div>
        <div className="modal-menu__description">
          <div className="modal-menu__context">
            <h3 className="modal-menu__title">{dishesToMenu.name}</h3>
            <p className="modal-menu__text">{dishesToMenu.description}</p>
          </div>
          <div className="modal-menu__option">
            <p className="modal-menu__text">Size</p>
            <div className="option__btns">
              {Object.entries(dishesToMenu.sizes).map(([key, size]) => {
                return (
                  <div onClick={() => {dispatch(filterCategorySize(key))}}
                  className={`option__btn ${ selectedCategorySize === key ? "option__btn_active" : "" }`}
                  key={key}>
                    <div className={`option ${ selectedCategorySize === key ? "option_active" : "" }`}>
                      {key.toLocaleUpperCase()}
                    </div>
                    <span className={`modal-menu__text ${ selectedCategorySize === key ? "modal-menu__text_active" : "" }`}>{size.size}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="modal-menu__option">
            <p className="modal-menu__text">Additives</p>
            <div className="option__btns">
              {Object.entries(dishesToMenu.additives).map(([key, additive]) => {
                const numericKey = parseInt(key, 10);
                const adjustedKey = isNaN(numericKey) ? key : numericKey + 1;
                return (
                  <div onClick={() => {dispatch(filterCategoryAdditives(key))}} 
                  className={`option__btn ${ selectedCategoryAdditives === key ? "option__btn_active" : "" }`} 
                  key={key}>
                    <div className={`option ${ selectedCategoryAdditives === key ? "option_active" : "" }`}>
                      {adjustedKey}
                    </div>
                    <span className={`modal-menu__text ${ selectedCategoryAdditives === key ? "modal-menu__text_active" : "" }`}>{additive.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="modal-menu__total">
            <h3 className="modal-menu__title">Total: </h3>
            <p className="modal-menu__title">${ dishesToMenu.price }</p>
          </div>

          <div className="modal-menu__alert">
            <svg width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_268_10145)">
                <path d="M8 7.66663V11"
                  stroke="#403F3D"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M8 5.00667L8.00667 4.99926"
                  stroke="#403F3D"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
                  stroke="#403F3D"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_268_10145">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="modal-menu__alert-text">
              The cost is not final. Download our mobile app to see the final price and place your order.
              Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
            </p>
          </div>
          <button onClick={() => setIsOpenModalMenu(false)}
            className="modal-menu__btn-close">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}