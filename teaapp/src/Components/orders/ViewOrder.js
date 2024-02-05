//here we will call api to display data
//here we make simple api call
import React,{useEffect, useState} from 'react';
import axios from 'axios'
import DisplayOrder from './DisplayOrder' 

import ComponentHeader from '../../ComponentsHeader';

const baseUrl = process.env.REACT_APP_POST_API_URL


const ViewOrder = () => {
    const [orders,setOrder] = useState();


    let sessionData = sessionStorage.getItem('userInfo')
    let data = JSON.parse(sessionData)


    useEffect( () => {
        //all orders
        axios.get(`${baseUrl}/orders`)
        // axios.get(`${baseUrl}/orders?email=${data.email}`)
        .then((res) => {
            setOrder(res.data)
            console.log(">>>ORDERS<<<",`${baseUrl}/orders`)
        })
    },[])

    return(
        <>
            <ComponentHeader/>
            {/* sending data to the nxt component */}
            <DisplayOrder orderData={orders}/>
        </>
    )
}




export default ViewOrder;