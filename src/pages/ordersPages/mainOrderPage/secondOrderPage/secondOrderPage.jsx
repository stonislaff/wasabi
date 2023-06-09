import './secondOrderPage.scss';
import React, { useState } from 'react';

function SecondOrderPage({ onButtonClick }) {
    const [deliveryType, setDeliveryType] = useState('pickup');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState(['', '', '']);
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const handleDeliveryTypeChange = (event) => {
        setDeliveryType(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleRestaurantAddressChange = (index, event) => {
        const addresses = [...restaurantAddress];
        addresses[index] = event.target.value;
        setRestaurantAddress(addresses);
    };

    const handleDeliveryAddressChange = (event) => {
        setDeliveryAddress(event.target.value);
    };

    const renderPickupFields = () => {
        return (
            <div className="delivery">
                <div className="radio"></div>
                <label className="phoneNumber">
                    Номер телефону:
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>
                <div className="orderSubTitle">
                    Оберіть адресу найближчого до вас закладу:
                </div>
                <div>
                    <input
                        type="radio"
                        value="Кулика і гудачека 44"
                        checked={restaurantAddress[0] === 'Кулика і гудачека 44'}
                        onChange={(event) => handleRestaurantAddressChange(0, event)}
                    />
                    Кулика і гудачека 44
                </div>
                <div>
                    <input
                        type="radio"
                        value="Соборна 338"
                        checked={restaurantAddress[0] === 'Соборна 338'}
                        onChange={(event) => handleRestaurantAddressChange(0, event)}
                    />
                    Соборна 338
                </div>
                <div>
                    <input
                        type="radio"
                        value="Князя Романа 4"
                        checked={restaurantAddress[0] === 'Князя Романа 4'}
                        onChange={(event) => handleRestaurantAddressChange(0, event)}
                    />
                    Князя Романа 4
                </div>
            </div>
        );
    };

    const renderCourierFields = () => {
        return (
            <div className="delivery">
                <label  className="phoneNumber">
                    Номер телефону:
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>
                <div className="orderSubTitle">
                    Оберіть адресу найближчого до вас закладу:
                </div>
                <div>
                    <input
                        type="radio"
                        value="Кулика і гудачека 44"
                        checked={restaurantAddress[0] === 'Кулика і гудачека 44'}
                        onChange={(event) => handleRestaurantAddressChange(0, event)}
                    />
                    Кулика і гудачека 44
                </div>
                <div>
                    <input
                        type="radio"
                        value="Соборна 338"
                        checked={restaurantAddress[0] === 'Соборна 338'}
                        onChange={(event) => handleRestaurantAddressChange(0, event)}
                    />
                    Соборна 338
                </div>
                <div>
                    <input
                        type="radio"
                        value="Князя Романа 4"
                        checked={restaurantAddress[0] === 'Князя Романа 4'}
                        onChange={(event) => handleRestaurantAddressChange(0, event)}
                    />
                    Князя Романа 4
                </div>
                <label className="shippingAddress">
                    Адреса доставки:
                    <input
                        type="text"
                        value={deliveryAddress}
                        onChange={handleDeliveryAddressChange}
                    />
                </label>
            </div>
        );
    };

    return (
        <div className="SecondOrderPage">
            <div className="orderData">
                <div className="orderTitle">Заповніть дані для доставки</div>

                <div className="orderSubTitle">Оберіть спосіб доставки:</div>
                <label className="delivery">
                    <input
                        type="radio"
                        value="pickup"
                        checked={deliveryType === 'pickup'}
                        onChange={handleDeliveryTypeChange}
                    />
                    Самовивіз
                </label>
                <label className="delivery">
                    <input
                        type="radio"
                        value="courier"
                        checked={deliveryType === 'courier'}
                        onChange={handleDeliveryTypeChange}
                    />
                    Доставка кур'єром
                </label>
                {deliveryType === 'pickup' && renderPickupFields()}
                {deliveryType === 'courier' && renderCourierFields()}
                <div className="orderCompleteButton">
                    <button onClick={() => onButtonClick({ deliveryType, phoneNumber, restaurantAddress, deliveryAddress })}>Готово</button>
                </div>
            </div>
        </div>
    );
}

export default SecondOrderPage;