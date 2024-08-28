import "./style.menu.css";

export const ModalMenu = ({ setIsOpenModalMenu, children }) => {

  const closeModalMenu = (e) => {
    if (e.target.classList.contains("modal-menu__overlay")) {
      setIsOpenModalMenu(false);
    }
  }

  return (
    <div className="modal-menu" onClick={(e) => e.stopPropagation()}>
      <div className="modal-menu__overlay"
      onClick={ closeModalMenu }>
        {children}
      </div>
    </div>
  )
}