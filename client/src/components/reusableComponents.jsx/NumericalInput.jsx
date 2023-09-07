import PropTypes from 'prop-types';

const NumericalInput = (props) => {

    const {placeholder, label, max, min, name, ifRequired, errors, register}=props;

  return (
    <div className='inputForm'>
        <label>{label}</label>
            <input type='text' placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "This field is required"},
                      max: {value: max, message: `Cannot be less than ${max} characters`}, 
                      min: {value: min, message: `Must be at least ${min} characters`},
                      pattern: {value: /^-?\d+(\.\d+)?$/, message: "must be a number"} })}/>
              {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

    NumericalInput.propTypes ={
        label: PropTypes.string,
        placeholder: PropTypes.string,
        max: PropTypes.number,
        min: PropTypes.number,
        name: PropTypes.string,
        ifRequired:PropTypes.bool,
        inputPattern: PropTypes.shape(RegExp),
        errors: PropTypes.object,
        register: PropTypes.func,
    }

export default NumericalInput