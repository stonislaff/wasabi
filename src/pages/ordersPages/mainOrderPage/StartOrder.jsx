import './startOrder.scss'
import OrderedDishCard from "./orderedDishCard";
import FirstOrderPage from "./firstOrderPage/firstOrderPage";

function StartOrder(){
    return(
        <div className="StartOrder">
            <FirstOrderPage/>
        </div>
    )
}

export default StartOrder