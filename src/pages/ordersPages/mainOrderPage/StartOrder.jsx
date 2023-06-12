import React, { useState } from "react";
import './startOrder.scss'
import OrderedDishCard from "./OrderedDishCard";
import FirstOrderPage from "./firstOrderPage/firstOrderPage";
import SecondOrderPage from "./secondOrderPage/secondOrderPage";
import ThirdOrderPage from "./thirdOrderPage/thirdOrderPage";
import GenerateOrderNumber from "./generateOrderNumber";
import axios from 'axios';

const orderNumber = GenerateOrderNumber;

function StartOrder(){
    const [showSecondPage, setShowSecondPage] = useState(false);
    const [showThirdPage, setShowThirdPage] = useState(false);

    const handleButtonClickFirstPage = () => {
        setShowSecondPage(true);
    };

    const handleButtonClickSecondPage = (data) => {
        const { deliveryType, phoneNumber, restaurantAddress, deliveryAddress } = data;
        console.log(deliveryType);
        console.log(phoneNumber);
        console.log(restaurantAddress[0]);
        console.log(deliveryAddress);
        const msgOrderNumber = `НОМЕР ЗАМОВЛЕННЯ: #${orderNumber}\n\n`
        const msgDeliveryType = `\nСпосіб доставки: ${deliveryType === 'courier' ? 'Курєр\nАдреса доставки: ' + deliveryAddress : 'Самовивіз'}`;
        const msgPhoneNumber = `\nНомер телефону: ${phoneNumber}`
        const msgRestaurantAddress = `\nАдреса закладу: ${restaurantAddress[0]}`;

        const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));

        const dishNames = {};
        cartItems.forEach((item) => {
            const dishName = item.dishName;
            dishNames[dishName] = (dishNames[dishName] || 0) + 1;
        });

        let dishListString = '\n\nЗамовлення:\n';
        Object.entries(dishNames).forEach(([dishName, count]) => {
            const plural = count > 1 ? 'х' + count : '';
            dishListString += `${dishName} ${plural}\n`;
        });

        const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.dishPrice), 0);
        const totalPriceString = `\n\nДО СПЛАТИ: ${totalPrice}₴`;

        axios.post('https://botlesya.com/send-message-fk290vkm2kA3', { message: msgOrderNumber + msgDeliveryType + msgRestaurantAddress + msgPhoneNumber + dishListString + totalPriceString})
        localStorage.clear()
        setShowThirdPage(true);
    };

    return(
        <div className="StartOrder">
            {showThirdPage ? (
                <ThirdOrderPage orderNumber={orderNumber} />
            ) : showSecondPage ? (
                <SecondOrderPage onButtonClick={handleButtonClickSecondPage} />
            ) : (
                <FirstOrderPage onButtonClick={handleButtonClickFirstPage}/>
            )}
        </div>
    );
}

export default StartOrder;