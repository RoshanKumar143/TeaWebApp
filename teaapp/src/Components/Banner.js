import './Banner.css'
import { useNavigate } from 'react-router-dom';

export default function Banner(){
    console.log("Banner Section")

    // coupon
    function onloadPage () {
        document.getElementById('coupon').style.visibility = 'visible';
    }

    function closeCoupon(){
        document.getElementById('coupon').style.visibility = 'hidden';
    }

    let navigate = useNavigate()

    return(
        
        <div id="banner-section" className="d-flex justify-content-center">
            {/* <h1 className='Banner'>Banner Component</h1> */}
            <div id="coupon">
                <button onClick={closeCoupon} id="couponBtn" >&times;</button>
                <div class="coupon-text">
                    <h1 id="coupon-heading">FESTIVE <br/> COMBO</h1>
                    <h6 id="sub-coupon-heading">Grab The Ultimate Deal Right Now</h6>    
                    <h3 id="coupon-para">Get 50% off on first Order</h3>  
                    <div class="coupon-code">
                        <div class="coupon-tag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="50" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                            </svg>        
                        </div>
                        <div class="coupon-text-div">
                            <h1 class="coupon-text-header">APPLY CODE <br/> <span>FESTIVE</span></h1>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="banner-content">
                <h1 className="banner-heading mb-3">TEA <span style={{ color: "crimson",textShadow:"2px 2px 2px #FFFFFF"}}>AND </span>FRIENDS <br/>MAKE PERFECT BLEND</h1>
                  <button className="order-button"  onClick={ () => navigate("/Listing_Menu") }  title="Click">Order Now</button>      
            </div> 
        </div> 
    )
}