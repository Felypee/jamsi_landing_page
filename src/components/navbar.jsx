import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { RegisterModal } from "./register_modal";


export const Navbar = ()=>{
    const [openModal, setOpenModal] = useState(false)

    return (
        <nav class="flex flex-row w-full justify-between z-20">  
        <Link
        to="/"
        className="flex items-center"
        onClick={()=> window.scrollTo(0,0)}
        >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain rounded-lg"  />
            <p className="pl-2 text-[18px] font-bold cursor-pointer">JAMSI</p>
        </Link>
        <div className="flex items-center">
        <button
        className="mr-3 px-2 border-2 border-white rounded-lg"
        >Apoyar</button>
        <button
        onClick={()=>setOpenModal(true)}
         className="ml-3 px-2 border-2 border-white rounded-lg"
         >Apuntarse</button>
        </div>
        <RegisterModal open={openModal} onClosed={()=>setOpenModal(false)}/>        
        </nav>

        
    );
}