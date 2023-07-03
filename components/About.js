import React from 'react'
import { Aboutme } from './constants/constants'
import Timeline from './Timeline'
import PageStarter from './PageStarter'

const About = () => {
  return (
    <div className='sm:-mt-16 -mt-12 padding-x padding-y max-width'>
      <div className='grid grid-cols gap-4 md:grid-cols-2 lg:grid-cols-2'>
        <div>
          <PageStarter title="ABOUT ME" subTitle="Oh this was such a lovely Journey!"/>
          {
            Aboutme.map((p,i) => {
              return (
                <p className="mt-5" key={i}>{p.description}</p>
              )
            })
          }
        </div>
        <Timeline/>
      </div>        
    </div>
  )
}

export default About