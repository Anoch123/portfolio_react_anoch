import React from 'react'

const PageStarter = ({title, subTitle}) => {
  return (
    <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default PageStarter