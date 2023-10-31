import { useForm } from "react-hook-form"
import SubmitButton from '../../components/formComponents/SubmitButton';
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop'
import NotificationToast from '../../components/globalComponents/NotificationToast'
import { useValue } from "../../context/ContextProvider";
import NameInput from "../../components/formComponents/NameInput";
import NumericalInput from "../../components/formComponents/NumericalInput";
import newRequest from "../../utils/newRequest";



import { useLocation, } from "react-router-dom";

import { useEffect } from "react";
import Blog from "./date";

const ManagementInsertFormF = () => {


  return (
    <>
    <LoadingBackdrop />
    <NotificationToast />
 
<div className="h-full mx-auto border-4 rounded-2xl bg-white py-5 my-5 w-11/12">
    <form>
    <div className="grid grid-cols-12 gap-1">
       
    <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <Blog/>
        </div>
        </div>
        
      
        </form> 
    </div>
     
  
    </>
  )
}

export default ManagementInsertFormF