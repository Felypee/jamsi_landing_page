import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  motion } from "framer-motion";




export const Introduction = ()=>{




    return (

        <motion.section  className="bg-blue-200 flex flex-col  h-[100vh]  w-full  ">
          
                <motion.h1 
                initial={{
                    scale:0.2
                }}
                    animate={{scale:1}}
                className="pt-40 text-[60px] text-center font-bold bg-gradient-to-r from-blue-300 via-blue-800 to-blue-300 bg-clip-text text-transparent">Viajas por las palabras
                </motion.h1>
                {/* <p   className="text-[20px] md:text-[40px]" >y conoce personas con quien aprender </p>  */}
             
                {/* <FontAwesomeIcon icon={faArrowDown} bounce className="pt-20" style={{color: "#ffffff",}} /> */}
              
         
            
        </motion.section>
        )
        }