
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-3 text-center text-white'>

     <div className='text-[9vw] uppercase leading-31 flex items-center justify-center'>The spark for</div>
     <div className='text-[9vw] uppercase leading-31 flex items-center justify-center'>all
      <div className='h-[8vw] w-[15vw] rounded-full overflow-hidden p-1'>
        <Video />
      </div>
        things
     </div>
     <div className='text-[9vw] uppercase leading-31 flex items-center justify-center'>creative</div>

    </div>
  )
}

export default HomeHeroText
