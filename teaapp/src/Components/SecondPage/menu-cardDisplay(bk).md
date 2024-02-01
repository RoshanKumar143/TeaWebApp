
export default function MenuCardDisplay(props){
    
   const renderData = ({menuData}) => {
    return menuData.map((item) =>{
        return(
            <div>
                <div className="product-img">
                    <img className="img" src={item.menu_image} alt="img"/>
                    <div className="text-promoted">
                        <p>Promoted</p>
                    </div>
                    <div className="text-offer">
                        <p>20% OFF</p>
                    </div>
                </div>
                <div className="textContent">
                    <div className="item-details">
                        <p className="item-title"><span>{item.item_name}</span> / Rs. {item.menu_price}</p>
                        <button className="btn">Add To Cart</button>
                    </div>
                    <div className="text-box">
                        <div className="hr"></div>
                        <div className="box-lowerText">
                            <div className="left-lowerText">
                                <p className="max-safety">Max Safety</p>
                                <p claclassNamess="delivery">Delivery</p>
                            </div>
                            <div className="right-lowerText">
                                <p>Follows all Max safety measures to ensure your food is safe.</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        )
    })
   }
  

   return(
    <div class="box">
        {renderData(props)}
    </div>
   )

}