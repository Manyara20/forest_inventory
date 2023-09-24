import { useMemo } from 'react'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'
import GroupedTable from '../../../components/dashboard/ArrayAggTable'
import { useNavigate } from 'react-router-dom'

const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
    {name: "permissions", title: "Permission"},
]

const log =()=>{
    console.log("Item")
}

const RolePermissions = () => {

    const dispatch =useValue();
    const navigate = useNavigate();

    const navigateEdit = (item)=>{
        navigate(`/dashboard/rolePermissions/${item.id}`)
    }

    const memoizedHeadings = useMemo(()=>headings, []);

    const memoizedCollumsNotToSplit = useMemo(()=>[
        "id", "name"
    ], []);
    
    const memoizedCollumsToSplit = useMemo(()=>[
        "permissions",
    ], []);

    const actions = useMemo(()=>[
        {label:"Edit", onClick: navigateEdit} ,
        {label:"Delete", onClick: log},
    ],[])

    //const minActions = useMemo(() => ({ label: "Edit", handleClick: log }), []);

    //data
    const { data: roles = [], } = useQuery(
        ['rolesPermissions'],
        () => fetchDataReactQuerry(dispatch, '/roles_permissions')
      );
    
      const memoizedRolePermissions = useMemo(() => roles, [roles]);

  return (
    <div>
        < GroupedTable 
        data={memoizedRolePermissions} 
        allHeadings={memoizedHeadings} 
        actions={actions} 
        minAction={null}
        columnsToSplit={memoizedCollumsToSplit}
        columnsNotToSplit={memoizedCollumsNotToSplit} />
    </div>
  )
}

export default RolePermissions