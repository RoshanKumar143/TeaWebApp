import { useState, useEffect} from 'react'
import './menu_card.css'
import ComponentHeader from '../../ComponentsHeader';
import MenuCardDisplay from './menu-cardDisplay';

import axios from 'axios';
import { useParams } from 'react-router-dom';


const baseUrl = process.env.REACT_APP_API_URL 

export default function Menu_Card(){

    let params = useParams();

    const [menuItems, setMenuItems] = useState([]);

    let teaId = params.teaId

    console.log("Entered To Second Page")
    useEffect(() => {
        sessionStorage.setItem('teaId',teaId)
        // http://localhost:8000/menu?teaId=6
        axios.get(`${baseUrl}/menu?teaId=${teaId}`)
        .then((res) => {
            setMenuItems(res.data)
            console.log("Entered To :",`${baseUrl}/menu?teaId=${teaId}`)
            console.log("Data>>>>>",res.data)
            // console.log(menuItems)
        })
    },[])


    return(
        <>
          <ComponentHeader/>
            <div className="outerContainer">
                {/* <h1>{menuItems.menu_type}</h1> */}
               
                <div className="left-sidebar">
                    {/* <h1 style={{color:'red'}}>{setMenuItems[0].menu_type}</h1>; */}
                    {/* <div className="imgMainContainer"> */}
                        <MenuCardDisplay menuData={menuItems} />
                    {/* </div> */}
                </div>
                {/* <div className="right-sidebar">
                    <div className="filter">
                        <p>Menu Categories</p>
                        <ul>
                            <li>
                                <input type="checkbox"/>
                                <label>Chai Varieties</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label>Black Tea</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label>Green Tea</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label>Herbal and Infusions</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label>Iced Teas</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label>Snacks</label>
                            </li>
                        </ul>
            
                
                        <p>View All Items</p>
                        <ul>
                            <li>
                                <input type="checkbox"/>
                                <label>Full Menu</label>
                            </li>
                        </ul>

                    </div>
                </div> */}

            </div>
        </>
    )
}