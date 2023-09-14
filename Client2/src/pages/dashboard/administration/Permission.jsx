import { useMemo } from 'react'
import DaisyTable from '../../../components/dashboard/DaisyTable'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'

const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
    {name: "guard_name", title: "Guard Name"},
]

const log = (message)=>{
    console.log(message)
}

const Permission = () => {

    const dispatch =useValue();

    //headings 

    const memoizedHeadings = useMemo(()=>headings, []);

    //data
    const { data: permissions = [], } = useQuery(
        ['permissions'],
        () => fetchDataReactQuerry(dispatch, '/permissions')
      );
    
      const memoizedPermissions = useMemo(() => permissions, [permissions]);

    const actions = useMemo(()=>[
        {label:"Edit", onClick: log} ,
        {label:"Delete", onClick: log},
    ],[])

  return (
    <div>
        < DaisyTable rowData={memoizedPermissions} headings={memoizedHeadings} actions={actions} />
    </div>
  )
}

export default Permission