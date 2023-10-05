import { Link } from "react-router-dom"
import { logo } from "../assets"



export const LogoSection = ()=>{
    return (

        <Link
        to="/"
        className=" pt-20 flex items-center justify-center"
        onClick={()=> window.scrollTo(0,0)}
        >
            <img src={logo} alt="logo" className="h-[100px] w-[100px] object-contain rounded-lg"  />
            <p className="pl-2 text-[100px] font-bold cursor-pointer">JAMSI</p>
        </Link>
    )
}