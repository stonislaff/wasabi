import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Header from "./components/Header/Header";
import StartOrder from "./pages/ordersPages/mainOrderPage/StartOrder";
import MenuPage from "./pages/menuPage/MenuPage";
import PromotionsPage from "./pages/promotionsPage/PromotionsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/order-delivery' element={<StartOrder/>}/>
              <Route path='/promotions' element={<PromotionsPage/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
