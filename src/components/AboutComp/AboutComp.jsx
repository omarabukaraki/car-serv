import React from 'react'
import AboutCart from '../AboutCart/AboutCart'
import * as Icon from 'react-bootstrap-icons';

const AboutComp = () => {
  return (
   <div className='flex flex-wrap justify-center my-16'>
        <AboutCart icon={<Icon.AwardFill  className='text-7xl w-1/2 text-red-600'/>} title={'Quality Servicing'}/>
        <AboutCart icon={<Icon.PersonFillGear  className='text-7xl w-1/2 text-red-600' />} title={'Expert Workers'} />
        <AboutCart icon={<Icon.Tools  className='text-7xl w-1/2 text-red-600' />} title={'Modern Equipment'}/>
   </div>
  )
}

export default AboutComp
