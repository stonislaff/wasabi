import './orderedDishCard.scss'

function OrderedDishCard(props){
    return(
        <div className="OrderedDishCard">
            <div className="deleteSection">
                <button>X</button>
            </div>
            <div className="textSection">
                <div className="title">
                    {props.dishName}
                </div>
                <div className="weightText">{props.dishWeight}г</div>
            </div>
            <div className="countSection">
                <button>-</button>
                <div className="countText">1</div>
                <button>+</button>
            </div>
            <div className="priceSection">
                {props.dishPrice}₴
            </div>
        </div>
    )
}

export default OrderedDishCard