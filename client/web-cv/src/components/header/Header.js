import "./Header.css";
import { NavLink } from "react-router-dom";

const links = [
  { text: "Services", to: "/" },
  { text: "Education", to: "/education" },
  { text: "Contacts", to: "/contacts" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Заменяем NavLink на обычный текстовый элемент */}
          <span className="nav_logo">
            <strong>Teacher</strong> portfolio
          </span>
          <ul className="nav_menu">
            {links.map((link, index) => (
              <li className="menu_item" key={index}>
                <NavLink className="menu_item_link" to={link.to}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
