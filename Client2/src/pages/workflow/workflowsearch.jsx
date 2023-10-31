import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchDataReactQuerry, handleError, updateData } from "../../actions/fetchMethods";
import { useValue } from "../../context/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import DaisyTable from "../../components/dashboard/DaisyTable";


const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
    {name: "version", title: "Version"},
]
const log =()=>{
    console.log("Item")
}


const Workflow_retrieve= () => { 
    const { register, handleSubmit,control, watch, reset, setValue , formState: { errors } } = useForm({mode: 'onChange'});
    const state =useLocation().state
    const{ dispatch}= useValue();
    

    const { data: searchResults = [], refetch } = useQuery(
        ["workflownames"],
        () => {
          return fetchDataReactQuerry(dispatch, `/workflows?name=${watch('name')}`);
        },
        {
          enabled: false,
          staleTime: 1*1000,
          cacheTime: 3*1000,
        }
      );

      useEffect(() => {
        refetch();
     }, []);
      const memoizedHeadings = useMemo(()=>headings, []);
    //   const memoizedHeadings = useMemo(()=>tableHeadings, []);
  
      const memoizedSearchResults = useMemo(() => searchResults, [searchResults]);

      const handleDelete =(val)=>{   
        const id=val?.id  
        console.log('here is the contents you need to')  
        updateData('delete', `/workflows/${id}`, val, dispatch)
        window.location.reload(true);
        // updateData('patch', `/deletemanagement/${state.subcompartment_id}`, data, dispatch)
     
      }

      const deletes = useMemo(()=>[
        {label:"Delete", onClick: handleDelete},
    ],[])
    
    const linkActions = useMemo(()=>[
      {label:"Edit", to: '/editWorkflow'},
    ],[])


    const submit = () => {
        refetch(); 
      };
  return (
   
    <>
   
        
        <><div className="h-full mx-auto border-4 rounded-2xl bg-white py-5 my-5 w-11/12">
        <form onSubmit={handleSubmit(submit)}>
        <div className="grid grid-cols-12 gap-1">
                
            <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
            w-full  justify-center flex-col items-center px-10">
                
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
        onClick={refetch}
        className="group relative flex  py-4 px-20 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5 mb-5"
       >
             Search</button>
               </div>
               </div>
               </form>
               <div>
         < DaisyTable rowData={memoizedSearchResults} headings={memoizedHeadings} actions={deletes} 
         linkActions={linkActions} />
        </div>
               </div>
               </>
               
  
</>
        
  );
}

export default Workflow_retrieve;