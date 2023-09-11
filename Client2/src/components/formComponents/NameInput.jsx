import PropTypes from 'prop-types';
import styles from '../../styles';


const NameInput = (props) => {

    const {placeholder, label, maximLength, minLength, name, ifRequired, errors, register}=props;

    const customEmailClass=`rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus: outline-none  sm:text-sm ${!errors[name] ? "focus:ring-purple-500 focus:border-purple-500" :"focus:ring-red-500 focus:border-red-500" }`

  return (
    <div className=' my-2'>
        <label className={`${styles.formLabels}`}>{label}</label>
            <input type='text' placeholder={placeholder}  className={customEmailClass}
              {...register(name, { required: {value: ifRequired, message: "This field is required"},
                      maxLength: {value: maximLength, message: `Cannot be Longer than ${maximLength} characters`}, 
                      minLength: {value: minLength, message: `Must be at least ${minLength} characters`},
                      pattern: {value: /^(?!^\s+$)[A-Za-z0-9\s]*$/, message: "Must Contain no special characters"} })}/>

              {errors[name] && <span className='text-sm text-red-400 font-semibold'>{errors[name].message}</span>}
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