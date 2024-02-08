import { useState } from "react";
import { LOGO_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOlinestat from "../utils/useOnlinestat";
const Header = () => {
  const [button, setbutton] = useState("LOGIN");
  const onlinestat = useOlinestat();
  return (
    <div className="flex justify-between shadow-lg px-10">
      <div className="logocontainer">
        <img className="w-28" src={LOGO_url} />
      </div>
      <div className="flex  items-center">
        <ul className="flex  p-4 m-4">
          <li className="px-4">
           online status: {onlinestat? "✅":"🔴"}
          </li>
        <li className="px-4">
            <Link to="/" className="linkr">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="linkr">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="linkr">Contact us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button 
            className="login px-4  bg-green-400 rounded-lg"
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
