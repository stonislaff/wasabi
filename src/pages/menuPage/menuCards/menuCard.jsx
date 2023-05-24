import './menuCard.scss'

function MenuCard(props){
    return(
        <div className="MenuCard">
            <h2>{props.sectionName}</h2>
            <h3>{props.sectionDescription}</h3>
            <hr/>
            <div className="dishesBlock">
                <div className="dishesLine">

                </div>
            </div>
        </div>
    )
}

export default MenuCard