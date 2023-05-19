import './MainPage.scss'
import sushi from '../../assets/sushi.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
function MainPage(){
        return(
            <div className="MainPage">
                <Carousel touch="False">
                    <Carousel.Item>
                        <img src={sushi}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sushi}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sushi}/>
                        <Carousel.Caption>
                            <Button variant="outline-warning">Замовити</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
}

export default MainPage