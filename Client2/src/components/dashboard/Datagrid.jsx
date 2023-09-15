import  { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import '@astrouxds/ag-grid-theme/dist/main.css'

function CustomDataGrid() {

    let gridApi=useRef();
    let columnsToExport = ['id', 'name']; // List of columns to be exported

  // Sample data
  const rowData = [
    { id: 1, name: 'John Doe', age: 30, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 28, country: 'Canada' },
    { id: 3, name: 'Bob Johnson', age: 35, country: 'UK' },
    // Add more mock data as needed
  ];

  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection:true,headerCheckboxSelection:true},
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true },
    { headerName: 'Country', field: 'country', sortable: true, filter: true },
  ];

    const onGridReady=(params)=>{
    gridApi=params.api
    }
    const onExportClick=()=>{
    gridApi.exportDataAsCsv({
        columnKeys: columnsToExport,
        allColumns: false
    });
    }

    const defaultColDef={
      sortable:true,
      editable:true,
      flex:1,
      filter:true,
      resizable:true,
      floatingFilter:true,}

    const rowSelectionType='multiple'
  
  return (
    <div className="ag-theme-astro" >
         <button className=' rounded-full bg-green-200 text-black font-bold p-3 mb-3' onClick={()=>onExportClick()}>Export</button>
      <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                domLayout="autoHeight"
                pagination={true}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                rowSelection={rowSelectionType}
                rowMultiSelectWithClick={true}
      />
    </div>
  );
}

export default CustomDataGrid;
