import { useMemo } from 'react'
import DaisyTable from '../../../components/dashboard/DaisyTable'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'

const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
]

const log = (message)=>{
    console.log(message)
}

const Roles = () => {

    const dispatch =useValue();

    //headings 

    const memoizedHeadings = useMemo(()=>headings, []);

    //data
    const { data: roles = [], } = useQuery(
        ['roles'],
        () => fetchDataReactQuerry(dispatch, '/roles')
      );
    
      const memoizedRoles = useMemo(() => roles, [roles]);

    const actions = useMemo(()=>[
        {label:"Edit", onClick: log} ,
        {label:"Delete", onClick: log},
    ],[])

  return (
    <div>
        < DaisyTable rowData={memoizedRoles} headings={memoizedHeadings} actions={actions} />
    </div>
  )
}

export default Roles