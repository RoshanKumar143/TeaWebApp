import './viewAll.css'
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import CostFilter from '../Filters/costFilter';
import HealthBenefitFilter from '../Filters/healthFilter';

export default function ViewAllDisplay(){

    const baseUrl = process.env.REACT_APP_API_URL

    const [allItems, setAllItems] = useState([]);
    
    useEffect(() => {
    console.log("Entered in to useEffect")
    fetch(`${baseUrl}/menu`, {method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        console.log(`${baseUrl}/menu`);
        console.log(data)
        setAllItems(data)
    })
    },[])




    //Cost Filter
    const setDataPerFilter = (data) => {
        setAllItems(data)
    }



    return(
        // <div id="para">
        //     <p>Hello</p>
        //     <p>This is ViewAllDisplay WebPage</p>
        // </div>
        <>
            <div class="outContainer">
       
                <div class="menu-items">
                    <div class="imgMainCont">
                    {
                        allItems.map((item) => {
                            return(
                                <div className="box">
                                    <div className="product-img">
                                        <img className="img" src={item.menu_image} alt="img"/>
                                        <div className="text-promoted">
                                            <p>Promoted</p>
                                        </div>
                                        <div className="text-offer">
                                            <p>20% OFF</p>
                                        </div>
                                    </div>
                                    <div className="textContent">
                                        <div className="item-details">
                                        <Link to={`/details?menuId=${item.menu_id}`}>
                                            <p className="item-title"><span>{item.item_name}</span> / Rs. {item.cost}</p>
                                        </Link>
                                            <p style={{color:'green', fontWeight:400, fontSize: '19px'}}>{item.description}</p>
                                            {/* <p style={{color:'green', fontWeight:400}}><span style={{color:'red',fontWeight:700}}>Benefits : </span>{item.benefits}</p> */}
                                            {/* <button className="btn">Add To Cart</button> */}
                                        </div>
                                        <div className="text-box">
                                            <div className="hr"></div>
                                            <div className="box-lowerText">
                                                <div className="left-lowerText">
                                                    <p className="max-safety">Max Safety</p>
                                                    <p className="delivery">Delivery</p>
                                                </div>
                                                <div className="right-lowerText">
                                                    <p>Follows all Max safety measures to ensure your food is safe.</p>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                
                                </div>
                            )
                        })
                    }
                        
                    </div>
                </div>

                <div class="filter-box">
                    <div class="filter-container">
                        <CostFilter
                        restPerCost = {(data) => {setDataPerFilter(data)}} />
                        <HealthBenefitFilter/>
                    </div>    
                </div>

            </div>   
        </>
    )
}