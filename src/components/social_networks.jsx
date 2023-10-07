import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

import { socialNetWorks } from '../constants';
import { RegisterModal } from './register_modal';


export const SocialNetWorks = () => {
  const ref = useRef(null)
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
  hidden: {opacity:0, scale:0.2, y:200},
  visible: {opacity:1, scale:1, y:0}
}
  return (
    <motion.section 
    variants={variants}
                  initial="hidden"
                  animate= {controls} 
             
                  transition={{type: "ease",delay: 0, }}
    ref={ref} className='w-full flex flex-col justify-center items-center mt-10  mb-40'>
       <button
         className="ml-3 px-20 py-5 my-6 border-2 border-white rounded-lg" onClick={()=>setOpenModal(true)}>Apuntarse</button>
           <RegisterModal onClosed={()=> setOpenModal(false)} open={openModal}/>
   <div className='flex flex-col justify-center items-center gap-4'>
   Contáctame 
   <div className='flex flex-row justify-center items-center gap-4'>
   {socialNetWorks.map((social, index) => (
        <div   key={`${social.platform}-${index}`} className='flex flex-col justify-center items-center'>
         <a
          
          onClick={() => {
            
            window.open(social.url, '_blank');
          }}
        >

        <img
          src={social.img}
          alt={`${social.platform}`}
          className='w-10 h-10 rounded object-contain cursor-pointer'
        />
        </a>
            

            </div>
          
     
        ))}
   </div>
   
   </div>
        
   
    </motion.section>
  )
}

