import {  motion, useMotionValueEvent, useMotionValue, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";
import { useRouteLoaderData } from "react-router-dom";

import { choose, choose2, firstImage } from "../assets";

export const FindWords = ()=>{
    
    const ref = useRef(null);
    const { scrollYProgress }=useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    const opacityText =useTransform( scrollYProgress, [0.22,0.4, 0.7], [0,1,0,])
    const opacityButton =useTransform( scrollYProgress, [0.7,0.4, 0.7], [0,1,0,])

    const opacity =useTransform( scrollYProgress, [0.5,0.6, 0.9,1], [0,1,1,0])
    const translateX = useTransform(scrollYProgress,[0.4,0.5,0.6,0.7, 0.85,1],["-30%","-10%","-0%","10%","30%","0%"])
    const translateText = useTransform(scrollYProgress, [0.22 , 0.4, 1 ],["-100%", "0%","20%"])
    const translateXButton = useTransform(scrollYProgress, [0.24 , 0.4 ],["-100%", "0%"])
    const scale = useTransform( scrollYProgress, [0,0.1,0.6, 1], [0,3,3,10])
    const translateForm = useTransform(scrollYProgress, [0.2 , 0.3, 0.4 ,1 ],["-100%", "0%", "50%", "100%"])
   




 return (
    <motion.section ref={ref} className=" relative   h-[1200vh] w-full items-start ">
     <div
       className="absolute top-0  right-0  w-[30%] h-[150vh] bg-blue-600 rounded-[100px]"
       >
     </div>
     <div
       className="absolute top-[60vh]  left-0  w-[30%] h-[150vh] bg-blue-600 rounded-[100px]"
       >
     </div>
     <motion.div
     style={{
        x: translateForm,
     }}
       className=" sticky top-[30%]  w-[100vh] h-[10vh] bg-blue-800 rounded-[100px]"
       >
     </motion.div>
    
   
            <motion.div
                className="sticky flex flex-col top-0">

            <motion.div
             
                
                className="flex justify-center items-start fixed  w-full top-[10%] text-[20px] lg:text-[30px] pt-[20%]">
                <motion.p style={{
                    opacity:opacityText,
                    x:translateText
                }}>Escoge las palabras que quieres aprender &nbsp;</motion.p>
                 {/* <motion.p style={{
                    opacity:opacityText,
                    x:translateText
                }}>las palabras&nbsp;</motion.p>
                <motion.p style={{
                    opacity:opacityText,
                    x:translateText
                }}>que quieres&nbsp;</motion.p>
                <motion.p style={{
                    opacity:opacityText,
                    x:translateText
                }}> aprender.</motion.p> */}
         
         <motion.button
                 style={{
                    x: translateXButton,
                    opacity:opacityButton,
                    
                }}
                className="ml-3 px-2 my-6 border-2 border-white rounded-lg">Apuntarse</motion.button>
         
            </motion.div>
        
           
          
                <motion.img 

                    style={{
                    x: translateX,
                    scale,
                    opacity
                    }}
                    src={choose} alt="first-image" className=" fixed top-40 h-[76%] w-[76%] " />
  
            </motion.div> 
          
       

      
        
        

    </motion.section>
 );
}