import { useGSAP } from "@gsap/react"
import WorkCard from "../components/projects/WorkCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"


const Projects = () => {

  const projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      image2: 'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      image2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd',
      image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
      image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
      image2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
    },
  ]

  // gsap.registerPlugin(ScrollTrigger);
  // useGSAP(function(){
  //   gsap.from('.hero' , {
  //     height: '80px',
  //     stagger: {
  //       amount: 0.1,
  //     },
  //     scrollTrigger: {
  //       trigger: '.parent',
  //       start: 'top 100%',
  //       end: 'top -150%',
  //       scrub: true,
  //       //markers: true,
  //     }
  //   })
  // })

gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  gsap.utils.toArray(".hero").forEach((card) => {
    gsap.fromTo(
      card,
      {
        height: 100,
        y: 40,
        stagger: {
          amount: 0.5,
        }
      },
      {
        height: 520,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: '.parent',
          start: "top 100%",
          end: "top -150%",
          scrub: true,
          // markers: true,
        },
        snap: {
			snapTo: 'labels', // snap to the closest label in the timeline
			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
			ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		}
      }
    );

//     gsap.fromTo(
//   card.querySelector("img"),
//   { scale: 1.1 },
//   {
//     scale: 1,
//     scrollTrigger: {
//       trigger: card,
//       scrub: true,
//     },
//   }
// );

  });
});



  return (
    <div className="p-5">
      <div className='pt-70'>
        <h2 className='font-[font2] text-black lg:text-[12vw] text-[15vw] uppercase'>Work</h2>
      </div>

      <div className="parent lg:-mt-14 transition-all">

       {projects.map((elem,idx)=>{
         return   <div className="hero will-change-transform overflow-hidden  w-full lg:h-[700px] flex lg:flex-row flex-col gap-5 mb-3 ">
          <WorkCard key={idx} image1={elem.image1} image2={elem.image2} />
          </div>
       })}

      </div>

    </div>
  )
}

export default Projects
