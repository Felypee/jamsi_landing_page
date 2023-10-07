import { Link } from "react-router-dom"
import { logo } from "../assets"



export const LogoSection = ()=>{
    return (

        <Link
        to="/"
        className=" pt-20 flex flex-col items-center justify-center"
        onClick={()=> window.scrollTo(0,0)}
        >
            <img src={logo} alt="logo" className="h-[100px] w-[100px] object-contain rounded-[12px]"  />
            <p className="text-[40px] font-bold cursor-pointer">JAMSI</p>
        </Link>
    )
}