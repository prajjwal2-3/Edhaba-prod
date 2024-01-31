import { useState } from "react";
import { LOGO_url } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [button, setbutton] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={LOGO_url} />
      </div>
      <div className="links">
        <ul className="navitems">
        <li>
            <Link to="/" className="linkr">Home</Link>
          </li>
          <li>
            <Link to="/about" className="linkr">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="linkr">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              button === "LOGIN" ? setbutton("LOGOUT") : setbutton("LOGIN");
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
