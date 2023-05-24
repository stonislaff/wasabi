import './MainPage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import gps from '../../assets/gps.png'
import phone from '../../assets/phone.png'
function MainPage(){
        return(
            <div className="MainPage">
                <div className="topHalf"></div>
                <div className="bottomHalf"></div>
                <div className="infoBlock">
                    <div className="label">
                        Втілюй смак у життя разом з нами
                    </div>
                    <div className="infoLine">
                        <img src={gps}/>Кулика і Гудачека 44
                        <h1>|</h1>
                        <img src={phone}/>068-375-07-10
                    </div>
                    <div className="infoLine">
                        <img src={gps}/>Соборна 338
                        <h1>|</h1>
                        <img src={phone}/>063-273-33-02
                    </div>
                    <div className="infoLine">
                        <img src={gps}/>Князя Романа 4
                        <h1>|</h1>
                        <img src={phone}/>096-683-23-88
                    </div>
                </div>
            </div>
        )
}

export default MainPage