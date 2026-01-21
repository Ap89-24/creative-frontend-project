

const WorkCard = ({image1, image2}) => {
  return (
     

         <>
          <div className="w-1/2 h-full group overflow-hidden relative hover:rounded-[30px] transition-all">
          <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src={image1} alt="" srcset="" />

          <div className="opacity-0 group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/20 transition-transform duration-500 ease-in-out hover:scale-110">
            <h2 className="border-2 font-[font2] flex items-center border-white rounded-full px-10 uppercase  text-[60px] leading-[4vw] text-white">view project</h2>
          </div>
          </div>

          <div className="w-1/2 h-full relative group overflow-hidden hover:rounded-[30px] transition-all">
          <img className="w-full h-full object-cover" src={image2} alt="" srcset="" />
            <div className="opacity-0 group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/20 transition-transform duration-500 ease-in-out hover:scale-110">
            <h2 className="border-2 font-[font2] flex items-center border-white rounded-full px-10 uppercase  text-[60px] leading-[4vw] text-white">view project</h2>
          </div>
          
          </div>
         </>

      
  )
}

export default WorkCard
