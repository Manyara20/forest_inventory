import { useForm } from "react-hook-form"
import EmailInput from "./formComponents/EmailInput"
import ForgotPassword from "./formComponents/ForgotPasswordPartials"
import FormHeader from "./formComponents/FormHeader"
import PasswordInput from "./formComponents/PasswordField"
import SubmitButton from "./formComponents/SubmitButton"
import { useValue } from "../context/ContextProvider"
import { updateData } from "../actions/fetchMethods"
import NameInput from "./formComponents/NameInput"
import NumericalInput from "./formComponents/NumericalInput"
import ConfirmPassword from "./formComponents/ConfirmPassword"
import ConfirmEmail from "./formComponents/ConfirmEmail"


const SignupForm = () => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

    const watchPassword = watch('password')
    const watchEmail = watch('email')

    const {dispatch}= useValue();

    const submit = (data)=>{
        updateData('post', '/login', data, dispatch)
      };
    
  return (
   <form onSubmit={handleSubmit(submit)}>
    <FormHeader
        heading="Login to Your Account"
        paragraph="Don't Have An Account Yet? "
        linkName="Login"
        linkUrl="/login"/>
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
    <ConfirmEmail
        placeholder='Confirm Email'
        register={register}
        label="Confirm Email"
        name='confirm_email'
        maximLength={50}
        watchValue={watchEmail}
        ifRequired={true}
        errors={errors}/>
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
    <ForgotPassword/>
    <SubmitButton
        type='submit'
        handleSubmit={null}
        text='Login'
        />
   </form>
  )
}

export default SignupForm