import './menuPage.scss'
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import MenuCard from "./menuCards/menuCard";

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
            <div className="bottomHalf">
                <div className="contentBlock">
                    <div className="menuBlock">
                        <div className="menuText">
                            <h1>Меню</h1>
                            <h3>Опис меню</h3>
                            <MenuCard sectionName="Закуски" sectionDescription="Опис закусок бла бла бла бла бла бла бла бла бла "/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MenuPage