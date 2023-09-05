import PropTypes from 'prop-types';


const EmailInput = (props) => {

    const {type, placeholder, minLength, maximLength, name, ifRequired, errors, register}=props;

  return (
    <div className='inputForm'>
        <label>KFS Email Adress</label>
            <input type={type} placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "Email is Required"},
                      maxLength: {value: maximLength, message: `Cannot be Longer than ${maximLength}  Characters`}, 
                      minLength: {value: minLength, message: `Must Contain At Least ${minLength}  Characters`},
                      pattern: {value:  /^(?!^\s+$)[A-Za-z0-9\s]+$/, message: "Must Contain Alphanumeric Values Only"} })}/>
              {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

    EmailInput.propTypes ={
        type: PropTypes.string,
        placeholder: PropTypes.string,
        maximLength: PropTypes.number,
        minLength: PropTypes.number,
        name: PropTypes.string,
        ifRequired:PropTypes.bool,
        inputPattern: PropTypes.shape(RegExp),
        errors: PropTypes.object,
        register: PropTypes.func,
    }

export default EmailInput