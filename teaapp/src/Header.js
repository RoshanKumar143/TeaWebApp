import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const url = process.env.REACT_APP_LOGIN_API_URL;

export default function Header(){
    console.log("Header Section")

     function changeMode(){
        document.body.classList.toggle('dark');
        const modeImageElement = document.getElementById('mode-img');   //targeting element
        modeImageElement.classList.toggle('mode-img')
    }


    const [userData, setUserData] = useState('');

    let navigate = useNavigate();
    useEffect(() => {
        if(sessionStorage.getItem('ltk') != null){
            fetch(`${url}/userinfo`,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])



    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        setUserData('');
        navigate('/')
    }



    const conditionalHeader = () => {
        if(userData){
            if(userData.name){
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                return(
                    <>
                        <Link to="/register" className='btn btn-primary'>
                          <span className="glyphicon glyphicon-user"></span> Hi {userData.name}
                        </Link> &nbsp;
                        <button onClick={handleLogout} className='btn btn-success'>
                            <span className="glyphicon glyphicon-log-out"></span> LogOut
                        </button>
                    </>
                )
            }
        }else{
            return(
                  <>
                      <Link to="/register" className='btn btn-primary'>
                          <span className="glyphicon glyphicon-user"></span> SignUp
                      </Link> &nbsp;
                      <Link to="/login" className='btn btn-success'>
                          <span className="glyphicon glyphicon-log-in"></span> LogIn
                      </Link>
                  </>
            )  
          }
    }


    
    return(
        // <Header>
            <nav className="navbar navbar-expand-lg bg-body-secondary fixed-top">
                <div className="container-fluid" id="navbar-element">
                    <Link to='/' style={{textDecoration:'none'}}>
                        <h1 id="nav-bar-title"><span id="nav-bar-title-span">T</span> 
                            <i className='bx bx-time' style={{color:'#39df0f',fontSize: '39px',paddingTop:'10px'}}></i>
                            <span style={{fontSize: '30px',color:'peru',fontFamily:'san-serif'}}>GuRu</span>
                        </h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <div className="navbar-nav ms-auto" >
                            {/* <Link to='/wcu-section'  className="nav-link"  id="nav-item">Why Choose Us?</Link> */}
                            <a className="nav-link" href="#wcu-section" id="nav-item">Why Choose Us?</a>
                            <a className="nav-link" href="#explore-menu-section" id="nav-item">Explore Menu</a>
                            <a className="nav-link" href="#paymentsection" id="nav-item">Delivery & Payment</a>
                            <a className="nav-link" href="#followus" id="nav-item">Follow Us</a>
                            {/* <a className="nav-link" href="#geo-location" id="nav-item"><i class='bx bxs-location-plus bx-tada' style={{color:"#977c83",fontSize: "35px"}}  ></i></a> */}
                            <a onClick={changeMode}>
                                <img src=" https://cdn-icons-png.flaticon.com/512/5115/5115625.png" id="mode-img" alt="" /> 
                            </a>
                        </div>

                        <div id="social">
                             {/* ConditionalRendering */}
                            {conditionalHeader()}
                        </div>

                    </div>
                </div>
            </nav>
        // </Header>


    )
}