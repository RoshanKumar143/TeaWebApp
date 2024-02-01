import './Wcu.css'

export default function Wcu(){
    console.log("WCU")
    return(
        <div id="wcu-section" className="pt-5 pb-5">
            <div class="back-to-top">
                <a href="#" title="Back To Top">
                    <i class='bx bxs-up-arrow-alt' id='arrow-btn'></i>
                </a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="wcu-section-heading">Why Choose Us?</h1>
                        <p className="wcu-section-description">
                            {/* We Specially Import coffee-beans from Araku valley(Andhra Pradesh). */}
                            Tea is the magic key to the vault where my brain is kept
                        </p> 
                    </div>

                    <div className=" col-md-6 col-sm-12 col-lg-4">
                        <div className="wcu-card">
                            <img src="https://i.ibb.co/f2w9NQ7/online-order-removebg-preview.png" className="wcu-card-image" alt="logo"/>
                            <h1 className="wcu-card-title pb-2">Online Order</h1>
                            <p className="wcu-card-description pb-3">
                                Online order facility available.
                            </p>
                        </div>
                    </div>

                    <div className=" col-md-6 col-sm-12 col-lg-4">
                        <div className="wcu-card">
                            <img src="https://i.ibb.co/f2w9NQ7/online-order-removebg-preview.png" className="wcu-card-image" alt="logo"/>
                            <h1 className="wcu-card-title">Fresh Prepare</h1>
                            <p className="wcu-card-description">
                                The Staff in Tea stall can prepare delicious tea at the moment of order placed. And will be delivered with in stipulated time.
                            </p>
                        </div>
                    </div>

                    <div className=" col-md-6 col-sm-12 col-lg-4">
                        <div className="wcu-card">
                            <img src="https://i.ibb.co/f2w9NQ7/online-order-removebg-preview.png" className="wcu-card-image" alt="logo"/>
                            <h1 className="wcu-card-title">On First Order</h1>
                            <p className="wcu-card-description">
                                Coupons & Offers upto
                                <span className="offers">50% OFF</span>
                                and Exclusive Promo Codes on All type of Orders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}