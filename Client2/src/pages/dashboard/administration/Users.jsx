import React, { useMemo } from 'react'
import DataTable from '../../../components/dashboard/ResizableTable';
import { fetchDataReactQuerry } from '../../../actions/fetchMethods';
import { useQuery } from "@tanstack/react-query";
import { useValue } from '../../../context/ContextProvider';
const Users = () => {

    const {dispatch} =useValue();

    const handleButton1Click =(item)=>{
      console.log(item)
    };

    const { data: users = [], } = useQuery(
      ['users'],
      () => fetchDataReactQuerry(dispatch, '/users')
    );
  
    const memoizedUsers = useMemo(() => users, [users]);



    const columns = React.useMemo(
        () => [
          {
            Header: 'Name',
            width: 200,
            accessor: 'name',
          },
          {
            Header: 'Email',
            width: 200,
            accessor: 'email',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
            width: 120,
          },
          {
            Header: 'KFS No',
            accessor: 'kfs_no',
            width: 120,
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            width: 300,
            // eslint-disable-next-line react/prop-types
            Cell: ({ row }) => (
              <div>
                <button className='rounded-full mx-2 w-[80px] bg-middle-green px-3 my-1 py-2 font-bold' onClick={() => handleButton1Click(row)}>Edit</button>
                <button className='rounded-full mx-2 w-[120px] bg-orange-200 px-3 my-1 py-2 font-bold' onClick={() => handleButton2Click(row)}>Edit Roles</button>
              </div>
            ),
          },
        ],
        []
      );
      
  return (
    <div className=' bg-gray-50'>
        <DataTable columns={columns} data={memoizedUsers} />
    </div>
    
  )
}

export default Users