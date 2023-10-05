import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { arrowDown } from "../assets";



export const Introduction = ()=>{
    const ref = useRef(null);
    const { scrollYProgress }=useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    const scale =useTransform( scrollYProgress, [0.2,1], [1,35])
    const iconScale =useTransform( scrollYProgress, [0.2,0.5], [1,35])
    const firstTextOpacity =useTransform( scrollYProgress, [0.2,1], [1,0])
    const secondTextOpacity =useTransform( scrollYProgress, [0.29,0.8], [0,1])
    const iconOpacity =useTransform( scrollYProgress, [0.2,0.3], [1,0])


    return (

        <motion.section ref={ref} className="  h-[500vh]  justify-center  items-center w-100vw  px-5">
            <motion.div className=" sticky top-[20%] flex flex-col">
                <motion.h1 
                style={{
                    scale,
                    opacity: firstTextOpacity
                }}
                className="text-[60px] md:text-[100px] p-4  text-center font-bold bg-gradient-to-r from-blue-300 via-blue-800 to-blue-300 bg-clip-text text-transparent">Viaja por las palabras</motion.h1>
                <motion.p  style={{
                    opacity: secondTextOpacity
                }} className="text-[20px] md:text-[40px]" >y conoce personas con quien aprender </motion.p> 
                <motion.div
                style={{
                    scale: iconScale,
                    opacity: iconOpacity,
                }}
                >
                <FontAwesomeIcon icon={faArrowDown} bounce className="pt-20" style={{color: "#ffffff",}} />
                </motion.div>
            </motion.div>
            
        </motion.section>
        )
        }