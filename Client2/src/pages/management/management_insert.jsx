import { useForm } from "react-hook-form"
import SubmitButton from '../../components/formComponents/SubmitButton';
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop'
import NotificationToast from '../../components/globalComponents/NotificationToast'
import { useValue } from "../../context/ContextProvider";
import NameInput from "../../components/formComponents/NameInput";
import NumericalInput from "../../components/formComponents/NumericalInput";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "../../actions/fetchMethods";

const ManagementInsertForm = () => {

const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: 'onChange'});

      const{ dispatch}= useValue();
      
      const { data: conservanciesData, isLoading: conLoading } = useQuery(
        ['conservancies'],
        async () => {
          try {
            const res = await newRequest.get('/conservancy'); 
            return res.data;
          } catch (error) {
            console.error('Error:', error);
            handleError(dispatch, error); 
            throw error; 
          }
        },
      );
      
      

  //counties 

  const fetchCountiesByConservancy = async ()=>{
    const res = await newRequest.get(`/county/${watch('conservancy')}`)
    return res.data
  }

  const { data: counties = [] } = useQuery(
    ['counties', watch('conservancy')],
    () => fetchCountiesByConservancy(watch('conservancy')),
    {
      enabled: !!watch('conservancy'),
      onError: (error) => {
        console.error('Error:', error);
        handleError(dispatch, error);
      },
    }
  );
  

  const submit = (data)=>{
    console.log(data)
  }

 
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
<<<<<<< HEAD
        {!conLoading && (<div className=" col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
            <label className={`${styles.formLabels}`}>Tree Species</label>
            <select 
            {...register('species', {required : true})}

            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Species</option>
                {
                    conservanciesData?.map((item, index)=> (
                        <option key={index} value={item.conservancy_id}>{item.conservancy_name}</option>
                    ))}
            </select>
        </div>)}
=======
        

>>>>>>> 8873f551670aa5ed42e6ba0d434bf442f0cfc418
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
<<<<<<< HEAD
        
=======
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
>>>>>>> 8873f551670aa5ed42e6ba0d434bf442f0cfc418
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
<<<<<<< HEAD
         <NumericalInput
        placeholder='area'
        name="area"
        label='Area(in Ha)'
        max={4000}
        mi={50}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        
        
       
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NumericalInput
        placeholder='density'
        name="density"
        label='Density (Trees per Ha)'
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
        placeholder='mht'
        name="mht"
        label='Mean Height(mht in metres)'
        max={4000}
        mi={50}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
         <NumericalInput
        placeholder='age'
        name="age"
        label='Age(in years)'
        max={4000}
        mi={50}
        ifRequired={true}
        errors={errors}
        register={register}/>
        </div>
        <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
=======
>>>>>>> 8873f551670aa5ed42e6ba0d434bf442f0cfc418
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

        {!conLoading && (<div className=" col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
            <select 
            {...register('conservancy', {required : true})}

            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Conservancy</option>
                {
                    conservanciesData?.map((item, index)=> (
                        <option key={index} value={item.conservancy_id}>{item.conservancy_name}</option>
                    ))}
            </select>
        </div>)}

        <div className=" col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-4 
         w-full  justify-center flex-col items-center px-4">
            <select 
            defaultValue={{ label: "Select County", value: 'placeholder'}}
            {...register('county', {required : true})}

            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                {
                    counties.map((item, index)=> (
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