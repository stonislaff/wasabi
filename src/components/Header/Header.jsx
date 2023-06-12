import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Header">
            <nav className="navBar">
                <div className="logo">
                    <div className="logoText">
            <span className="firstText">
              <NavLink to="/">Wasabi</NavLink>
            </span>
                        <span className="secondText">
              <NavLink to="/">sushi & pizza</NavLink>
            </span>
                    </div>
                </div>

                {/* Button for toggling the dropdown menu */}
                <div className="menuToggle" onClick={handleMenuToggle}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Dropdown menu */}
                <div className={`dropdownMenu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="navElement">
                        <NavLink to="/menu">Меню</NavLink>
                    </div>
                    <div className="navElement">
                        <NavLink to="/order-delivery">Зробити замовлення</NavLink>
                    </div>
                    <div className="navElement">
                        <NavLink to="/promotions">Акції</NavLink>
                    </div>
                </div>

                {/* Regular navigation elements */}
                <div className="navElement">
                    <NavLink to="/menu">Меню</NavLink>
                </div>
                <div className="navElement">
                    <NavLink to="/order-delivery">Зробити замовлення</NavLink>
                </div>
                <div className="navElement">
                    <NavLink to="/promotions">Акції</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Header;
