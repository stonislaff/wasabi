import './menuPage.scss'
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import MenuCard from "./menuCards/menuCard";
import testImg from '../../assets/1+1.png'

function MenuPage() {
    const [buttonClasses, setButtonClasses] = useState({
        button1: 'menuHeaderButtonActive',
        button2: 'menuHeaderButton',
        button3: 'menuHeaderButton',
        button4: 'menuHeaderButton',
        button5: 'menuHeaderButton'
    });

    const changeButtonClass = (buttonName) => {
        setButtonClasses(prevClasses => {
            const updatedClasses = { ...prevClasses };

            for (const name in updatedClasses) {
                if (name === buttonName) {
                    updatedClasses[name] = 'menuHeaderButtonActive';
                } else {
                    updatedClasses[name] = 'menuHeaderButton';
                }
            }

            return updatedClasses;
        });
    };

    const dishes = [
        {
            dishName: 'Деруни зі сметаною',
            dishDescription: 'Смажені картопляні оладки з хрусткою скоринкою та м\'якою серединкою, подаються зі сметаною.',
            dishPrice: '75',
            dishWeight: '150'
        },
        {
            dishName: 'Деруни зі свининою та грибами',
            dishDescription: 'Смажені картопляні оладки зі смачною свининою та грибами - ситна та смачна страва.',
            dishPrice: '105',
            dishWeight: '50'
        },
        {
            dishName: 'Камамбер смажений',
            dishDescription: 'Хрусткий смажений сир з ніжною серединкою - чудова закуска.',
            dishPrice: '120',
            dishWeight: '50'
        },
        {
            dishName: 'Курячі нагетси',
            dishDescription: 'Смажені шматочки курячого м\'яса - смачний вибір для закуски або дитячого меню.',
            dishPrice: '110',
            dishWeight: '150'
        },
        {
            dishName: 'Деруни зі свининою та грибами',
            dishDescription: 'Смажені картопляні оладки зі смачною свининою та грибами - ситна та смачна страва.',
            dishPrice: '105',
            dishWeight: '50'
        },
        {
            dishName: 'Деруни зі свининою та грибами',
            dishDescription: 'Смажені картопляні оладки зі смачною свининою та грибами - ситна та смачна страва.',
            dishPrice: '105',
            dishWeight: '50'
        },
    ];

    return (
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
                            <hr />
                            <div className="dishesBlock">
                                {dishes.map((dish, index) => (
                                    <MenuCard
                                        key={index}
                                        dishImage={testImg}
                                        dishName={dish.dishName}
                                        dishDescription={dish.dishDescription}
                                        dishPrice={dish.dishPrice}
                                        dishWeight={dish.dishWeight}
                                    />
                                ))}
                            </div>
                            <h2>Піцца</h2>
                            <h3>Відчуйте смакову магію в кожному шматочку піци!</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;