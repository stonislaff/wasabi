import OrderedDishCard from "../orderedDishCard";
import './firstOrderPage.scss'
function FirstOrderPage(){
    return(
        <div className="FirstOrderPage">
            <div className="orderBlock">
                <div className="orderedDishes">
                    <div className="orderTitle">Оформи замовлення прямо зараз!</div>
                    <hr/>
                    <OrderedDishCard/>
                    <OrderedDishCard/>
                    <OrderedDishCard/>
                    <OrderedDishCard/>
                    <OrderedDishCard/>
                    <div className="orderPriceText">
                        <div className="prePriceText"> До сплати: </div><div className="orderPrice">123124₴</div>
                    </div>
                    <button className="goNext">Продовжити</button>
                </div>
            </div>
        </div>
    )
}

export default FirstOrderPage