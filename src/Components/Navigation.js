export const Navigation = ({ showMenu, handleLinkClick }) => {
  return (
    <nav className={`header__nav ${showMenu ? "show-menu" : ""}`}>
      <ul className="header__menu">
        <li className="header__link"><a href="#favorite" className="link" onClick={handleLinkClick}>Favorite coffee</a></li>
        <li className="header__link"><a href="#about" className="link" onClick={handleLinkClick}>About</a></li>
        <li className="header__link"><a href="#mobile" className="link" onClick={handleLinkClick}>Mobile app</a></li>
        <li className="header__link"><a href="#contact" className="link" onClick={handleLinkClick}>Contact us</a></li>
      </ul>
    </nav>
  )
}