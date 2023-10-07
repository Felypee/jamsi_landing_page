

import {BrowserRouter}from 'react-router-dom';
import {    FindWords, Introduction, LogoSection, Navbar, PracticeWords, SendVoice, SocialNetWorks, YourWords } from './components';
import { useScroll } from 'framer-motion';


function App() {


  return (
 
<BrowserRouter >
   

       
   <div className='flex flex-col  bg-primary'>
        <Navbar/>
      <Introduction/>
      <FindWords/>
      <SendVoice/>
      <PracticeWords/>
      <YourWords/> 
      <LogoSection/>

       <SocialNetWorks/> 
   </div>
   </BrowserRouter>

   
    
  );
}

export default App
