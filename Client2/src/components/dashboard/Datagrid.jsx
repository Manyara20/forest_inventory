import  { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { CsvExportModule } from '@ag-grid-community/csv-export';


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

    const defaultColDef={sortable:true,editable:true,flex:1,filter:true,floatingFilter:true,}

    const rowSelectionType='multiple'
  
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
         <button className=' rounded-md w-[55px] h-[20px] bg-gray-100 text-black font-bold pb-5 mb-5' onClick={()=>onExportClick()}>Export</button>

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
