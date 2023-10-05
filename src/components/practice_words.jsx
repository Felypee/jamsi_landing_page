import { useScroll, motion, useSpring, useMotionValueEvent, useTransform } from "framer-motion";
import { useRef } from "react";
import { playWithThem, practice, secondImage } from "../assets";

export const PracticeWords = ()=>{
    const ref = useRef(null);
    const { scrollYProgress}=useScroll({
    target: ref,
    offset: ["start end", "end end"]
    });
    const opacity =useTransform( scrollYProgress, [0,0.2,0.6,0.85,1], [0,0,1, 1,0])
    const scale =useTransform( scrollYProgress, [0,0.5,0.85, 1], [0,5,10,300])
    const opacityText =useTransform( scrollYProgress, [0,0.1,0.85,1], [0,1,1,0])
    const translateText =useTransform( scrollYProgress, [0,0.1,0.85,1], ["20%","0%","-20%","-100%"])


 return (
    <motion.section ref={ref} className=" flex justify-center items-start">
        <div className="h-[600vh] w-full">
            <div className="flex sticky top-0">
            <motion.img 
         style={{
            scale: scale,
            opacity: opacity,
            }}
         src={playWithThem} alt="first-image" className="fixed top-[5%] h-[76%] w-[76%] " />


        <motion.div
         style={{
            opacity: opacityText, 
            x:translateText}}
        className="fixed top-[80%] text-white border-black text-[20px] lg:text-[30px]">
            <p>Juega con ejercicios de otras personas</p>
            <button
         className="ml-3 px-2 my-6 border-2 border-white rounded-lg border-black">Apuntarse</button>
        </motion.div>
            </div>
       
        </div>
         
       
    </motion.section>
 );
}