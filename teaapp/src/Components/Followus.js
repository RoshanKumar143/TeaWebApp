import './Followus.css'

export default function Followus(){
    return(
        <div class="follow-us-section pt-5 pb-5" id="followus">
            <div class="container">
                <div class="row">
                    <div class="col-12" >
                        <h1 class="follow-us-section-heading">Follow Us</h1>
                        <div class="d-flex flex-row justify-content-center" id="followus-section-socio">
                            <a href="https://www.twitter.com">
                                <i class="fa-brands fa-x-twitter  fa-xl" id="logo-size"></i>
                            </a>    
                            <a href="https://www.instagram.com">
                                <i class="fa-brands fa-instagram  fa-xl" id="logo-size"></i>
                            </a>

                            <a href="https://www.facebook.com">
                                <i class="fa-brands fa-square-facebook  fa-xl" id="logo-size"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}