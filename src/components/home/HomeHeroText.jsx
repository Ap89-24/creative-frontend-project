
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-3 text-center  mt-190 lg:mt-0 text-white'>

     <div className='lg:text-[9vw] text-[12vw] uppercase lg:leading-31 leading-20 flex items-center justify-center'>The spark for</div>
     <div className='lg:text-[9vw] text-[12vw] uppercase lg:leading-31 leading-20 flex items-center justify-center'>all
      <div className='h-[8vw] w-[15vw] rounded-full overflow-hidden p-1'>
        <Video />
      </div>
        things
     </div>
     <div className='lg:text-[9vw] text-[12vw] uppercase lg:leading-31 leading-20 flex items-center justify-center'>creative</div>

    </div>
  )
}

export default HomeHeroText
