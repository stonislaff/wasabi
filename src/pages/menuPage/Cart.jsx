import React, { useState } from 'react';
import FirstOrderPage from '../ordersPages/mainOrderPage/firstOrderPage/firstOrderPage';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Функція для додавання страви до кошика
    const addToCart = (dish) => {
        setCartItems((prevCartItems) => [...prevCartItems, dish]);
    };

    // Передача компонента FirstOrderPage зі списком елементів кошика
    return <FirstOrderPage cartItems={cartItems} />;
}

export default Cart;