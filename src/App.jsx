
import './App.css'
import {BrowserRouter}from 'react-router-dom';
import { Background, Bottom, Chat, FindWords, Introduction, LogoSection, Navbar, PracticeWords, SendVoice, SocialNetWorks } from './components';
import { useScroll } from 'framer-motion';

function App() {


  return (
 
<BrowserRouter >
   

       
   <div className='relative z-10 bg-primary'>
        <Navbar/>
       <Introduction/>
       <FindWords/>
       {/* <PracticeWords/>
       <SendVoice/> */}
       {/* <Chat/> */}
       {/* <LogoSection/>
       <Bottom/>
       <SocialNetWorks/> */}
   </div>
   </BrowserRouter>

   
    
  );
}

export default App
