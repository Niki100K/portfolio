import React from 'react'
import './Education.css'

import education from '../../assets/education.png'
const Education = () => {
  return (
    <>
    <div className='white'></div>
      <div className='Education c'>
        <div className='con c r'>
          <div className='text'></div>
          <div className='img c'>
            <img src={education} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
