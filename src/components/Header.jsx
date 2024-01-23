import { LOGO_url } from "../utils/constants";
const Header = ()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;