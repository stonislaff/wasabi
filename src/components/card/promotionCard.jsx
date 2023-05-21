import './promotionCard.scss'
import {Button} from "react-bootstrap";
import button from "bootstrap/js/src/button";
import cart from '../../assets/cart.svg'

function PromotionCard(props){
    const cardStyle = props.cardStyle === 'dark' ? "darkCardStyle" : 'lightCardStyle';
    return(
        <div className={cardStyle}>
            <div className="cardImage">
                <img src={props.cardImage}/>
            </div>
            <div className="cardTextPart">
                <div className="cardTitle">
                    {props.cardTitle}
                </div>
                <div className="cardDescription">
                    {props.cardDescription}
                </div>
            </div>
            <div className="cardButtonPart">
                <Button variant="outline-danger">
                    {props.buttonText}
                </Button>
            </div>
        </div>
    )
}

export default PromotionCard