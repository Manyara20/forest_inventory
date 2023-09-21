import { useMemo } from 'react'
import DaisyTable from '../../../components/dashboard/DaisyTable'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const headings = [
    {name: "id", title: "Id"},
    {name: "guard_name", title: "Guard Name"},
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
        () => fetchDataReactQuerry(dispatch, '/roles'),
        {
          cacheTime: 30*1000,
          staleTime: 30*1000, 
        }
      );
    
      const memoizedRoles = useMemo(() => roles, [roles]);

    const actions = useMemo(()=>[
        {label:"Delete", onClick: log},
    ],[])

    const linkActions = useMemo(()=>[
      {label:"Edit", to: '/dashboard/editRole'},
    ],[])

  return (
    <>
    <div className='w-full flex items-center justify-end'>
      <Link
          className=" bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 no-underline mb-3"
          to='/dashboard/createRole'
        >
          Create New Role
        </Link>
    </div>
    <div>
        < DaisyTable rowData={memoizedRoles} headings={memoizedHeadings} actions={actions} linkActions={linkActions} />
    </div>
    </>
  )
}

export default Roles