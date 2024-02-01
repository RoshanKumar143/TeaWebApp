import './Payment.css'

export default function Payment(){
    console.log("Payment Section")

    const payment_options = [
        {
            paymentOption_id:"1", 
            url:"https://i.ibb.co/6gjJhWF/visa.png"
         },
         {
            paymentOption_id:"2",
            url:"https://i.ibb.co/SPDRCzm/master-card-img.png"
        },
        {
            paymentOption_id:"3",
            url:"https://i.ibb.co/7vNby2B/paypal-card-img.png"
        },
        {
            paymentOption_id:"4",
            url:"https://i.ibb.co/5vq75XD/american-express-img.png"
        },
        {
            paymentOption_id:"5",
            url:"https://i.ibb.co/HnhLsHX/upi-removebg-preview.png"
        }
        

    ]

    return(
        <div className="delivery-and-payment-section pt-5 pb-5" id="paymentsection">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 order-1 order-md-2">
                        <div className="text-center">
                            <img src="https://i.ibb.co/h8SLK5h/order-now-removebg-preview.png" className="delivery-and-payment-section-img" alt="payment-Images"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 order-2 order-md-1">
                        <h1 className="delivery-and-payment-section-heading">
                            Delivery and Payment Details
                        </h1>
                        <p className="delivery-and-payment-section-description">
                            Enjoy hassle-free payment with the multiple payment options
                            available for you.<br/> With live track your order on maps too... 
                        </p>
                        <button className="custom-button">Order Now</button>
                        {
                            payment_options.map((item) => {
                                return(
                                    <div key={item.paymentOption_id}>
                                        <img src={item.url} className="payment-card-img" alt="payment-Images"  />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}