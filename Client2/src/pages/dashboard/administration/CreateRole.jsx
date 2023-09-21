import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import NameInput from '../../../components/formComponents/NameInput';
import { useLocation } from 'react-router-dom';
import { fetchDataReactQuerry, handleError, updateDataReactQuery } from '../../../actions/fetchMethods';
import NotificationToast from '../../../components/globalComponents/NotificationToast';
import LoadingBackdrop from '../../../components/globalComponents/LoadingBackdrop';
import { useValue } from '../../../context/ContextProvider';
import SubmitButton from '../../../components/formComponents/SubmitButton';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import MultipleCheckBox from '../../../components/formComponents/MultipleCheckBox';

const CreateRole = () => {

    const state =useLocation().state

    const { dispatch}=useValue();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onChange'});

    const queryClient = useQueryClient()

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
              dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data}})
              queryClient.invalidateQueries("roles")
              queryClient.invalidateQueries("rolesPermissions")
            }
        });

    const submit = (data)=>{
        if(state){
          mutate({method: 'patch',
                  url: `/roles/${state.id}`,
                  dataToSend: data})
        }
        else{
          mutate({method: 'post',
                  url: '/roles',
                  dataToSend: data})
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
                {
                  !state && (
                <div className=' flex justify-start w-full'>
                  < MultipleCheckBox
                      options={permissions}
                      register={register}
                      title='Permissions'/>
                </div>
                  )
                }
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