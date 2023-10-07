

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'; 
import { saveEmail } from "../service/register_user";

export const RegisterModal = ({open, onClosed}) =>{
    if(!open) return null

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('El correo es requerido')
            .email('El correo es inválido')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        saveEmail(data["email"])
        alert(`Revisa tu correo :-) ${data["email"] }`);
        onClosed()
        return false;
    }
return (
<>
    <div
    className=" fixed left-0 top-0 right-0 h-[100%] w-full bg-gray-600 z-10  opacity-50 flex justify-center items-center">

    </div>
     <div
        className=" fixed flex flex-col items-center  bg-gray-300  top-[30%] min-h-[32%] w-[80%] max-w-[500px] z-20 rounded-[20px] px-[30px] pt-[5%] pb-5 "
        >
            <p className="text-gray-600 bg-transparent">Te llegará un correo para descargar la app</p>
            <form  
  
            onSubmit={handleSubmit(onSubmit)} >
              
                            <div className="bg-gray-300 flex flex-col items-start pt-[5%] pb-[3%]">
                                
                                <input placeholder="Correo"  name="email" type="text" {...register('email')} className={` bg-white border placeholder-gray-400 placeholder-opacity-100 hover:border-gray-400 rounded-[8px]   text-gray-500 p-2 form-control ${errors.email ? 'is-invalid' : ''}`} />
                                <div className=" bg-gray-300 invalid-feedback text-[12px] text-red-600 pl-2">{errors.email?.message}</div>
                            </div> 
                        
                            <div className="bg-gray-300 flex flex-col items-center gap-4 ">
                            
                                
                                <button type="submit"   className="bg-gray-300 w-full border-2 border-gray p-2   rounded-[8px] "><p className="bg-gray-300 text-gray-600">Registrar</p></button>
                                <button type="button" onClick={() => onClosed()} className="bg-gray-300 w-full p-2  "><p className="bg-gray-300 text-gray-500">Volver</p></button>
                            </div>
              
                    
                </form>
        </div>
        </>
    )
}