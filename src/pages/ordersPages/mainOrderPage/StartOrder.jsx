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

    const handleButtonClickSecondPage = () => {
        axios.post('http://localhost:5000/send-message', { message: 'Hello from React!' })
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
