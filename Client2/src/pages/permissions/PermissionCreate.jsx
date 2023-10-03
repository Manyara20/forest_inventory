import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop';
import { useValue } from '../../context/ContextProvider';
import SubmitButton from '../../components/formComponents/SubmitButton';
import NameInput from '../../components/formComponents/NameInput';
import { updateData } from '../../actions/fetchMethods';
import NotificationToast from '../../components/globalComponents/NotificationToast';
const CreatePermissions2 = () => {

    const state =useLocation().state

    const { dispatch}=useValue();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onChange'});

    const submit = (data)=>{
        if(state){
          console.log("executing update")
          updateData('patch', `/permissions/${state.id}`, data, dispatch)
        }
        else{
          updateData('post', '/permissions', data, dispatch)
        }
      };

      useEffect(()=>{
        reset(state)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    return ( <>
            <LoadingBackdrop />
            <NotificationToast />
            <form onSubmit={handleSubmit(submit)}>
            <div className=' flex items-center justify-center mx-auto flex-col max-w-md border-[2px] rounded-md px-3 broder-solid border-purple-50 shadow-lg shadow-purple-200'>
            <div>
                    <NameInput
                    placeholder='Name'
                    name="name"
                    label='Name'
                    maximLength={50}
                    minLength={3}
                    ifRequired={true}
                    errors={errors}
                    register={register}/>
                </div>
                <div>
                    <NameInput
                    placeholder='Guard Name'
                    name="guard_name"
                    label='Guard Name'
                    maximLength={50}
                    minLength={3}
                    ifRequired={true}
                    errors={errors}
                    register={register}/>
                </div>
               
                <div>
                    < SubmitButton
                    text='Submit'
                    handleSubmit={null}
                    type='submit'
                    />
                </div>
            </div>
            </form>
            </>
            )
}

export default CreatePermissions2