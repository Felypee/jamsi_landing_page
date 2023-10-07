import {  motion, useMotionValueEvent, useMotionValue, useScroll, useSpring, useTransform, useInView, delay, useAnimate, useAnimation} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import { choose, choose2, playWithThem, practice } from "../assets";
import { RegisterModal } from "./register_modal";

export const SendVoice = ()=>{
    const ref = useRef(null)
    const container = useRef(null)
  const isInView = useInView(ref, {once: false})
  const controls = useAnimation()
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    if(isInView){
        controls.start("visible")
    }else{
        controls.start("hidden")
    }
  }, [isInView])

  const variants = {
    hidden: {opacity:0, scale:0.2, x:-190},
    visible: {opacity:1, scale:1, x:0}
}

 return (
    <motion.section ref={ref} className=" flex flex-col justify-start items-center   h-[100vh] w-full  ">

                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate= {controls} 
             
                  transition={{type: "spring",delay: 0.4, }}
                    className="flex flex-col text-center justify-center items-center  text-white w-full  text-[20px] ">
                    <motion.p >Viaja por los juegos creados por otras personas &nbsp;</motion.p>
            
                    <motion.button
                              variants={variants}
                              initial="hidden"
                              animate= {controls} 
                              onClick={()=>setOpenModal(true)}
                              transition={{type: "spring",delay: 0.6, }}
                        
                            className=" px-2 my-6 border-2 border-white rounded-lg">Apuntarse</motion.button>
                              <RegisterModal onClosed={()=> setOpenModal(false)} open={openModal}/>
                </motion.div>

 
                <motion.img 
                 variants={variants}
                 initial="hidden"
                 animate= {controls} 
            
                 transition={{type: "spring",delay: 0.8, }}
                src={playWithThem} alt="first-image" className="mt-20 object-contain sm:h-[600px]"  />
           
  
    
          
       

      
        
        

    </motion.section>
 );
}