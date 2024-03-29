import React from 'react';
import 'regenerator-runtime/runtime'
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

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
   <span className=' text-white font-medium font-mono'>
     Search:{' '}
     <input
       value={value || ""}
       onChange={e => {
         setValue(e.target.value);
         onChange(e.target.value);
       }}
       placeholder={`${count} records...`}
       style={{
         fontSize: '1.1rem',
         border: '0',
         color: 'black',
         fontWeight: 500,
       }}
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
     value={filterValue || ''}
     onChange={e => {
       setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
     }}
     placeholder={`Search ${count} records...`}
   />
 )
}

function Table({columns, data}) {

 const defaultColumn = React.useMemo(
   () => ({
     Filter: DefaultColumnFilter,
     minSize: 0,
      size: Number.MAX_SAFE_INTEGER,
      maxSize: Number.MAX_SAFE_INTEGER,
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
   setGlobalFilter,
 } = useTable(
   {
     columns,
     data,
     defaultColumn,
   },
   useFilters,
   useGlobalFilter,
   useSortBy
 );

 return (
     <div className=' bg-[#FFFFFF] broder-solid border-black border-2 rounded-br-2xl flex'>
       <table className=' w-fit max-w-fit' {...getTableProps()} style={{ border: 'solid 1px black', width: 'fit-content' }}>
         <thead>
         {headerGroups.map((headerGroup,index) => (
             <tr key={index}
              {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map((column, index) => (
                   <th
                        key={index}
                       {...column.getHeaderProps(column.getSortByToggleProps())}
                       style={{
                         borderBottom: 'solid 1px black',
                         color: 'white',
                       }}
                   >
                     {column.render('Header')}
                     <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? '🔽'
                               : '🔼'
                           : ''}
                    </span>
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                   </th>
               ))}
             </tr>
         ))}
         <tr>
           <th
             colSpan={visibleColumns.length}
             style={{
               textAlign: 'left',
               color: "black",
               fontWeight: 500,
               width: 50
             }}
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
                       <td
                          key={index}
                           {...cell.getCellProps()}
                           style={{
                             padding: 5,
                             color: "black",
                             width: 20,
                             border: 'solid 1px gray',
                           }}
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