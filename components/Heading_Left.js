import React from 'react'

const Heading_Left = ({title, subTitle}) => {
  return (
    <div className="text-left mb-4">
      <div className="inline-flex items-left gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        {title}
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        {subTitle}
      </h1>
    </div>
  )
}

export default Heading_Left