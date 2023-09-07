import PropTypes from 'prop-types';


const PhoneInput = (props) => {

    const {placeholder, label, maximLength, minLength, name, ifRequired, errors, register}=props;

  return (
    <div className='inputForm'>
        <label>{label}</label>
            <input type='text' placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "This field is required"},
                      maxLength: {value: maximLength, message: `Cannot be Longer than ${maximLength} characters`}, 
                      minLength: {value: minLength, message: `Must be at least ${minLength} characters`},
                      pattern: {value:  /^0\d{9}$/, message: "Must be a valid phone number that starts with 0"} })}/>

              {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

    PhoneInput.propTypes ={
        label: PropTypes.string,
        placeholder: PropTypes.string,
        maximLength: PropTypes.number,
        minLength: PropTypes.number,
        name: PropTypes.string,
        ifRequired:PropTypes.bool,
        inputPattern: PropTypes.shape(RegExp),
        errors: PropTypes.object,
        register: PropTypes.func,
    }

export default PhoneInput

