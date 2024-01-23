const Header = ()=>{
    return(
        <div className="header">
            <div className="logocontainer">
                <img
                className="logo"
                 src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x0"/>
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