import React, { useState } from "react";
import './startOrder.scss'
import OrderedDishCard from "./OrderedDishCard";
import FirstOrderPage from "./firstOrderPage/firstOrderPage";
import SecondOrderPage from "./secondOrderPage/secondOrderPage";
import ThirdOrderPage from "./thirdOrderPage/thirdOrderPage";
import GenerateOrderNumber from "./generateOrderNumber";

const orderNumber = GenerateOrderNumber;

function StartOrder(){
    const [showSecondPage, setShowSecondPage] = useState(false);
    const [showThirdPage, setShowThirdPage] = useState(false);

    const handleButtonClickFirstPage = () => {
        setShowSecondPage(true);
    };

    const handleButtonClickSecondPage = () => {
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
