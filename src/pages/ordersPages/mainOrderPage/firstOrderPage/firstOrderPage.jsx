import OrderedDishCard from "../OrderedDishCard";
import './firstOrderPage.scss'

function FirstOrderPage({ cartItems, onButtonClick }) {
    console.log(cartItems)
    return (
        <div className="FirstOrderPage">
            <div className="orderBlock">
                <div className="orderedDishes">
                    <div className="orderTitle">Оформи замовлення прямо зараз!</div>
                    <hr />

                    <div className="orderPriceText">
                        <div className="prePriceText"> До сплати: </div>
                        <div className="orderPrice">123124₴</div>
                    </div>
                    <button className="goNext" onClick={onButtonClick}>Продовжити</button>
                </div>
            </div>
        </div>
    );
}

export default FirstOrderPage;