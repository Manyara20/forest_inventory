import PropTypes from 'prop-types';
import styles from '../../styles';

const SelectInput = (props) => {

    const {label, register, options, name, errors, ifRequired}= props

    const customEmailClass=`rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus: outline-none  sm:text-sm ${!errors[name] ? "focus:ring-purple-500 focus:border-purple-500" :"focus:ring-red-500 focus:border-red-500" }`

  return (
    <div className=' mt-5'>
    <label className={`${styles.formLabels}`}>{label}</label>
    <select className={customEmailClass} {...register(name, { required: {value: ifRequired, message: "This field is required"}, })}>
    {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
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
}

export default SelectInput