import './promotionsPage.scss'


import pizza_ from '../../assets/pizza-.jpg'
import one_plus_one from '../../assets/one_plus_one.png'
import peoples from '../../assets/100.jpg'
import PromotionCard from "../../components/card/promotionCard";


function PromotionsPage(){
    return(
        <div className="PromotionsPage">
            <div className="topHalf"></div>
            <div className="bottomHalf"></div>
            <div className="cardsContainer">
                <PromotionCard cardStyle='dark'  cardImage={one_plus_one} cardTitle='3 піцци' cardDescription='Замов 3 піцци та отримай шанс виграти ще 3 в подарунок.' buttonText='Замовити'/>
                <PromotionCard cardStyle='dark'  cardImage={pizza_} cardTitle='Самовивіз' cardDescription='Знижка 10%, якщо забираєте замовлення в закладі.' buttonText='Замовити'/>
                <PromotionCard cardStyle='dark'  cardImage={peoples} cardTitle='Сотий клієнт' cardDescription='Кожен 100-й клієнт отримує замовлення абсолютно безкоштовно' buttonText='Замовити'/>
            </div>
        </div>
    )
}

export default PromotionsPage