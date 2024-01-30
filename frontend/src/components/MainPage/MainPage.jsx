import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import './MainPage.css'
import 'swiper/css'
import 'swiper/css/navigation';


import Data from './Data.json'
import { IoArrowForwardOutline } from "react-icons/io5";
const MainPage = () => {
  return (
    <div className='MainPage c flex-c'>
      <div className='header c r'>
        <h2>Actions</h2>
        <Link>
          view all
        </Link>
      </div>
      <div className='cards c'>
        {Data.cards.map((info, index) => (
          <div className='card c r desktop' key={index}>
            <div className='text c flex-c'>
              <h2>{info.h2}</h2>
              <p>{info.p}</p>
              <button>See <IoArrowForwardOutline id='arrow'/></button>
            </div>
            <div className='img c'>
              <img src={require(`../../assets/${info.icon}.png`)} alt="" />
            </div>
          </div>
        ))}
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          {Data.cards.map((info, index) => (
            <SwiperSlide key={index}>
              <div className='card c r mobile' key={index}>
                <div className='text c flex-c'>
                  <h2>{info.h2}</h2>
                  <p>{info.p}</p>
                  <button>See <IoArrowForwardOutline id='arrow'/></button>
                </div>
                <div className='img c'>
                  <img src={require(`../../assets/${info.icon}.png`)} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MainPage
