import './menuPage.scss'
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';

function MenuPage(){
    const [buttonClasses, setButtonClasses] = useState({
        button1: 'menuHeaderButtonActive',
        button2: 'menuHeaderButton',
        button3: 'menuHeaderButton',
        button4: 'menuHeaderButton',
        button5: 'menuHeaderButton'
    });
    const changeButtonClass = (buttonName) => {
        setButtonClasses(prevClasses => {
            const updatedClasses = {};
            updatedClasses[buttonName] = "menuHeaderButtonActive";
            Object.keys(prevClasses).forEach(name => {
                if (name !== buttonName) {
                    updatedClasses[name] = 'menuHeaderButton';
                }
            });

            return updatedClasses;
        });
    };

    return(
        <div className="MenuPage">
            <div className="topHalf"></div>
            <div className="bottomHalf"></div>
            <div className="contentLine">
                <div className="menuBlock">
                    <div className="menuHeader">
                        <button className={buttonClasses.button1} onClick={() => changeButtonClass('button1')}>Суші</button>
                        <button className={buttonClasses.button2} onClick={() => changeButtonClass('button2')}>Піца</button>
                        <button className={buttonClasses.button3} onClick={() => changeButtonClass('button3')}>Напої</button>
                        <button className={buttonClasses.button4} onClick={() => changeButtonClass('button4')}>Бургери</button>
                        <button className={buttonClasses.button5} onClick={() => changeButtonClass('button5')}>Страви на компанію</button>
                    </div>
                    <div className="menuBody">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPage