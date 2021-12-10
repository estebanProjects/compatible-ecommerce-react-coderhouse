import "./NavBar.css"
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <header className="container">
            <div className="box_logo">
                <img src={logo} alt="logo" />
                <p>TiwiShop</p>
            </div>
            <nav className="nav_principal">
                <Link to="/" className="item">
                    <p>Inicio</p>
                </Link>
                <ul>
                    <Link to="/category/Ordinary_Drink" className="item">
                        <li>Bebidas Ordinarias</li>
                    </Link>
                    <Link to="/category/Cocktail" className="item">
                        <li>Cócteles</li>
                    </Link>
                </ul>
            </nav>
            <CartWidget/>
            <div className="box_login">
                <p>Login</p>
            </div>
        </header>
    )
}

export default NavBar