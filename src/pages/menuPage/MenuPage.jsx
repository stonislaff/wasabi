import './menuPage.scss';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import MenuCard from './menuCards/menuCard';
import testImg from '../../assets/1+1.png';
import Cart from './Cart';
import dishesList from "./dishesList";

const dishes = dishesList;

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

    function outputDishes(categoryNumber) {
        return (
            <div className="dishesBlock">
                {dishes.filter((dish) => dish.category === categoryNumber).map((dish, index) => (
                    <MenuCard
                        key={index}
                        {...dish}
                        addToCart={() => addToCart(dish)}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="MenuPage">
            <div className="topHalf"></div>
            <div className="bottomHalf">
                <div className="contentBlock">
                    <div className="menuBlock">
                        <div className="menuText">
                            <h1>Меню</h1>
                            <h3>
                                Де натхнення зливається зі смаком і творить справжні кулінарні дива!
                            </h3>
                            <Nav variant="pills" className="menuButtons">
                                <Nav.Item>
                                    <Nav.Link
                                        className={activeButton === 1 ? 'active' : ''}
                                        onClick={() => handleButtonClick(1)}
                                    >
                                        Закуски
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className={activeButton === 2 ? 'active' : ''}
                                        onClick={() => handleButtonClick(2)}
                                    >
                                        Піцца
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className={activeButton === 3 ? 'active' : ''}
                                        onClick={() => handleButtonClick(3)}
                                    >
                                        Бургери
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className={activeButton === 4 ? 'active' : ''}
                                        onClick={() => handleButtonClick(4)}
                                    >
                                        Сети суші
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            {activeButton === 1 && (
                                <>
                                    <h2>Закуски</h2>
                                    <h3>Смаковий старт до непередбачуваних смакових подорожей!</h3>
                                    <hr />
                                    {outputDishes(1)}
                                </>
                            )}
                            {activeButton === 2 && (
                                <>
                                    <h2>Піцца</h2>
                                    <h3>Відчуйте смакову магію в кожному шматочку піци!</h3>
                                    <hr />
                                    {outputDishes(2)}
                                </>
                            )}
                            {activeButton === 3 && (
                                <>
                                    <h2>Бургери</h2>
                                    <h3> Розкрийте нові гастрономічні відчуття з нашою різноманітною палітрою бургерів.</h3>
                                    <hr />
                                    {outputDishes(3)}
                                </>
                            )}
                            {activeButton === 4 && (
                                <>
                                    <h2>Сети суші</h2>
                                    <h3>Зануртесь у світ азійської кухні зі смачними ролами та іншими японськими делікатесами.</h3>
                                    <hr />
                                    {outputDishes(4)}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
