import { React, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ComponentHeader from "../../ComponentsHeader";
import './PlaceOrder.css'


//Post Call
const baseUrl = process.env.REACT_APP_POST_API_URL

export default function PlaceOrder(){
    
    let params = useParams();
    console.log(params)
    const initialValues = {
    id:Math.floor(Math.random() * 1000000), //generate random ID
    item: params.teaName,
    name:'Roshan',
    email:'rosh@gmail.com',
    cost:Math.floor(Math.random()*1000),
    phone:9393972647,
    address:"Hon 12 sec 34"
    }
    
    const [values, setValues] = useState(initialValues)

    let navigate = useNavigate();

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout  = () => {
        console.log(values)
        //Making POST CALL
        //calling dummy api & passing headers(accept & content-type)
        fetch( `${baseUrl}/orders`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            //for body
            body:JSON.stringify(values)
        })
        //auto will re-direct to that url(page)
        .then(navigate('/ViewOrder'))
    }

    return(
        <>
          <ComponentHeader/>
            <div className="form d-flex justify-content-center">
                <div className="form-left">
                    <div className="col-12 col-md-5 order-1 order-md-2">
                        <div className="text-center">
                            <img src="https://i.ibb.co/h8SLK5h/order-now-removebg-preview.png" className="delivery-and-payment-section-img" alt="payment-Images"/>
                        </div>
                    </div>
                </div>
                <div className="form-right">
                    <form>
                        <div className="bg-info fs-3 fw-semibold">
                            Order For | <span>{ params.teaName}</span>
                        </div>
                        <div className="bg-light m-1">
                            <div className="container fw-semibold">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label for='fname' className='control-label'>Name</label>
                                        <input className='form-control' id='fname' name='name' value={values.name}  onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for='email' className='control-label'>Email</label>
                                        <input className='form-control' id='email' name='email' value={values.email} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-md-6 mt-2 mb-4">
                                        <label for='phone' className='control-label'>Phone</label>
                                        <input className='form-control' id='phone' name='phone' value={values.phone} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-md-6 mt-2 mb-4">
                                        <label for='address' className='control-label'>Address</label>
                                        <input className='form-control' id='address' name='address' value={values.address} onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div>
                                <button className="btn btn-warning mt-4 fs-6" onClick={checkout}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>    
            </div>    
        </>

    )
}