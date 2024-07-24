import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const AboutCart = (props) => {
  return (
        <div className='flex bg-gray-200 px-5 py-10 m-2 w-80 '>
        {props.icon}
        <div className='ml-4'>
              <h3 className='font-bold text-lg text-blue-950'>{props.title}</h3>
              <p className='my-4 text-gray-500'>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
              <a className='underline capitalize'>read more</a>
              </div>
      </div>
  )
}

export default AboutCart
