import React from 'react'
import { projects } from './constants/constants';
import Image from 'next/image';
import CustomButton from './CustomButton';
import PageStarter from './PageStarter';

const Projects = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id='projects'>
      <PageStarter title="PROEJCTS" subTitle="I would love to collaborate with new projects. Please Feel free to contact me anytime!."/>
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 mt-10">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {projects.map((p, i) => {
              return (
                <div key={i} className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                  <div className="mb-12 space-y-4">
                      <h3 className="text-2xl font-semibold text-purple-900">{p.title}</h3>
                      <p className="mb-6">{p.description}</p>
                      
                      <div className="z-20 w-full">Languages Used</div>
                      <div className='flex justify-around'>
                        {p.tags.map((t, i) => {
                          return <a href="#" className="block font-medium text-purple-600" key={i}>{t}</a>;
                        })}
                      </div>
                  </div>
                  <Image src={p.image} width={800} height={800} className="w-3/3 ml-auto -mb-4" alt="test"/>
              </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Projects