import { useMemo } from 'react'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'
import GroupedTable from '../../../components/dashboard/ArrayAggTable'

const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
    {name: "permissions", title: "Permission"},
]

const log = (message)=>{
    console.log(message)
}

const RolePermissions = () => {

    const dispatch =useValue();

    const memoizedHeadings = useMemo(()=>headings, []);

    const memoizedCollumsNotToSplit = useMemo(()=>[
        "id", "name"
    ], []);
    
    const memoizedCollumsToSplit = useMemo(()=>[
        "permissions",
    ], []);

    const actions = useMemo(()=>[
        {label:"Edit", onClick: log} ,
        {label:"Delete", onClick: log},
    ],[])

    const minActions = useMemo(() => ({ label: "Edit", handleClick: log }), []);

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
        minAction={minActions}
        columnsToSplit={memoizedCollumsToSplit}
        columnsNotToSplit={memoizedCollumsNotToSplit} />
    </div>
  )
}

export default RolePermissions