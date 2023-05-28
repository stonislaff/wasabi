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
                            <h3>Де натхнення зливається зі смаком і творить справжні кулінарні дива!</h3>
                            <h2>Закуски</h2>
                            <h3> Смаковий старт до непередбачуваних смакових подорожей!</h3>
                            <hr/>
                            <div className="dishesBlock">
                                <MenuCard dishName="Деруни зі сметаною" dishDescription="Смажені картопляні оладки з хрусткою скоринкою та м'якою серединкою, подаються зі сметаною." dishPrice="75" dishWeight="50"/>
                                <MenuCard dishName="Деруни зі свининою та грибами" dishDescription="смажені картопляні оладки зі смачною свининою та грибами - ситна та смачна страва." dishPrice="105" dishWeight="50"/>
                                <MenuCard dishName="Камамбер смажений" dishDescription="Хрусткий смажений сир з ніжною серединкою - чудова закуска." dishPrice="120" dishWeight="50"/>
                                <MenuCard dishName="Курячі нагетси" dishDescription="смажені шматочки курячого м'яса - смачний вибір для закуски або дитячого меню." dishPrice="110" dishWeight="150"/>
                            </div>
                            <h2>Піцца</h2>
                            <h3>Відчуйте смакову магію в кожному шматочку піци!</h3>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MenuPage