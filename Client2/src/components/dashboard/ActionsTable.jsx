import IconButton from './IconButton';
import PropTypes from 'prop-types'

const addSVG = (
    <svg
    className="w-4 h-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
)

const removeSVG = (
    <svg
    viewBox="0 0 14 10"
    fill="currentColor"
    height="1em"
    width="1em"
    className="w-4 h-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z" />
  </svg>
)

const ActionsTable = ({headings, rowData, condition1, condition2, func1, func2 }) => {
    
  return (
    <div className="overflow-x-auto bg-gray-50">
      <table className="table table-zebra">
        <thead>
          <tr>
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
              <td>
                {condition1(2) && (
                    < IconButton
                    background={'bg-green-500'}
                    icon={addSVG}
                    label='Add'
                    onClick={()=>func1(dataRow)}
                    />
                )}
                 {condition2(1) && (
                    < IconButton
                    background={'bg-red-500'}
                    icon={removeSVG}
                    onClick={()=>{func2(dataRow)}}
                    label='Add'/>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ActionsTable.propTypes = {
    headings: PropTypes.array,
    rowData: PropTypes.array,
    condition1: PropTypes.func,
    condition2: PropTypes.func,
    func1: PropTypes.func,
    func2: PropTypes.func,
}

export default ActionsTable;
