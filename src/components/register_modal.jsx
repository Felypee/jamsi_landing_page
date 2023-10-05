

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'; 

export const RegisterModal = ({open, onClosed}) =>{
    if(!open) return null

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('El correo es requerido')
            .email('El correo es invalido')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('Revisa tu correo :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
return (
<>
    <div
    className="fixed left-0 top-0 h-[100%] w-full bg-gray-600 z-10  opacity-50 flex justify-center items-center">

    </div>
     <div
        className="flex flex-col items-center fixed bg-white left-[25%] right-[25%] top-[30%] min-h-[32%] w-[50%] max-w-[500px] z-20 rounded-[20px] px-[30px] py-[5%] opacity-100"
        >
            <p className="text-black">Enter the email so you can use the app</p>
            <form  
            onSubmit={handleSubmit(onSubmit)} >
               
                    <div className="flex flex-col items-start pt-[20%] pb-[10%]">
                       
                        <input placeholder="Correo"  name="email" type="text" {...register('email')} className={`border placeholder-gray-400 placeholder-opacity-100 hover:border-gray-400 rounded-[8px]   text-gray-500 p-2 form-control ${errors.email ? 'is-invalid' : ''}`} />
                        <div className=" invalid-feedback text-[12px] text-black pl-2">{errors.email?.message}</div>
                    </div>
                
                    <div className="flex flex-col items-center gap-2 ">
                   
                       
                        <button type="button"  className="w-full p-2  bg-gray-300 rounded-[8px] "><p className="text-white">Registrar</p></button>
                        <button type="submit" onClick={() => onClosed()} className="w-full p-2 border-2 border-gray rounded-[8px]"><p className="text-gray-400">Volver</p></button>
                    </div>
                </form>
        </div>
        </>
    )
}