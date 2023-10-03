import { useMemo } from 'react'
import DaisyTable from '../../../components/dashboard/DaisyTable'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const headings = [
    // {name: "id", title: "Id"},
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
        () => fetchDataReactQuerry(dispatch, '/permissions'),
        {
          cacheTime: 0,
          staleTime: 0
        }
      );
    
    const memoizedPermissions = useMemo(() => permissions, [permissions]);

    const actions = useMemo(()=>[
        {label:"Delete", onClick: log},
    ],[])

    const linkActions = useMemo(()=>[
      {label:"Edit", to: '/dashboard/editPermissions'},
    ],[])

  return (
    <>
    <div className='w-full flex items-center justify-end'>
      <Link
          className=" bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 no-underline mb-3"
          to='/dashboard/createPermissions'
        >
          Create Permission 
        </Link>
    </div>
    <div>
      
        < DaisyTable rowData={memoizedPermissions} headings={memoizedHeadings} actions={actions} linkActions={linkActions} />
    </div>

    </>
  )
}
export default Permission