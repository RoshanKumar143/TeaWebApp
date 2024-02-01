// export default function Test(){
//     console.log("Testing")
//     return(
//         <h1>Testing Component</h1>
//     )
// }


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import './Menu.css'


export default function Menu() {
    console.log("Menu Section")

    let teaCategory= [
        {
            menutype_id:1,
            menu_type:"Chai Varieties",
            url : "https://i.ibb.co/Vx6rJnX/Chai-Variety.jpg"
        },
        {
            menutype_id:2,
            menu_type :"Black Tea",
            url : "https://i.ibb.co/PC00qst/Black-Tea-Variety.jpg"
        },
        {
            menutype_id :3,
            menu_type :"Green Tea",
            url : "https://i.ibb.co/XWBPNmB/Green-Tea-Variety.jpg"
        },
        {
            menutype_id :4,
            menu_type :"Herbal and Infusions",
            url : "https://i.ibb.co/hcS0kKK/images-q-tbn-ANd9-Gc-Qz-ym-Tvlxd-QOUNd-Ct-KGGLnd-Hl-E-t-Kg254fw-usqp-CAU.jpg" 
        },
        {
            menutype_id :5,
            menu_type :"Iced Teas",
            url : "https://i.ibb.co/mB7r33n/Iced-Tea-Variety.jpg" 
        },
        {
            menutype_id :6,
            menu_type :"Coffee Beverages", 
            url : "https://i.ibb.co/7b7Lbwx/cappuccino.jpg"
        },
        {
            menutype_id :7,
            menu_type :"Milk Alternatives",
            url : "https://i.ibb.co/0hJFSdQ/Buffalo-Milk.jpg" 
        },
        {
            menutype_id :8,
            menu_type :"Specialty and Fusion Teas ",
            url : "https://i.ibb.co/dLC0ZgG/images-q-tbn-ANd9-Gc-Sg-F3-KIQYj7-XITZ5-VNGEz-FXHP0-R2p-Qt-SJsqg-usqp-CAU.jpg"
        },
        {
            menutype_id :9,
            menu_type :"Snacks",
            url : "https://i.ibb.co/4T2tKVb/uo4swh9xqwt61.jpg" 
        }
    
    ]
  

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return(
        <div className='carousel' id="explore-menu-section">
          <h2 className="menu-title">Popular Tea Categories</h2>

          <Slider {...settings}>
              {
                  teaCategory.map((item) => {
                    return(
                      <div className="box" key="item.menutype_id">
                          <img className="img" src={item.url} alt="Data Not Found"/>
                          {/* <h1><span>{item.id}</span> {item.name}</h1> */}
                          <h1 id="menu-heading">{item.menu_type}</h1>
                      </div>
                    )
                  })
              }
          </Slider>
    </div>
    )
}