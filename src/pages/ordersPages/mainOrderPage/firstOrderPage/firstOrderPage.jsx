import OrderedDishCard from "../OrderedDishCard";
import './firstOrderPage.scss'
import {NavLink} from "react-router-dom";
import React, { useState } from 'react';

function FirstOrderPage({onButtonClick}) {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const storedCartItems = JSON.parse(window.localStorage.getItem('cartItems'));
            return storedCartItems || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    });
    const handleRemoveAllItems = () => {
        setCartItems([]);
        window.localStorage.clear()
    };

    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems.length)
        if(cartItems.length - 1 === 0){
            console.log('cleared')
            handleRemoveAllItems()
        }
    };

    if(cartItems.length === 0){
        return (
            <div className="FirstOrderPage">
                <div className="emptyCartText">
                    Ваша корзина замовлень пуста
                    <div className="emptyCartSubText">
                        Оформіть ваше замовлення прямо зараз!
                    </div>
                    <NavLink to="/menu"><button>Переглянути меню</button></NavLink>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="FirstOrderPage">
                <div className="orderBlock">
                    <div className="orderedDishes">
                        <div className="orderTitle">Оформи замовлення прямо зараз!</div>
                        <hr/>
                        {cartItems && cartItems.map((dish, index) => (
                            <OrderedDishCard
                                key={index}
                                dishName={dish.dishName}
                                dishPrice={dish.dishPrice}
                                dishWeight={dish.dishWeight}
                                onRemove={() => handleRemoveItem(index)}
                            />
                        ))}
                        <div className="orderPriceText">
                            <div className="prePriceText"> До сплати:</div>
                            <div className="orderPrice">{
                                cartItems.reduce((sum, dish) => {
                                    return sum + parseInt(dish.dishPrice)
                                } , 0)
                            }₴</div>
                        </div>
                        <button className="goNext" onClick={onButtonClick}>Продовжити</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default FirstOrderPage;