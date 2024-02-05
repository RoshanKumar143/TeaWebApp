import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import ComponentHeader from '../../ComponentsHeader';

const url = process.env.REACT_APP_LOGIN_API_URL;

const Login = () => {
  
    //use same code in placeOrder

    //making object of navigate
    let navigate = useNavigate();
    const [message, setMessage] = useState('')

    const initialValues = {
        email:'viratrosh@gmail.com',
        password:"9876543222"
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
        fetch( `${url}/login`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            //for body
            body:JSON.stringify(values)
        })
        //auto will re-direct to that url(page)
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token);  //logintoken => ltk   
                navigate('/')                               
            }
        })
    }




return(
    <>
      <ComponentHeader/>
        <div style={{margin:"160px"}} className='container'>
            <hr/>
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3>Login</h3>
                </div>

                <div className="panel-body">
                    <div className="row">

                        <h2 style={{color:'red'}}>{message}</h2>

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

                    </div>
                    <div className="btn btn-warning mt-3" onClick={checkout}>Login</div>
                </div>
            </div>
        </div>  
    </>
)
}

export default Login;
