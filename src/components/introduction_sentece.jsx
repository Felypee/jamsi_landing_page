import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { people } from "../assets";
import Lottie from "lottie-react";



export const Introduction = ()=>{


const variants = {
    hidden: {opacity:0, scale:0.2, y:-100},
    visible: {opacity:1, scale:1, y:50}
}


const ref = useRef(null)
const controls = useAnimation()
const inView = useInView(ref,{ once: false})

useEffect(()=>{
    
    if(inView){
        controls.start("visible")

    }else{
        controls.start("hidden")
    }
}, [inView])


    return (

        <motion.section ref={ref} className="  flex flex-col justify-center sm:justify-center items-center  h-[100vh] w-full  ">
       

                <motion.h1 
                   variants={variants}
                   initial="hidden"
                   animate= {controls} 
        
                   transition={{type: "spring",delay: 0.4, }}
                className=" pb-4 text-[40px] md:text-[60px] text-center font-bold bg-gradient-to-r from-blue-300 via-blue-800 to-blue-300 bg-clip-text text-transparent">Viaja por las palabras
                </motion.h1>
                <motion.p  
                    variants={variants}
                    initial="hidden"
                    animate= {controls} 
               
                    transition={{ type: "spring", delay: 0.2, }}
                 className="bg-transparent  text-center text-[16px] px-[10%] md:text-[40px]" >y conoce personas con quien aprender </motion.p> 
              
              <motion.div
             variants={variants}
             initial="hidden"
             animate= {controls} 
             transition={{type: "spring",delay: 0, }}
       
             >
              <Lottie animationData={people} loop={true}  className='max-w-sm bg-transparent' />
              </motion.div>
             <motion.div
             variants={variants}
             initial="hidden"
             animate= {controls} 
             transition={{type: "spring",delay: 0, }}
            
             >
                
                <FontAwesomeIcon icon={faArrowDown} bounce className=" flex justify-center items-center bg-transparent" style={{color: "#ffffff",}} />

             </motion.div>
              
         
            
        </motion.section>
        )
        }