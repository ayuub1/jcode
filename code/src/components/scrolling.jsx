import React from "react";
import "./styles/scroll.css";
import arrow from "../assets/Vector.svg"
import mobile from "../assets/icons/phone.svg"
import pc from "../assets/icons/pc.svg"
import  web from "../assets/icons/web.svg"
import  bot from "../assets/icons/bots.svg"
import  backend from "../assets/icons/backend.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




/**
 * 
 * @returns 
  <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="MobileApps">
         <img src={mobile} alt="" className = "mobile"/>
         <h16>MobileApp</h16>
    </div>


    </SwiperSlide>

      <SwiperSlide>
  <div className="Desktop">
         <img src={pc} alt="" className = "pc"/>    

         <h17>Desktop App</h17>
        </div>

    </SwiperSlide>


      <SwiperSlide>

        <div className="Website">
        
         <img src={web} alt="" className = "web"/>

         <h18>WebSite</h18>

        </div>
    </SwiperSlide>
  
    </Swiper>
    </div>
 */





const Items = () => {
  return(
    <div>
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="MobileApps">
         <img src={mobile} alt="" className = "mobile"/>
         <h16>MobileApp</h16>
    </div></SwiperSlide>
      <SwiperSlide>      <div className="MobileApps">
         <img src={mobile} alt="" className = "mobile"/>
         <h16>MobileApp</h16>
    </div></SwiperSlide>
      <SwiperSlide>      <div className="MobileApps">
         <img src={mobile} alt="" className = "mobile"/>
         <h16>MobileApp</h16>
    </div></SwiperSlide>
      <SwiperSlide>      <div className="MobileApps">
         <img src={mobile} alt="" className = "mobile"/>
         <h16>MobileApp</h16>
    </div></SwiperSlide>

    </Swiper>
        </div>
  );
}





const ScrollingPage = () => {
  return (
    <div className="bgs">
      <h14>What are We Providing ?</h14>
      <Items/>
    <div className = 'list'>

   
    
    <img src = {arrow} className = "arrow"/>
       
    </div>

    </div>
  );
}



export default ScrollingPage;
