import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import NameInput from '../../../components/formComponents/NameInput';
import { useLocation } from 'react-router-dom';
import { fetchDataReactQuerry, handleError, updateData, updateDataReactQuery } from '../../../actions/fetchMethods';
import NotificationToast from '../../../components/globalComponents/NotificationToast';
import LoadingBackdrop from '../../../components/globalComponents/LoadingBackdrop';
import { useValue } from '../../../context/ContextProvider';
import SubmitButton from '../../../components/formComponents/SubmitButton';
import { useMutation, useQuery } from '@tanstack/react-query';
import MultipleCheckBox from '../../../components/formComponents/MultipleCheckBox';

const CreateRole = () => {

    const state =useLocation().state

    const { dispatch}=useValue();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onChange'});

    const { data: permissions = [], } = useQuery(
        ['permissions'],
        () => fetchDataReactQuerry(dispatch, '/permissions'),
        {
          cacheTime: 30*1000,
          staleTime: 30*1000, 
        }
      );

    const { mutate } = useMutation(updateDataReactQuery,
        {
            onError: (error)=>{
                handleError(dispatch, error)
            },
            onSuccess: (data)=>{
                console.log(data)
            }
        });

    const submit = (data)=>{
        if(state){
          mutate('patch', `/role/${state.id}`, data, dispatch)
        }
        else{
          mutate('post', '/roles', data, dispatch)
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
            <div className=' flex items-center justify-center mx-auto flex-col max-w-md border-[2px] rounded-md px-3 broder-solid border-purple-50 shadow-lg shadow-purple-200 py-3'>
                <div className='w-full'>
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
                <div className='w-full'>
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
                <div className=' flex justify-start w-full'>
                < MultipleCheckBox
                    options={permissions}
                    register={register}
                    title='Permissions'/>
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

export default CreateRole