import './thirdOrderPage.scss'
import successful from '../../../../assets/succesfull.svg'

function ThirdOrderPage(props){
    return(
        <div className="ThirdOrderPage">
            <div className="thirdOrderContent">
                <div className="thirdOrderImage">
                    <img src={successful}/>
                </div>
                <div className="thirdOrderText">
                    Замовлення успішно оформлено
                </div>
                <div className="thirdOrderSubText">
                    Номер вашого замовлення: {props.orderNumber}
                </div>
            </div>
        </div>
    )
}

export default ThirdOrderPage