import React from "react";
import "./header.scss";
import logobox from "../../assets/img/thebox.png";

const Header = () => {
  const handleClick = (e) => {
    const selectItem = e.target;
    const listItem = document.getElementsByClassName("enlace");
    for (let item of listItem) {
      item.classList.remove("hover");
    }
    selectItem.classList.add("hover");
  };
  return (
    <header>
      <div className="header-container">
        <a href="#">
          <img src={logobox} alt="thebox" />
        </a>
        <nav className="header-menu">
          <ul>
            <li>
              <a
                href="#"
                className="enlace hover"
                onClick={(e) => handleClick(e)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="enlace"
                onClick={(e) => handleClick(e)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="enlace"
                onClick={(e) => handleClick(e)}
              >
                Proyects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="enlace"
                onClick={(e) => handleClick(e)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="enlace"
                onClick={(e) => handleClick(e)}
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;