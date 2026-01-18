import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import  { useContext, useRef } from "react";
import {NavBarContext} from "../../context/NavBarContext"



const FullScreenNav = () => {
      
      const fullNavLinkRef = useRef(null);
      const FullScreenRef = useRef(null);
      const [navOpen, setNavOpen] = useContext(NavBarContext);


      function gaspAnimation(){
        const tl = gsap.timeline();

        tl.to('.fullscreennav' , {
          display: 'block',
        })
        tl.to('.stairing' , {
          delay: 0.1,
          height: '100%',
          stagger: {
            amount: -0.3,
          }
        })

        tl.to('.link' , {
          opacity: 1,
          rotateX: 0,
          stagger: {
            amount: 0.3,
          }
        })
        tl.to('.navlink' , {
          opacity: 1,
        })
      }

      function gsapAnimationReverse(){

        const tl = gsap.timeline();
        tl.to('.link' , {
          opacity: 0,
          rotateX: 90,
          stagger: {
            amount: 0.1,
          }
        })
         tl.to('.stairing' , {
           height: '0',
           stagger: {
             amount: 0.1,
            }
          })
          
          tl.to('.navlink' , {
            opacity: 0,
          })
          tl.to('.fullscreennav' , {
           display: 'none',
         })
      }
      useGSAP(function(){
        if(navOpen){
          gaspAnimation(); 
        }
        else{
          gsapAnimationReverse();
        }
        
      },[navOpen])


  return (
    <div ref={FullScreenRef} className='fullscreennav h-screen w-full z-50 overflow-hidden absolute text-white bg-black'>
        <div className='h-screen w-full fixed'>
             <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
        </div>
        </div>
       <div ref={fullNavLinkRef} className='relative'>
                <div className='navlink flex w-full justify-between items-start'>

                  <div className="p-2">
        <div className="w-30">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103 44"
        >
          <path
            fill="white"
            fill-rule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>
      </div>
      <div
      onClick={() => {
                setNavOpen(false)}}
       className='h-30 w-30 relative cursor-pointer'>
        <div className='h-40 w-1 -rotate-45 origin-top absolute bg-emerald-500'></div>
        <div className='h-40 w-1 right-0 rotate-45 origin-top absolute bg-emerald-500'></div>
      </div>
        </div>
      <div className='py-26'>
        <div className='link origin-top relative border-t-1 border-white'>
        <h1 className='font-[font2] text-[7vw] leading-28 uppercase text-center'>WORK</h1>
        <div className='moveLink absolute flex top-0 text-black bg-emerald-500'>
            <div className='moveX flex items-center gap-7'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> SEE EVERYTHING </h2>
                <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" srcset="" />
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> SEE EVERYTHING </h2>
                 <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" srcset="" />
            </div>
            <div className='moveX flex items-center'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> SEE EVERYTHING </h2>
                <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" srcset="" />
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> SEE EVERYTHING </h2>
                 <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" srcset="" />
            </div>
        </div>
        </div>

         <div className='link origin-top relative border-t-1 border-white'>
        <h1 className='font-[font2] text-[7vw] leading-28 uppercase text-center'>Agency</h1>
            <div className='moveLink absolute flex top-0 text-black bg-emerald-500'>
            <div className='moveX flex items-center gap-7'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> KNOW US </h2>
                <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" srcset="" />
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> KNOW US </h2>
                 <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" srcset="" />
            </div>
            <div className='moveX flex items-center'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> KNOW US </h2>
                <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" srcset="" />
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> KNOW US </h2>
                 <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" srcset="" />
            </div>
        </div>
        </div> 

         <div className='link origin-top relative border-t-1 border-white'>
        <h1 className='font-[font2] text-[7vw] leading-28 uppercase text-center'>Contact</h1>
              <div className='moveLink absolute flex top-0 text-black bg-emerald-500'>
            <div className='moveX flex items-center gap-7'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> SEND US FAX </h2>
                <i className="ri-hearts-fill text-8xl"></i>
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'>SEND US FAX  </h2>
                  <i className="ri-hearts-fill text-8xl"></i>
            </div>
            <div className='moveX flex items-center'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'>SEND US FAX </h2>
                   <i className="ri-hearts-fill text-8xl"></i>
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> SEND US FAX </h2>
                  <i className="ri-hearts-fill text-8xl"></i>
            </div>
        </div>
        </div>

         <div className='link origin-top relative border-y-1 border-white'>
        <h1 className='font-[font2] text-[7vw] leading-28 uppercase text-center'>Blog</h1>
                  <div className='moveLink absolute flex top-0 text-black bg-emerald-500'>
            <div className='moveX flex items-center gap-7'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> READ ARTICLES </h2>
                <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" srcset="" />
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> READ ARTICLES </h2>
                 <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" srcset="" />
            </div>
            <div className='moveX flex items-center'>
               <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> READ ARTICLES </h2>
                <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" srcset="" />
                 <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-28 uppercase text-center'> READ ARTICLES </h2>
                 <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" srcset="" />
            </div>
        </div>
        </div> 

      </div>
       </div>
    </div>
  )
}

export default FullScreenNav
