import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { firstImage, yourwords } from "../assets";

export const Chat = ()=>{
    const ref = useRef(null);
    const { scrollYProgress}=useScroll({
    target: ref,
    offset: ["0.2 end", "end end"]
    });
    const opacity =useTransform( useSpring(scrollYProgress), [0,0.25,0.8,1], [0,1,1,0])
    const scale =useTransform( useSpring(scrollYProgress), [0,0.25], [0,3.5])
 return (
    <motion.section 
    style={{
        opacity
    }}
    ref={ref} className=" flex justify-center items-center">
        
        <motion.div 
        
        className="h-[300vh] w-full">
            <div className="flex sticky top-[40%]">
            <motion.img   style={{
            scale: scale,
            opacity: opacity,
           x: scrollYProgress }} src={yourwords} alt="first-image" className="h-80 w-55"  />
        <div className="flex w-40"></div>
        <motion.div
        className=" text-[20px] lg:text-[30px]">
            <p>Mide tu progreso sabiendo cuántas palabras has repasado</p>
            <button
         className="ml-3 px-2 my-6 border-2 border-white rounded-lg">Apuntarse</button>
        </motion.div>
            </div>
        </motion.div>
        
    </motion.section>
 );
}