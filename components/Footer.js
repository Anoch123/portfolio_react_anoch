import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p className='text-center'>@{new Date().getFullYear()} Anoch Dissanayake. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="https://github.com/Anoch123" className="text-gray-500">
            Github
          </Link>
          <Link href="https://lk.linkedin.com/in/anoch-dissanayake-71a9aa172" className="text-gray-500">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer