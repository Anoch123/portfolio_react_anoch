import React from 'react'
import { projects } from './constants/constants';
import Image from 'next/image';
import CustomButton from './CustomButton';
import PageStarter from './PageStarter';

const Projects = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id='projects'>
      <PageStarter title="PROEJCTS" subTitle="Each project is a unique piece of development 🧩" />
      <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
        {projects.map((p, i) => {
            return (
              <div key={i} class="mb-6 mt-16 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] light:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                  <Image src={p.image} width={800} height={800} class="w-full rounded-t-lg" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                  </a>
                  <svg class="absolute left-0 bottom-0 text-white light:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="currentColor"
                      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                  </svg>
                </div>
                <div class="p-6">
                  <h5 class="mb-4 text-lg font-bold">{p.title}</h5>
                  <p class="mb-6">
                    {p.description}
                  </p>
                  <div className="z-20 w-full text-blue-950 font-semibold">Languages Used</div>
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