import React from 'react'

const Heading_Center = ({title, subTitle, description}) => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        {title}
      </div>
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {subTitle}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  )
}

export default Heading_Center