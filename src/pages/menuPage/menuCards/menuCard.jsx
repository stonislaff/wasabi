import React, { useState } from 'react';
import './menuCard.scss';

function MenuCard(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Додаткова логіка для додавання товару в кошик
        props.addToCart();

        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };

    return (
        <div className="MenuCard">
            <div className="dishImage">
                <img src={props.dishImage} alt={props.dishName} />
            </div>
            <div className="dishName">{props.dishName}</div>
            <div className="dishDescription">{props.dishDescription}</div>
            <div className="dishWeightAndPrice">
                {props.dishPrice}₴ / {props.dishWeight}г
            </div>
            <div className="dishButton">
                <button onClick={handleClick}>
                    {isClicked ? <span>&#10003; Додано до кошика</span> : 'Додати до кошика'}
                </button>
            </div>
        </div>
    );
}

export default MenuCard;
