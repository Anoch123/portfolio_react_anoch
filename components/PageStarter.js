import React from 'react'

const PageStarter = ({title, subTitle}) => {
  return (
    <div className='home__text-container'>
        <h1 className='text-lg font-extrabold text-subTitle'>{title}</h1>
        <p className='text-2xl font-extrabold text-black'>{subTitle}</p>
    </div>
  )
}

export default PageStarter