import React, { useMemo } from 'react'
import Table from '../../components/dashboard/CustomTable';
import DataTable from '../../components/dashboard/ResizableTable';
const Users = () => {

    const columns = React.useMemo(
        () => [
          {
            Header: 'Name',
            accessor: 'col1',
          },
          {
            Header: 'Block',
            accessor: 'col2',
          },
          {
            Header: 'Species',
            accessor: 'col3',
          },
          {
            Header: 'Number',
            accessor: 'col4',
          },
          {
            Header: 'Entered By',
            accessor: 'col5',
          },
          {
            Header: 'Actions', // New column for buttons
            accessor: 'actions',
            Cell: ({ row }) => (
              <div>
                <button onClick={() => handleButton1Click(row)}>Button 1</button>
                <button onClick={() => handleButton2Click(row)}>Button 2</button>
                <button onClick={() => handleButton3Click(row)}>Button 3</button>
              </div>
            ),
          },
        ],
        []
      );

      const rows = useMemo(() => [
        {
          col1: 'Minsk',
          col2: '27',
          col3: 'rain',
          col4: '739',
          col5: '90',
        },
        {
          col1: 'Vilnius',
          col2: '30',
          col3: 'rain',
          col4: '740',
          col5: '87',
        },
        {
          col1: 'London',
          col2: '23',
          col3: 'rain',
          col4: '743',
          col5: '77',
        },
        {
          col1: 'Madrid',
          col2: '34',
          col3: 'sunny',
          col4: '738',
          col5: '40',
        },
        {
          col1: 'Warsaw',
          col2: '25',
          col3: 'heavy rain',
          col4: '739',
          col5: '88',
        },
      ], []);
      
  return (
    <div className=' bg-gray-50'>
        <DataTable columns={columns} data={rows} />
    </div>
    

  )
}

export default Users