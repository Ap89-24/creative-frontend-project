

const Projects = () => {
  return (
    <div className="p-5">
      <div className='pt-70'>
        <h2 className='font-[font2] text-black text-[12vw] uppercase'>Work</h2>
      </div>

      <div className="-mt-14">

        <div className="w-full h-[500px] flex gap-3 mb-3 ">

          <div className="w-1/2 h-full overflow-hidden relative hover:rounded-[30px] transition-all">
          <img className="w-full h-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" srcset="" />

          <div className="absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/20">
            <h2 className="border-2 font-[font2] flex items-center border-white rounded-full px-10 uppercase text-white text-[40px] leading-[3vw]">view project</h2>
          </div>
          </div>

          <div className="w-1/2 h-full overflow-hidden hover:rounded-[30px] transition-all">
          <img lassName="w-full h-full object-cover" src="https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022" alt="" srcset="" />

          
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects
