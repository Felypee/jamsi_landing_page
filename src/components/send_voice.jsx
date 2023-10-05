import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { thirdImage, voice } from "../assets";

export const SendVoice = ()=>{
    const ref = useRef(null);
    const { scrollYProgress}=useScroll({
    target: ref,
    offset: ["start end", "end end"]
    });
   
    const opacity =useTransform( scrollYProgress, [0.1,0.7,1], [0,1,0])
    const scale =useTransform( scrollYProgress, [0,0.8], [0,4])
    const opacityText =useTransform( scrollYProgress, [0,0.3], [0,1])
    const translateText =useTransform( scrollYProgress, [0,0.3, 0.4,0.5, 1], ["-100%","-20%","-0%", "20%","100%"])
    const translateForm = useTransform(scrollYProgress, [0.2 , 0.3, 0.4 ,1 ],["-100%", "0%", "50%", "100%"])
    const translateForm2 = useTransform(scrollYProgress, [0.2 , 0.3, 0.4 ,1 ],["100%", "0%", "-50%", "-100%"])
   
    
 return (
    <motion.section ref={ref} className=" relative h-[1000vh] w-full justify-center items-start">
        <motion.div
        style={{ 
            x:translateForm
            }}
       className="sticky top-0  right-0  w-[200vw] h-[15vh] bg-blue-600 rounded-[100px]"
       >
     </motion.div>
     <motion.div
      style={{ 
        x:translateForm2
        }}
       className="sticky top-[60vh]  left-0  w-[300vw] h-[15vh] bg-blue-600 rounded-[100px]"
       >
     </motion.div>
            <motion.div className=" sticky top-[30%] flex flex-col  ">
                <motion.div
                    style={{
                    opacity: opacityText,  
                    x:translateText
                    }}
                    className=" fixed top-[10%] right-0  text-[20px] lg:text-[30px]">
                        <p>Envía mensajes de voz a tus amigos para que ellos puedan traducir el significado.</p>

                        <button
                        className="ml-3 px-2 my-6 border-2 border-white rounded-lg">Apuntarse</button>
                </motion.div>
      
            <motion.img 
            style={{
                opacity: opacity, scale,}}
            src={voice} alt="first-image" className="fixed top-[40%]"  />
            </motion.div>
    
        
       
    </motion.section>
 );
}