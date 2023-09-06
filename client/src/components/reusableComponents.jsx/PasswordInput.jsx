import PropTypes from 'prop-types';

const PasswordInput = (props) => {

  const {placeholder, label, maximLength, minLength, name, ifRequired, errors, register}=props;

  return (
    <div className='inputForm'>
        <label>{label}</label>
            <div>
                <input id="password" type='password' placeholder={placeholder} 
                {...register(name, { required: {value: ifRequired, message: "Password is Required"},
                        maxLength: {value: maximLength, message: `Cannot be Longer ${maximLength} than  Characters`}, 
                        minLength: {value: minLength, message: `Must Be at Least ${minLength} Characters`},
                         })} />
            </div>
              {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

    PasswordInput.propTypes ={
        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        maximLength: PropTypes.number,
        minLength: PropTypes.number,
        name: PropTypes.string,
        ifRequired:PropTypes.bool,
        errors: PropTypes.object,
        register: PropTypes.func,
    }

export default PasswordInput