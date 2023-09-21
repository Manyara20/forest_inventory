import { useMemo } from 'react'
import { fetchDataReactQuerry } from '../../../actions/fetchMethods'
import { useValue } from '../../../context/ContextProvider'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import ActionsTable from '../../../components/dashboard/ActionsTable'

const headings = [
    {name: "id", title: "Id"},
    {name: "name", title: "Name"},
    {name: "guard_name", title: "Guard Name"},
]

const testArr = [1,2, 3, 4]

const func1 = (item) => {
    return testArr.includes(item);
}


const log = (item)=>{
    console.log(item)
}


const AddPermission = () => {

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
        < ActionsTable 
        rowData={memoizedPermissions}
        headings={memoizedHeadings} 
        condition1={func1}
        condition2={func1}
        func1={log}
        func2={log}
        />
    </div>
    </>
  )
}

export default AddPermission