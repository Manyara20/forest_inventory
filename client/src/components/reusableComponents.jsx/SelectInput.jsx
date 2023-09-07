import PropTypes from 'prop-types';

const SelectInput = (props) => {
    const {label, register, options, name, errors, ifRequired}= props
  return (
    <div className='inputForm options'>
    <label>{label}</label>
    <select {...register(name, { required: {value: ifRequired, message: "This field is required"}, })}>
    {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors[name] && <span>{errors[name].message}</span>}
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