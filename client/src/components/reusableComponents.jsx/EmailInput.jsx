import React from 'react'
import PropTypes from 'prop-types';


const EmailInput = (props) => {

    const {type, placeholder, maximLength, name, ifRequired, errors, register}=props;

  return (
    <div className='inputForm'>
        <label>KFS Email Adress</label>
            <input type={type} placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "Email is Required"},
                      maxLength: {value: maximLength, message: "Cannot be Longer than 50 Characters"}, 
                      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter a Valid Email"} })}/>

              {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

    EmailInput.propTypes ={
        type: PropTypes.string,
        placeholder: PropTypes.string,
        maximLength: PropTypes.number,
        name: PropTypes.string,
        ifRequired:PropTypes.bool,
        inputPattern: PropTypes.shape(RegExp),
        errors: PropTypes.object,
        register: PropTypes.func,
    }

export default EmailInput