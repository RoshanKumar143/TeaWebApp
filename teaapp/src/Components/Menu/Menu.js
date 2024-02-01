import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import './Menu.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const baseUrl = process.env.REACT_APP_API_URL 

export default function Menu(){
  console.log("Menu Section")
  
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    console.log("Entered in to useEffect")
    fetch(`${baseUrl}/teaCategories`, {method:'GET'})
    .then((res) => res.json())
    .then((data) => {
      console.log(`${baseUrl}/teaCategories`);
      console.log(data)
      setCategory(data)
    })
  },[])


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
              category.map((item) => {
                return(
                  <Link to={`/listing/${item.menutype_id}`}>
                      <div className="box" key={item.menutype_id}>
                        <img className="img" src={item.url} alt="Data Not Found"/>
                        <h1 id="menu-heading">{item.menu_type}</h1>
                      </div>
                  </Link>
                )
              })
          }
      </Slider>
</div>
)
}