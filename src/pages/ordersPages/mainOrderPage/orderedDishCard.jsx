import './orderedDishCard.scss'

function orderedDishCard(){
    return(
        <div className="OrderedDishCard">
            <div className="deleteSection">
                <button>X</button>
            </div>
            <div className="textSection">
                <div className="title">
                    Деруни зі свининою та грибами
                </div>
                <div className="weightText">50г</div>
            </div>
            <div className="countSection">
                <button>-</button>
                <div className="countText">1</div>
                <button>+</button>
            </div>
            <div className="priceSection">
                1000₴
            </div>
        </div>
    )
}

export default orderedDishCard