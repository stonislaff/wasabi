import './menuCard.scss'

function MenuCard(props){
    return(
        <div className="MenuCard">
            <div className="dishName">{props.dishName}</div>
            <div className="dishDescription">{props.dishDescription}</div>
            <div className="dishWeight">{props.dishWeight}г</div>
            <div className="dishPrice">{props.dishPrice}₴</div>
        </div>
    )
}

export default MenuCard