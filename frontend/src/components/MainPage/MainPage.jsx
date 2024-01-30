import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import './MainPage.css'
import 'swiper/css'
import 'swiper/css/navigation';

import aws from '../../assets/aws.png'

import { IoArrowForwardOutline } from "react-icons/io5";

import Data from './Data.json'
import MainPageJS from './MainPageJS'
const MainPage = () => {
  const {
    formData,
    form,
    handleForm
  } = MainPageJS()
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
      <div className='con c'>
        <div className='skills c r flex-c'>
          {Data.skills.map((info, index) => (
            <div className='part c flex-c' key={index}>
              <div className='text c'>
                <h2>{info.h2}</h2>
                <Link>Lorem.</Link>
              </div>
              <div className='images c'>
                {info.images.map((img, indexImg) => (
                  <div className='img c' key={indexImg}>
                    <img src={require(`../../assets/${img}.png`)} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='about c'>
          <div className='me c r'>
            <div className='img c'>
              <img src={aws} alt="" />
            </div>
            <div className='info c r flex-c'>
              <header className='c r'>
                <h2>Contact Me</h2>
              </header>
              <form className='c flex-c' action="">
                {form.map((info, index) => (
                  <div className='input c' key={index}>
                    <input
                      id={info.id} 
                      type="text"
                      value={info.value}
                      onChange={(e) => handleForm(info.field, e, info.maxSymbols)}
                      required
                      placeholder='' 
                    />
                    <label htmlFor={info.id}>{info.label}</label>
                  </div>
                ))}
                <div className='input c'>
                  <textarea 
                    className='r'
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"
                    value={formData.message}
                    onChange={(e) => handleForm('message', e, 200)}
                    required
                    placeholder='Say something...' 
                  />
                </div>
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
          <div className='contact r c flex-c'>
            <header></header>
            {Data.contact.map((info, index) => (
              <div className='earch c flex-c' key={index}>
                <div className='info c'>
                  <div className='img c'>
                    <img src={require(`../../assets/${info.img}.png`)} alt="" />
                  </div>
                  <h2>{info.h2}</h2>
                </div>
                <h3>{info.h3}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
