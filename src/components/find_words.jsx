import {  motion, useMotionValueEvent, useMotionValue, useScroll, useSpring, useTransform, useInView, delay, useAnimate, useAnimation} from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouteLoaderData } from "react-router-dom";

import { choose, choose2, firstImage } from "../assets";

export const FindWords = ()=>{
    const ref = useRef(null)
    const container = useRef(null)
  const isInView = useInView(ref, {once: false})
  const controls = useAnimation()
  useEffect(() => {
    if(isInView){
        controls.start("visible")
    }else{
        controls.start("hidden")
    }
  }, [isInView])
 return (
    <motion.section ref={container} className="flex flex-col justify-center items-center bg-blue-500  h-[100vh] w-full items-start ">
     
     <motion.div
     ref={ref}
     variants={{
        hidden:{opacity:1, x:-500 },
        visible: {opacity: 1, x:300}
     }}
     transition={{duration:10}}
     initial= "hidden"
     animate= {controls} 

       className=" w-[80vh] h-[10vh] bg-blue-800 rounded-[100px]"
       >
     </motion.div>
    
   
            {/* <motion.div
                className="sticky flex flex-col top-0">

            <motion.div
             
                
                className="flex justify-center items-start fixed  w-full top-[10%] text-[20px] lg:text-[30px] pt-[20%]">
                <motion.p style={{
                    opacity:opacityText,
                    x:translateText
                }}>Escoge las palabras que quieres aprender &nbsp;</motion.p>
          */}
         {/* <motion.button
                 style={{
                    x: translateXButton,
                    opacity:opacityButton,
                    
                }}
                className="ml-3 px-2 my-6 border-2 border-white rounded-lg">Apuntarse</motion.button>
          */}
            {/* </motion.div>
        
           
          
                <motion.img 

                    style={{
                    x: translateX,
                    scale,
                    opacity
                    }}
                    src={choose} alt="first-image" className=" fixed top-40 h-[76%] w-[76%] " />
  
            </motion.div>  */}
          
       

      
        
        

    </motion.section>
 );
}