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
                <PromotionCard cardStyle='light'  cardImage={one_plus_one} cardTitle='1 + 1 = 3' cardDescription='Замов дві великих піцци та отримай третю абсолютно безкоштовно!' buttonText='Замовити'/>
                <PromotionCard cardStyle='dark'  cardImage={sushi} cardTitle='Акційний сет' cardDescription='Знижка в честь того, що я пишу диплом' buttonText='Замовити'/>
                <PromotionCard cardStyle='dark'  cardImage={sushi_time} cardTitle='День суші' cardDescription='Отримай 15% знижки на суші кожен вівторок!' buttonText='Замовити'/>
                <PromotionCard cardStyle='light'  cardImage={hb} cardTitle='З днем народження!' cardDescription='У тебе сьогодні день народження? Тримай -10%!' buttonText='Замовити'/>

            </div>
        </div>
    )
}

export default PromotionsPage