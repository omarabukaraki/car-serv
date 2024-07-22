import React from 'react'

const StateButton = (props) => {
  return (
    <div className="btnComponent bg-white w-8 h-8 content-center mr-1">
     <div className='flex justify-center ali text-red-600 text-sm' >{props.icon}</div>
</div>
  )
}

export default StateButton
