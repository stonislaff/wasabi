import './promotionsPage.scss'

import sushi from '../../assets/sushi.png'
import hb from '../../assets/hb.png'
import one_plus_one from '../../assets/1+1.png'
import sushi_time from '../../assets/sushi-15.png'
import PromotionCard from "../../components/card/promotionCard";


function PromotionsPage(){
    return(
        <div className="PromotionsPage">
            <div className="topHalf"></div>
            <div className="bottomHalf"></div>
            <div className="cardsContainer">
                <PromotionCard cardStyle='dark'  cardImage={one_plus_one} cardTitle='3 піцци' cardDescription='Замов 3 піцци та отримай шанс виграти ще 3 в подарунок.' buttonText='Замовити'/>
                <PromotionCard cardStyle='dark'  cardImage={sushi} cardTitle='Самовивіз' cardDescription='Знижка 10%, якщо забираєте замовлення в закладі.' buttonText='Замовити'/>
                <PromotionCard cardStyle='dark'  cardImage={sushi_time} cardTitle='Сотий клієнт' cardDescription='Кожен 100-й клієнт отримує замовлення абсолютно безкоштовно' buttonText='Замовити'/>
            </div>
        </div>
    )
}

export default PromotionsPage