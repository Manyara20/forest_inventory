import { useForm } from "react-hook-form"
import EmailInput from "./formComponents/EmailInput"
import ForgotPassword from "./formComponents/ForgotPasswordPartials"
import PasswordInput from "./formComponents/PasswordField"
import SubmitButton from "./formComponents/SubmitButton"
import { useValue } from "../context/ContextProvider"
import { login } from "../actions/userActions"
import FormHeader from "./formComponents/FormHeader"

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

    const {dispatch}= useValue();

    const submit = (data)=>{
        login(data, dispatch)
      };
    
  return (
   <form onSubmit={handleSubmit(submit)}>
    <FormHeader
        heading="Login to Your Account"
        paragraph="Don't Have An Account Yet? "
        linkName="Register"
        linkUrl="/register"/>
    <EmailInput
         placeholder='Email'
         register={register}
         label="KFS Email"
         name='email'
         maximLength={50}
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
    <ForgotPassword/>
    <SubmitButton
        type='submit'
        handleSubmit={null}
        text='Login'
        />
   </form>
  )
}

export default LoginForm