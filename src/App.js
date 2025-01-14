import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { MenuPage } from "./Components/MenuPage/MenuPage";
import Logo from "./assets/logo.png";
import { MainPage } from "./Components/MainPage/MainPage";
import { useState } from "react";
import { Footer } from "./Components/Footer";
import { Navigation } from "./Components/Navigation";

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => {
      if (!prevShowMenu) {
        document.body.classList.add("noscroll");
      } else {
        document.body.classList.remove("noscroll");
      }
      return !prevShowMenu;
    });
  }

  const handleLinkClick = () => {
    setShowMenu(false);
    document.body.classList.remove("noscroll");
  }

  return (
    <div className="App">
      <Router>
        <header className="header">
          <div className="header__container">
            <div className="header__logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <Navigation showMenu={showMenu} handleLinkClick={handleLinkClick} />
            <div className="header__menu-page header__link">
              <Link to="/menu" className="link">
                Menu
                <svg width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z"
                    stroke="#403F3D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675"
                    stroke="#403F3D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5"
                    stroke="#403F3D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663"
                    stroke="#403F3D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="header__hamb"
              onClick={toggleMenu}>
              <div className={`hamb__field ${showMenu ? "active" : ""}`}>
                <span className="hamb__bar"></span>
                <span className="hamb__bar"></span>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
