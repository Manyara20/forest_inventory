import PropTypes from 'react';

const GroupedTable = ({ data, columnsNotToSplit, columnsToSplit, allHeadings, minAction, actions}) => {
  return (
    <div className="overflow-x-auto bg-white mx-2 rounded-lg">
    <table className='table table-zebra'>
      <thead>
        <tr>
          {allHeadings.map((column, index) => (
            <th key={index}>{column.title}</th>
          ))}
          <th
              className="px-6 py-3 text-left text-[17px] font-bold text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
        </tr>
      </thead>
      <tbody>
            {data.map((rows, itemIndex) => (
              <tr key={itemIndex}>
                {columnsNotToSplit.map((column, columnIndex) => (
                  <td key={columnIndex}>{rows[column]}</td>
                ))}
                {columnsToSplit.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {rows[column].split(',').map((item)=>(
                            <p key={item}>{item} <span>
                              <button 
                                className=' bg-purple-200 font-bold px-3 rounded-full ml-2 py-1' 
                                onClick={() => minAction.handleClick(item)}>{minAction.label}
                              </button></span></p>
                        ))}
                  </td>
                ))}
                 <td className="px-6 py-4 whitespace-nowrap">
                    {actions?.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className=" bg-amber-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                        onClick={() => action.onClick(rows)}
                      >
                        {action.label}
                      </button>
                    ))}
              </td>
              </tr>
            ))}
      </tbody>
    </table>
    </div>
  );
};

GroupedTable.propTypes={
  data: PropTypes.array,
  columnsNotToSplit: PropTypes.array,
  columnsToSplit: PropTypes.array,
  allHeadings: PropTypes.array,
  minAction: PropTypes.minAction,
  actions: PropTypes.array,
}

export default GroupedTable;
