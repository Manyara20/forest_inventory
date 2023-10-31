import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { handleError, updateData } from "../../actions/fetchMethods";
import { useValue } from "../../context/ContextProvider";
import LoadingBackdrop from "../../components/globalComponents/LoadingBackdrop";
import NotificationToast from "../../components/globalComponents/NotificationToast";





const Workflow_insert= () => { 
    
    const state =useLocation().state
    const{ dispatch}= useValue();
    const { register, handleSubmit,control, watch, reset, setValue , formState: { errors } } = useForm({mode: 'onChange'});

    useEffect(()=>{
      reset(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const submit = (data)=>{
        if(state){
          console.log("executing update")
          updateData('patch', `/workflows/${state.id}`, data, dispatch)
          window.location.reload(true);
        }
        else{
          console.log(data)
          updateData('post', '/workflows', data, dispatch)
          window.location.href = '/workflows';
        }
      };

  return (
   
    <>
      <LoadingBackdrop />
    <NotificationToast />
   
        
        <><div className="h-full mx-auto border-4 rounded-2xl bg-white py-5 my-5 w-11/12">
        <form onSubmit={handleSubmit(submit)}>
        <div className="grid grid-cols-12 gap-1">
                
            <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
            w-full  justify-center flex-col items-center px-10">
                <label >Workflow name</label>
            <input type='text' placeholder="enter workflow" 
              {...register("name", { required: true })}/>              
                
               </div> 

               {/* <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
            w-full  justify-center flex-col items-center px-10">
                <label >Transision name</label>
            <input type='text' placeholder="enter transition" 
              {...register("transition", { required: true })}/>              
                
               </div> */}
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 w-full flex justify-center flex-col items-center px-2">
        <button
        type='submit'
        className="group relative flex  py-4 px-20 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5 mb-5"
        onSubmit={null}>
             Save</button>
               </div>
               </div>
               </form>
               </div>
               </>
               
  
</>
        
  );
}

export default Workflow_insert;