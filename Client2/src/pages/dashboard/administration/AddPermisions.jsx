import { useMemo } from 'react'
import { deleteDataReactQuery, fetchDataReactQuerry, handleError, updateDataReactQuery } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import ActionsTable from '../../../components/dashboard/ActionsTable'
import NotificationToast from '../../../components/globalComponents/NotificationToast'

const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
    {name: "guard_name", title: "Guard Name"},
]

const AddPermission = () => {

    const { dispatch}=useValue();
    const {roleId}=useParams();
    const queryClient = useQueryClient()

    //headings 

    const memoizedHeadings = useMemo(()=>headings, []);

    //permission data
    const { data: permissions = [], } = useQuery(
        ['permissions'],
        () => fetchDataReactQuerry(dispatch, '/permissions'),
        {
          cacheTime: 0,
          staleTime: 0
        }
      );

      const arrayOfIds = permissions.map(obj => obj.id);
    
      const memoizedPermissions = useMemo(() => permissions, [permissions]);

    //assigned positions

    const {data: assignedPermissions = [],}= useQuery(
      ['assignedPermissions', roleId],
      ()=>fetchDataReactQuerry(dispatch, `/individual_roles?roleId=${roleId}`)
    )

    const unAssignedPermissions = arrayOfIds.filter(item => !assignedPermissions?.includes(item));

    const positionsUnassigned = (item)=>{
      return unAssignedPermissions?.includes(item.toString())
    }

    const positionsAssigned = (item)=>{
      return assignedPermissions?.includes(item.toString())
    }

    //mutations

    const { mutate: handleDelete} = useMutation(deleteDataReactQuery,
      {
          onError: (error)=>{
              handleError(dispatch, error)
          },
          onSuccess: (data)=>{
            dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data}})
            queryClient.invalidateQueries(['assignedPermissions', roleId])
            queryClient.invalidateQueries("rolesPermissions")
          }
      });

    const handleDeleteData=(id)=>{
      handleDelete({url: `/role_permissions/${roleId}/${id}`})
    }

    //add

    const { mutate: handleAdd} = useMutation(updateDataReactQuery,
      {
          onError: (error)=>{
              handleError(dispatch, error)
          },
          onSuccess: (data)=>{
            dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data}})
            queryClient.invalidateQueries(['assignedPermissions', roleId])
            queryClient.invalidateQueries("rolesPermissions")
          }
      });

    const handleAddData=(id)=>{
      handleAdd({
        url: `roles_permissions/${roleId}`,
        dataToSend: {permissionId: id},
        method: 'post',
      })
    }

  return (
    <>
    <NotificationToast />
    <div className='w-full flex items-center justify-end'>
      <Link
          className=" bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 no-underline mb-3"
          to='/dashboard/createRole'
        >
          Create Role
        </Link>
    </div>
    <div className=' flex items-center justify-center mx-auto'>
        < ActionsTable 
        rowData={memoizedPermissions}
        headings={memoizedHeadings} 
        condition1={positionsUnassigned}
        condition2={positionsAssigned}
        func1={handleAddData}
        func2={handleDeleteData}
        />
    </div>
    </>
  )
}

export default AddPermission