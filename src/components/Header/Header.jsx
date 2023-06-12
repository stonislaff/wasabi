import './Header.scss'
import {NavLink} from "react-router-dom";
function Header(){
    return(
        <div className="Header">
            <nav className="navBar">
                <div className="logo">
                    <div className="logoText">
                            <span className="firstText"><NavLink to="/">Wasabi</NavLink></span>
                        <span className="secondText"><NavLink to="/">sushi & pizza</NavLink></span>
                    </div>
                </div>
                <div className="navElement"><NavLink to="/menu">Меню</NavLink></div>
                <div className="navElement"><NavLink to="/order-delivery">Зробити замовлення</NavLink></div>
                <div className="navElement"><NavLink to="/promotions">Акції</NavLink></div>
            </nav>
        </div>
    )
}

export default Header