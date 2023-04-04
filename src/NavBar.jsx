import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <h1 className="logo">LOGO</h1>
            
            <div className="navbar-links-container">
                <NavLink
                    to="/"
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    Home
                </NavLink>

                <NavLink
                    to="/login"
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    Login
                </NavLink>

                <NavLink
                    to="/signup"
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    Sign Up
                </NavLink>
            </div>
        </nav>
    );
}
 
export default NavBar;