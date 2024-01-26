import { useState } from "react";
import { LOGO_url } from "../utils/constants";
const Header = ()=>{
    const [button,setbutton] = useState("LOGIN");
    return(
        <div className="header">
            <div className="logocontainer">
                <img
                className="logo"
                 src = {LOGO_url} />
            </div>
            <div className="links">
                <ul className="navitems">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{
                        setbutton("LOGOUT");
                    }}
                    >{button}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;