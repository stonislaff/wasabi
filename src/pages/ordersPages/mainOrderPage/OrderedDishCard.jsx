import './orderedDishCard.scss'
import deleteImg from '../../../assets/delete.svg'
function OrderedDishCard(props){
    return(
        <div className="OrderedDishCard">
            <div className="deleteSection">
                <button onClick={props.onRemove}>&#10060;</button>
            </div>
            <div className="textSection">
                <div className="title">
                    {props.dishName}
                </div>
                <div className="weightText">{props.dishWeight}г</div>
            </div>
            <div className="priceSection">
                {props.dishPrice}₴
            </div>
        </div>
    )
}

export default OrderedDishCard