import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5 text-white'>
      <div className='border-3 flex items-center border-white rounded-full px-10 hover:text-emerald-500 hover:border-emerald-500 leading-[7vw] uppercase mb-3'>
      <Link to="/projects" className="text-[7vw]">Work</Link>
      </div>
       <div className='border-3 flex items-center border-white rounded-full px-10 hover:text-emerald-500 hover:border-emerald-500 leading-[7vw] uppercase mb-3'>
      <Link to="/agence" className="text-[7vw]">Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
 