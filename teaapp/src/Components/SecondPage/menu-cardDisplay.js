import { Link } from "react-router-dom"


export default function MenuCardDisplay(props){
    
   const renderData = ({menuData}) => {
    if(menuData){
        console.log(menuData);
        // console.log("MenuTYpe",menuData[0].menu_type)
        // <h1 style={{color:'red'}}>{menuData[0].menu_type}</h1>;
        return menuData.map((item) =>{
            return(
                <div className="box">
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
                            <Link to={`/details?menuId=${item.menu_id}`}>
                                <p className="item-title"><span>{item.item_name}</span> / Rs. {item.cost}</p>
                            </Link>
                            {/* <p>{item.description}</p> */}
                            {/* <p><span style={{color:'red',fontWeight:700}}>Benefits : </span>{item.benefits}</p> */}
                            {/* <button className="btn">Add To Cart</button> */}
                        </div>
                        <div className="text-box">
                            <div className="hr"></div>
                            <div className="box-lowerText">
                                <div className="left-lowerText">
                                    <p className="max-safety">Max Safety</p>
                                    <p className="delivery">Delivery</p>
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
   }
  

   return(
    <div className="imgMainContainer">
        {renderData(props)}
    </div>
   )

}