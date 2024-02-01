import './DisplayOrder.css'
import React from "react";

const Display = (props) => {

    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.item}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.cost}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                    </tr>
                )
            })
        }
    }

    //iterate the data
        return(
            <div className="orders">
                 <div className="fluid-container mt-5 mb-5">
                    <center><h2 className='bg-primary'>Orders</h2></center>
                    <table className="table">
                        <thead className='table-danger' >
                            <tr>
                                <th>OrderId</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody className='table-light'>
                            {renderData(props)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    
}


export default Display;