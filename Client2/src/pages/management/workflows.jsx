import React from "react";
import { useForm } from "react-hook-form";





const Workflows_insert= () => { 
    const { register, handleSubmit,control, watch, reset, setValue , formState: { errors } } = useForm({mode: 'onChange'});
 
  return (
   
    <>
   
        
        <><div className="h-full mx-auto border-4 rounded-2xl bg-white py-5 my-5 w-11/12">
        <form >
        <div className="grid grid-cols-12 gap-1">
                
            <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
            w-full  justify-center flex-col items-center px-10">
                <label >Workflow name</label>
            <input type='text' placeholder="enter workflow" 
              {...register("workflowitem", { required: true })}/>              
                
               </div> 

               <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
            w-full  justify-center flex-col items-center px-10">
                <label >Transision name</label>
            <input type='text' placeholder="enter transition" 
              {...register("transition", { required: true })}/>              
                
               </div>
               </div>
               </form>
               </div>
               </>
    
  
</>
        
  );
}

export default Workflows_insert;