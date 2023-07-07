import React from 'react'
import { projects } from './constants/constants';
import Image from 'next/image';
import PageStarter from './PageStarter';

const Projects = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id='projects'>
      <PageStarter title="PROEJCTS" subTitle="Each project is a unique piece of development 🧩" />
      <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
        {projects.map((p, i) => {
            return (
              <div key={i} className="mb-6 mt-16 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] light:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <Image src={p.image} width={800} height={800} alt={p.image} className="w-full rounded-t-lg" />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                  </a>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">{p.title}</h5>
                  <p className="mb-6">
                    {p.description}
                  </p>
                  <div className="z-20 w-full text-blue-950 font-semibold">Technologies Used</div>
                  <div className='flex gap-4'>
                    {p.tags.map((t, i) => {
                      return <a href="#" className="block font-medium text-purple-600 mt-5" key={i}>{t}</a>;
                    })}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects