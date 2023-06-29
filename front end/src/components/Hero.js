import React from "react";
import '../css/Hero.css';
import { CiSearch } from 'react-icons/ci';
import Carousel from 'react-material-ui-carousel';
import { Paper} from '@mui/material';



const items = [
    {
      image: 'https://www.toyotazambia.co.zm/wp-content/uploads/2023/02/special-spare-parts-offer-890-600px-1.png',
      caption: 'First Slide',
    },
    {
      image: 'https://couponswala.com/blog/wp-content/uploads/2021/10/Orange-Minimalist-Weekend-Special-Spicy-Sauced-Winger-Banner-852-%C3%97-480-px.png',
      caption: '',
    },
    {
        image:'https://paradise-biryani.s3.ap-south-1.amazonaws.com/600x350_3.jpg'
    }
    // Add more items as needed
  ];

  function MyCarousel() {
    return (
      <Carousel animation="slide"
      
      indicatorContainerProps={{
        style: {
           zIndex:1,
          position: 'absolute',
          bottom: 10,
        },
      }}
      >
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    );
  }
  
  function Item({ item }) {
    return (
      <Paper>
        <img src={item.image} alt={item.caption} />
      </Paper>
    );
  }
  
  
function Hero(){
    return (
        <div className="Hero">
             <input placeholder="Seach..."/>
             <span className="search-icon"><CiSearch size={24} color="black"/></span>
             <MyCarousel/>
        </div>
    )
}


export default Hero