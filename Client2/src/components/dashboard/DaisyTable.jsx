import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DaisyTable({ rowData, headings, actions, linkActions}) {
  return (
    <div className="overflow-x-auto bg-white mx-2 rounded-lg">
      <table className="table table-zebra">
        <thead>
          <tr className='font-bold'>
            {headings.map((header, index) => (
              <th
                key={index}
              >
                {header.title}
              </th>
            ))}
            <th
              className="px-6 py-3 text-left text-[17px] font-bold text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((dataRow, rowIndex) => (
            <tr key={rowIndex}>
              {headings.map((heading, columnIndex) => (
                <td
                  key={columnIndex}
                  className=' text-black font-normal'
                >
                  {dataRow[heading.name]}
                </td>
              ))}

            <td className="px-6 py-4 whitespace-nowrap">
              {linkActions && (linkActions?.map((action, actionIndex) => (
                  <Link
                    key={actionIndex}
                    className=" bg-amber-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 no-underline"
                    to={action?.to}
                    state={dataRow}
                  >
                    {action?.label} 
                  </Link>
                )))}
                

                {/* {actions && (actions?.map((action, actionIndex) => (
                  <Link
                    key={actionIndex}
                    className=" bg-amber-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 no-underline"
                    to={action?.to}
                    state={dataRow}
                  >
                    {action?.label}{dataRow?.subcompartment_id}
                  </Link>
                )))} */}
                


                {actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className=" bg-amber-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                    onClick={() => action.onClick(dataRow)}
                  >
                    {action.label}{dataRow?.subcompartment_id}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

DaisyTable.propTypes={
    rowData: PropTypes.array,
    headings: PropTypes.array,
    actions: PropTypes.array,
    linkActions: PropTypes.array,
}

export default DaisyTable;
