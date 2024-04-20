import { FaUser, FaSearch } from "react-icons/fa";
import logo from "../assets/Algolia-logo-white.png";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">
              <FaUser />
              Login
            </a>
          </li>
          <li>
            <select>
              <option>English</option>
              <option>Francais</option>
              <option>Deutsch</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <div className="header-left">
          <a href="#">
            <img src={logo} alt="Logo" className="main-logo" />
          </a>
          <ul className="nav">
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button className="btn btn-search">
            <FaSearch size={20} />
          </button>
          <button className="btn btn-border">Let`s Chat</button>
          <button className="btn">Start Free</button>
        </div>
      </div>
    </header>
  );
}
