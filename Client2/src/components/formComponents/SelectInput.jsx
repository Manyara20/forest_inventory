import PropTypes from 'prop-types';
import styles from '../../styles';

const SelectInput = (props) => {

    const {label, register, options, name, errors, ifRequired, optionLabel, optionValue}= props

    //const customEmailClass=`rounded-md bg-white appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black-900 focus: outline-none  sm:text-sm ${!errors[name] ? "focus:ring-purple-500 focus:border-purple-500" :"focus:ring-red-500 focus:border-red-500" }`
    const customEmailClass = `w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600`

  return (
    <div>
    <label className={`${styles.formLabels}`}>{label}</label>
    <select className={customEmailClass} {...register(name, { required: {value: ifRequired, message: "This field is required"}, })}>
    {options?.map((option, index) => (
        <option key={index} value={option[optionValue]}>
          {option[optionLabel]}
        </option>
      ))}
    </select>
    {errors[name] && <span className='text-sm text-red-400 font-semibold'>{errors[name].message}</span>}
  </div>
  )
}

SelectInput.propTypes ={
    label: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    ifRequired:PropTypes.bool,
    errors: PropTypes.object,
    register: PropTypes.func,
    optionValue: PropTypes.string||PropTypes.number,
    optionLabel: PropTypes.string||PropTypes.number,
}

export default SelectInput