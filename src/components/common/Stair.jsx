
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { Children, useRef } from "react"
// import { useLocation } from "react-router-dom";

// const Stair = (props) => {

//       let stairUseRef = useRef(null);
//       let currentPath = useLocation().pathname;
//       let pageRef = useRef(null);

     
//   useGSAP(function(){
//    let tl = gsap.timeline()

//    tl.to(stairUseRef , {
//     display: 'block',
//    }) 
   
//    tl.from('.stair' , {
//     height: 0,
//     stagger: {
//       amount: -0.3,
//     }
//    })

//    tl.to('.stair' , {
//     y: '100%',
//     stagger: {
//       amount: -0.3,
//     }
//    })

//    tl.to(stairUseRef.current , {
//     display: 'none',
//    })

//    tl.to('.stair' , {
//     y: '0',
//    })

//    gsap.from(pageRef.current, {
//     opacity: 0,
//     delay: 1.3,
//     scale: 1.1,
//    })

//   },[currentPath])

//   return (
//     <div>
//      <div ref={stairUseRef} className="h-screen w-full fixed z-20 top-0">
//      <div className="h-full w-full flex fixed">
//      <div className="stair h-full w-1/5 bg-black"></div>
//      <div className="stair h-full w-1/5 bg-black"></div>
//      <div className="stair h-full w-1/5 bg-black"></div>
//      <div className="stair h-full w-1/5 bg-black"></div>
//      <div className="stair h-full w-1/5 bg-black"></div>
// </div>
// </div>

// <div ref={pageRef}>
// {props.children}
// </div>

// </div>
//   )
// }

// export default Stair





// src/components/common/Stair.jsx
import  { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stair = ({ children }) => {
  const stairUseRef = useRef(null);
  const pageRef = useRef(null);
  const locationPath = useLocation().pathname;

  useLayoutEffect(() => {
    // scope and auto-cleanup
    const ctx = gsap.context(() => {
      const container = stairUseRef.current;
      const page = pageRef.current;
      const stairs = gsap.utils.toArray(".stair", container);

      if (!container || !page) return;

      // Make sure page content is hidden while animation plays
      gsap.set(page, { autoAlpha: 0, pointerEvents: "none" });

      // Build timeline
      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut" }
      });

      // instant show overlay (no animating display)
      tl.set(container, { autoAlpha: 1, pointerEvents: "auto" });

      // stairs intro
      tl.from(stairs, { height: 0, stagger: 0.04, duration: 0.25 });

      // move them down
      tl.to(stairs, { y: "100%", stagger: 0.04, duration: 0.45 });

      // hide overlay instantly
      tl.set(container, { autoAlpha: 0, pointerEvents: "none" });

      // reset stairs for future runs (optional)
      tl.set(stairs, { clearProps: "all" });

      // when timeline completes, reveal page content
      tl.add(() => {
        gsap.to(page, {
          autoAlpha: 1,
          pointerEvents: "auto",
          duration: 0.35,
          scale: 1,
        }, "-=0.35");
      });

      // If you prefer the page fade to be part of timeline:
      // tl.to(page, { autoAlpha: 1, duration: 0.6, scale: 1 }, "-=0.2");

      // Clean-up on unmount or when route changes
      return () => {
        tl.kill();
      };
    }, stairUseRef);

    return () => ctx.revert();
  }, [locationPath]);

  return (
    <div>
      <div
        ref={stairUseRef}
        className="h-screen w-full fixed top-0 left-0 z-50"
        style={{ pointerEvents: "none", opacity: 0 }} // initially hidden
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* page content - initially hidden by effect */}
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
};

export default Stair;
