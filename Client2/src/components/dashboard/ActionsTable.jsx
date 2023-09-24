import IconButton from './IconButton';
import PropTypes from 'prop-types'

const addSVG = (
  <svg viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80" fill="white" />
  <title>Add Permission</title>
</svg>
)

const removeSVG = (
  <svg viewBox="0 0 512 512" width="2em" height="2em" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z" fill="white" />
  <title>Remove Permission</title>
</svg>

)

const ActionsTable = ({headings, rowData, condition1, condition2, func1, func2 }) => {
    
  return (
    <div className="overflow-x-auto bg-gray-50 max-w-lg min-w-[576px] rounded-lg">
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
                {condition1(dataRow.id) && (
                    < IconButton
                    background={'bg-green-500'}
                    icon={addSVG}
                    label='Add'
                    onClick={()=>func1(dataRow.id)}
                    />
                )}
                 {condition2(dataRow.id) && (
                    < IconButton
                    background={'bg-red-500'}
                    icon={removeSVG}
                    onClick={()=>{func2(dataRow.id)}}
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
