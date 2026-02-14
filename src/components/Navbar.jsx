import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar(){
    const { cartCount } = useContext(CartContext);

    return(
        <nav className="navbar">

            <h2 className="logo">ReactMart</h2>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/cart">
                    Cart ({cartCount})
                </NavLink>
            </div>

        </nav>
    );
}