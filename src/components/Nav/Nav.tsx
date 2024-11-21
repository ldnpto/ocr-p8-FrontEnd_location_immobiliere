import { NavLink } from "react-router-dom";
import './Nav.scss';


export default function Nav () {    
    return (
        <nav className="nav-header">
            <NavLink to="/" className={({ isActive }) =>  isActive ? "nav-active" : ""  }>
                Accueil
            </NavLink>
            <NavLink to="/apropos" className={({ isActive }) =>  isActive ? "nav-active" : ""  }>
                A Propos
            </NavLink>
        </nav>
    );
}