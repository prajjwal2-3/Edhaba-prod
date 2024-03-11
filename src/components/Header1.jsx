import { useState } from "react";
import { LOGO_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOlinestat from "../utils/useOnlinestat";
import { useSelector } from "react-redux";
const Header = () => {
  const [button, setbutton] = useState("LOGIN");
  const onlinestat = useOlinestat();
  const cart = useSelector((store) => store.cart.items)
  console.log(cart)
  return (
    <div className="flex justify-between shadow-lg sm:px-10 ">
      <div className="logocontainer">
        <img className="sm:w-28 w-14" src={LOGO_url} />
      </div>
      <div className="flex  items-center">
        <ul className="flex  sm:p-4 sm:m-4">
          <li className="sm:px-4 pr-1">
           online: {onlinestat? "✅":"🔴"}
          </li>
        <li className="sm:px-4 pr-1">
            <Link to="/" className="linkr">Home</Link>
          </li>
          <li className="sm:px-4 pr-1">
            <Link to="/about" className="linkr">About</Link>
          </li>
          <li className="sm:px-4 pr-1">
            <Link to="/contact" className="linkr">Contact </Link>
          </li>
          <li className="sm:px-4 pr-1">
            <Link to="/cart" className="linkr">Cart-{cart.length} </Link>
          </li>
      
          <button 
            className="login sm:px-4 px-1  bg-green-400 rounded-lg"
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
