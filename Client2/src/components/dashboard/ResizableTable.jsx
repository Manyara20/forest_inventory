/* eslint-disable react/jsx-key */
import React from 'react';
import 'regenerator-runtime/runtime'
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce, useBlockLayout, useResizeColumns } from 'react-table';

function GlobalFilter({
                       preGlobalFilteredRows,
                       globalFilter,
                       setGlobalFilter,
                     }) {
 const count = preGlobalFilteredRows.length
 const [value, setValue] = React.useState(globalFilter)
 const onChange = useAsyncDebounce(value => {
   setGlobalFilter(value || undefined)
 }, 200)

 return (
   <span className=' text-black font-medium font-sans'>
     Search:{' '}
     <input
       value={value || ""}
       onChange={e => {
         setValue(e.target.value);
         onChange(e.target.value);
       }}
       placeholder={`${count} records...`}
       className=' rounded-full border-solid border-black p-2'
     />
   </span>
 )
}

// Define a default UI for filtering
function DefaultColumnFilter({
                              column: { filterValue, preFilteredRows, setFilter },
                            }) {
 const count = preFilteredRows.length

 return (
   <input
    className='w-[80%] ring-1 rounded-full p-[3px] border-2 mt-2'
     value={filterValue || ''}
     onChange={e => {
       setFilter(e.target.value || undefined) 
     }}
     placeholder={`Search this`}
   />
 )
}

function Table({columns, data}) {

 const defaultColumn = React.useMemo(
   () => ({
     Filter: DefaultColumnFilter,
     minWidth: 30,
     maxWidth: 450,
     width: 150,
   }),
   []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
   state,
   visibleColumns,
   preGlobalFilteredRows,
   resetResizing,
   setGlobalFilter,
 } = useTable(
   {
     columns,
     data,
     defaultColumn,
   },
   useBlockLayout,
   useResizeColumns,
   useFilters,
   useGlobalFilter,
   useSortBy
 );

 return (
        <div className=' overflow-x-auto'>
        <button className=" text-red-400" onClick={resetResizing}> Reset Resizing</button>
       <table className='border-collapse m-8' {...getTableProps()}>
         <thead>
         {headerGroups.map((headerGroup) => (
             <tr
              {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map((column) => (
                   <th className='border-[1.5px] border-solid border-black py-2 px-1'
                       {...column.getHeaderProps(column.getSortByToggleProps())}
                   >
                     {column.render('Header')}
                     <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? '🔽'
                               : '🔼'
                           : ''}
                    </span>
                    <div {...column.getResizerProps()} className={`inline-block bg-blue-500 w-1 h-full absolute right-0 top-0 translate-x-1/2 z-10 touch-none`} />
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                   </th>
               ))}
             </tr>
         ))}
         <tr>
           <th className=' border-solid border-[1.5px] border-black py-2 px-1'
             colSpan={visibleColumns.length}
           >
             <GlobalFilter
               preGlobalFilteredRows={preGlobalFilteredRows}
               globalFilter={state.globalFilter}
               setGlobalFilter={setGlobalFilter}
             />
           </th>
         </tr>
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map((row, index) => {
           prepareRow(row)
           return (
               <tr key={index} {...row.getRowProps()}>
                 {row.cells.map((cell, index) => {
                   return (
                       <td className='border-[1.5px] border-solid border-black py-2 px-1'
                          key={index}
                           {...cell.getCellProps()}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>
    </div>
 );
}

export default Table;