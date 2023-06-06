import './menuPage.scss';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import MenuCard from './menuCards/menuCard';
import testImg from '../../assets/1+1.png';
import Cart from './Cart';
import dishesList from "./dishesList";


const dishes = dishesList

function MenuPage() {
    const [cartItems, setCartItems] = useState(() => {
        const items = JSON.parse(window.localStorage.getItem('cartItems'));
        return items || [];
    });

    useEffect(() => {
        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (dish) => {
        setCartItems((prevItems) => [...prevItems, dish]);
    };

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    return (
        <div className="MenuPage">
            <div className="topHalf"></div>
            <div className="bottomHalf">
                <div className="contentBlock">
                    <div className="menuBlock">
                        <div className="menuText">
                            <h1>Меню</h1>
                            <h3>
                                Де натхнення зливається зі смаком і творить справжні кулінарні
                                дива!
                            </h3>
                            <h2>Закуски</h2>
                            <h3> Смаковий старт до непередбачуваних смакових подорожей!</h3>
                            <hr />
                            <div className="dishesBlock">
                                {dishes.map((dish, index) => (
                                    <MenuCard
                                        key={index}
                                        {...dish}
                                        addToCart={() => addToCart(dish)}
                                    />
                                ))}
                            </div>
                            <h2>Піцца</h2>
                            <h3>Відчуйте смакову магію в кожному шматочку піци!</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
