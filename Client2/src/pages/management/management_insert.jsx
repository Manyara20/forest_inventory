import { useForm } from "react-hook-form"
import FormHeader from '../../components/formComponents/FormHeader';
import SubmitButton from '../../components/formComponents/SubmitButton';
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop'
import NotificationToast from '../../components/globalComponents/NotificationToast'
import { useValue } from "../../context/ContextProvider";
import NameInput from "../../components/formComponents/NameInput";
import NumericalInput from "../../components/formComponents/NumericalInput";
import { useState } from "react";
import { useEffect } from "react";
import { setErrorMessage } from "../../utils/utilMethods";
import newRequest from "../../utils/newRequest";

// import styles from '../../styles'


//GET COUNTY




const ManagementInsertForm = () => {
const [conservancies, setConservancies]= useState([]);
const [counties, setCounties]=useState([]);
const [subcounties, setSubcounties]=useState([]);
const [loading, setLoading]=useState(true)
const { register, handleSubmit, watch, reset, control, formState: { errors } } = useForm({mode: 'onChange'});

const watchConservancy= watch("conservancy");
const watchCounty = watch("county");
const watchStation = watch("station");
    

const{ dispatch}= useValue();

    const fetchConservancy= async ()=>{
        try{
          const {data} = await newRequest.get("/conservancy")
          console.log(data)
          setConservancies(data)
        }
        catch(error){
            dispatch({
                type: 'UPDATE_ALERT',
                payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
            })
        }
        
      }
      
      useEffect(()=>{
        fetchConservancy()
      },[])

     

    const submit = (data)=>{
        login(data, dispatch)
      };
  return (
    <>
    <LoadingBackdrop />
    <NotificationToast />
 
       
<div className="h-full mx-auto border-4 rounded-2xl bg-white py-5 my-5 w-11/12">
    <form onSubmit={handleSubmit(submit)}>
        <div className="grid grid-cols-12 gap-1">
         <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NameInput
        placeholder='conservancy1'
        name="conservancy1"
        label='Conservancy1'
        maximLength={50}
        minLength={5}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NameInput
        placeholder='county'
        name="county"
        label='County                                        '
        maximLength={50}
        minLength={5}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NameInput
        placeholder='station'
        name="station"
        label='Station                                        '
        maximLength={50}
        minLength={5}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NameInput
        placeholder='sub_compartment'
        name="sub_compartment"
        label='SubCompartment                                        '
        maximLength={50}
        minLength={5}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        

        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NumericalInput
        placeholder='planting_year'
        name="planting_year"
        label='Planting Year                                        '
        max={2050}
        mi={5}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NumericalInput
        placeholder='mdbh'
        name="mdbh"
        label='Mean diameter(mdbh in cm)'
        max={4000}
        mi={50}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
        <NumericalInput
        placeholder='xcordinate'
        name="xcordinate"
        label='Latitude(use UTM 37S)'
        max={4000}
        mi={50}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
        <NumericalInput
        placeholder='ycordinate'
        name="ycordinate"
        label='Longitude(use UTM 37S)'
        max={4000}
        mi={50}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NameInput
        placeholder='remarks'
        name="remarks"
        label='Remarks                                        '
        maximLength={500}
        minLength={10}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>

        <div className=" col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
            <select 
            {...register('conservancy', {required : true})}

            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Conservancy</option>
                {
                    conservancies?.map((item, index)=> (
                        <option key={index} value={item.conservancy_id}>{item.conservancy_name}</option>
                    ))}
            </select>
        </div>

        <div className=" col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
            <select 
            {...register('county', {required : true})}

            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select county</option>
                {
                    county?.map((item, index)=> (
                        <option key={index} value={item.county_id}>{item.county_name}</option>
                    ))}
            </select>
        </div>
     {/* ////// */}
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 w-full flex justify-center flex-col items-center px-2">
        <SubmitButton
        type='submit'
        handleSubmit={null}
        text='Save'
        /> 
               </div>
    
       
            
        </div>
        </form> 
    </div>
     
  
    </>
  )
}

export default ManagementInsertForm