import React, {useState} from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../Header';

const url = process.env.REACT_APP_LOGIN_API_URL;

const Register = () => {

//use same code in placeOrder

    let params = useParams();
    //making object of navigate
    let navigate = useNavigate();

    const initialValues = {
        name:'ViratRosh',
        email:'viratrosh@gmail.com',
        password:"9876543222",
        phone:9393972647
    }

    const [values,setValues] = useState(initialValues)

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
        fetch( `${url}/register`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            //for body
            body:JSON.stringify(values)
        })
        //auto will re-direct to that url(page)
        .then(navigate('/login'))
    }

    return(
        <>
          <Header/>
            <div className='container'>
                <hr/>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className='control-label'>Name</label>
                                <input className='form-control' id="fname"
                                name="name" value={values.name} onClick={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                name="email" value={values.email} onClick={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="password" className='control-label'>Password</label>
                                <input className='form-control' id="password"
                                name="password" value={values.password} onClick={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="phone" className='control-label'>Phone</label>
                                <input className='form-control' id="phone"
                                name="phone" value={values.phone} onClick={handleInputChange}/>
                            </div>
                        </div>

                        <div className="btn btn-success" onClick={checkout}>Register</div>

                    </div>
                </div>
            </div>  
        </>
    )
}

export default Register;
