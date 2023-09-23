import { useForm } from "react-hook-form"
import MultipleCheckBox from "../../../components/formComponents/MultipleCheckBox"
import { useQuery } from "@tanstack/react-query"
import NotificationToast from "../../../components/globalComponents/NotificationToast"
import NameInput from "../../../components/formComponents/NameInput"
import NumericalInput from "../../../components/formComponents/NumericalInput"
import EmailInput from "../../../components/formComponents/EmailInput"
import PhoneInput from "../../../components/formComponents/PhoneNumberField"
import PasswordInput from "../../../components/formComponents/PasswordField"
import ConfirmPassword from "../../../components/formComponents/ConfirmPassword"
import SubmitButton from "../../../components/formComponents/SubmitButton"
import { useValue } from "../../../context/ContextProvider"
import { fetchDataReactQuerry, updateData } from "../../../actions/fetchMethods"


const CreateUser = () => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

    const watchPassword = watch('password')

    const {dispatch}= useValue();

    const { data: roles = [], } = useQuery(
        ['roles'],
        () => fetchDataReactQuerry(dispatch, '/roles'),
        {
          cacheTime: 30*1000,
          staleTime: 30*1000, 
        }
      );

    const submit = (data)=>{
        updateData('post', '/register', data, dispatch)
      };
    
  return (
    <>
    <NotificationToast />
    <div className=" flex items-center justify-center">
    <div className=" flex flex-col justify-center items-center max-w-md rounded-xl border-solid border-[2px] py-2 bg-white px-6">
   <form onSubmit={handleSubmit(submit)}>
    <NameInput
        placeholder='full name'
        name="fullname"
        label='Full Name'
        maximLength={50}
        minLength={5}
        ifRequired={true}
        errors={errors}
        register={register}/>
    <NumericalInput
        placeholder="KFS No"
        label="KFS No"
        max={111111111111}
        min={0}
        name='kfs_no'
        ifRequired={true}
        errors={errors}
        register={register}
        />
    <EmailInput
         placeholder='Email'
         register={register}
         label="KFS Email"
         name='email'
         maximLength={50}
         ifRequired={true}
         errors={errors}/>
    < PhoneInput
        placeholder={'Phone Number'}
        label="Phone Number"
        maximLength={10}
        minLength={0}
        name='phone'
        ifRequired={true}
        errors={errors}
        register={register}/>
    <PasswordInput
        name='password'
        placeholder='Password'
        label='Password'
        register={register}
        maximLength={20}
        ifRequired={true}
        errors={errors}
        />
    <ConfirmPassword
        placeholder='Confirm Password'
        label='Confirm Password'
        maximLength={30}
        name='confirm_password'
        ifRequired={true}
        errors={errors}
        register={register}
        watchValue={watchPassword}
         />
    < MultipleCheckBox
        options={roles}
        register={register}
        name='selectedRoles'
        title='Roles'/>
    <SubmitButton
        type='submit'
        handleSubmit={null}
        text='Sign Up'
        />
   </form>
   </div>
   </div>
   </>
  )
}

export default CreateUser