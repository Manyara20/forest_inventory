import PropTypes from 'prop-types';


const NameInput = (props) => {

    const {placeholder, label, maximLength, minLength, name, ifRequired, errors, register}=props;

  return (
    <div className='inputForm'>
        <label>{label}</label>
            <input type='text' placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "This field is required"},
                      maxLength: {value: maximLength, message: `Cannot be Longer than ${maximLength} characters`}, 
                      minLength: {value: minLength, message: `Must be at least ${minLength} characters`},
                      pattern: {value: /^(?!^\s+$)[A-Za-z0-9\s]*$/, message: "Must Contain no special characters"} })}/>

              {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

    NameInput.propTypes ={
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

export default NameInput