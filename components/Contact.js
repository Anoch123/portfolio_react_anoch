import React from 'react'
import PageStarter from './PageStarter'
import Image from 'next/image'
import { ContactDetails } from './constants/constants'

const Contact = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width'>
        <PageStarter title="CONTACT ME" subTitle="Don't be shy to hit me up anytime!.&#128071;"/>
        <div className='grid grid-cols gap-2 md:grid-cols-3 lg:grid-cols-3 mt-10'>
          {
            ContactDetails.map((item) => (
              <div className='content flex py-2' key={item.key}>
                <Image src={item.image} alt="SVG Image" width={100} height={100} />
                <div className="item-body px-2 ">
                  <p className='mt-5'><span><b>{item.type}</b></span><br />
                    {item.details}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>    
  )
}

export default Contact