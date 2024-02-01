
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Main from './Main';
import Home from './Components/Home';

import Menu_Card from './Components/SecondPage/menu_card';
import ViewAllDisplay from './Components/Viewall/viewAllDisplay';

import Details from './Components/Details/detailslogic';
import PlaceOrder from './Components/orders/PlaceOrder';
import ViewOrder from './Components/orders/ViewOrder';

import Login from './Components/login/loginComponent';
import Register from './Components/login/registerComponent';

import Footer from './Footer'
// import Header from './Header'


const Routing = () => {
    return(
        <>
            <BrowserRouter>
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>

                        <Route path='listing/:teaId' element={<Menu_Card/>} />

                        <Route path='Listing_Menu/' element={<ViewAllDisplay/>} />

                        <Route path='Details' element={<Details/>}/>

                        <Route path="PlaceOrder/:teaName" element={<PlaceOrder/>} />     

                        <Route path="VIewOrder" element={<ViewOrder/>}/>     

                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>           

                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;