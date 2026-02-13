import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar(){
    return(
        <nav className="navbar">

            <h2 className="logo">ReactMart</h2>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </div>

        </nav>
    );
}