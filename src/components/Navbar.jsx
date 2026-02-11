import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navBar">
            <NavLink className="navItem" to="/">Home</NavLink>
            <NavLink className="navItem" to="/Shop">Shop</NavLink>
            <NavLink className="navItem" to="/Cart">Cart</NavLink>
        </div>
        
    );
}