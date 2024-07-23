import React from 'react'

const SectionsHeader = (props) => {
  return (
      <>
        <p className="font-bold text-red-600 capitalize">{props.title}</p>
        <h3 className="font-bold text-4xl text-blue-950 mt-2 mb-12">
          {props.body}
        </h3>
      </>
  )
}

export default SectionsHeader
