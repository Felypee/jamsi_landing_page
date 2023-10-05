import React from 'react'

import { socialNetWorks } from '../constants';


export const SocialNetWorks = () => {
  return (
    <section className='w-full flex flex-row justify-center items-center mt-10 gap-5 pb-40'>
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
        
   
    </section>
  )
}

