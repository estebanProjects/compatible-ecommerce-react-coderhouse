import "./NavBar.css"
import logo from '../../logo.svg';

import AiOutlineShoppingCart from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <header className="container">
            <div className="box_logo">
                <img src={logo} alt="logo" />
                <p>TiwiShop</p>
            </div>
            <nav className="nav_principal">
                <p>Inicio</p>
                <ul>
                    <li>Ofertas</li>
                    <li>Electrodomésticos</li>
                    <li>Libros</li>
                </ul>
            </nav>
            <AiOutlineShoppingCart/>
            <div className="box_login">
                <p>Login</p>
            </div>
        </header>
    )
}

export default NavBar