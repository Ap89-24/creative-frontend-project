

const Projects = () => {
  return (
    <div className="p-5">
      <div className='bg-red-200 pt-70'>
        <h2 className='font-[font2] text-black text-[12vw] uppercase'>Work</h2>
      </div>

      <div className="-mt-14">
        <div className="w-full h-[500px] flex gap-3 mb-3  bg-amber-300">
          <div className="w-1/2 h-full bg-green-800">
          <img className="h-full w-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" srcset="" />
          </div>
          <div className="w-1/2 h-full bg-blue-800">
          <img lassName="h-full w-full object-cover" src="https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022" alt="" srcset="" />
          </div>
        </div>

        <div className="w-full h-[600px] flex gap-3 mb-3 bg-amber-300">
          <div className="w-1/2 h-full bg-green-800"></div>
          <div className="w-1/2 h-full bg-blue-800"></div>
        </div>

        <div className="w-full h-[600px] flex gap-3 mb-3  bg-amber-300">
          <div className="w-1/2 h-full bg-green-800"></div>
          <div className="w-1/2 h-full bg-blue-800"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
