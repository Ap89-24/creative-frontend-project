
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex  items-center justify-center gap-5 text-white'>

     <p className='absolute lg:right-0 lg:bottom-40 right-0.5  bottom-36 lg:w-[25vw] w-[60vw] text-xs font-[font1] lg:text-[15px]'>
K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>

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
 