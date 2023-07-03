import React from 'react'
import { Aboutme } from './constants/constants'
import Timeline from './Timeline'
import PageStarter from './PageStarter'

const About = () => {
  return (
    <div className='sm:-mt-12 -mt-12 padding-x padding-y max-width' id='discover'>
        <PageStarter title="ABOUT ME" subTitle="Oh this was such a lovely Journey!"/>
        <div className='w-full sm:w-4/6 mt-4'>
          {
            Aboutme.map((p,i) => {
              return (
                <p className="" key={i}>{p.description}</p>
              )
            })
          }
        </div>
        <Timeline/>
    </div>
  )
}

export default About