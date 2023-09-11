import PropTypes from 'prop-types';
import styles from '../../styles';

const NumericalInput = (props) => {

    const {placeholder, label, max, min, name, ifRequired, errors, register}=props;

    const customEmailClass=`rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus: outline-none  sm:text-sm ${!errors[name] ? "focus:ring-purple-500 focus:border-purple-500" :"focus:ring-red-500 focus:border-red-500" }`

  return (
    <div className='my-2'>
        <label className={`${styles.formLabels}`}>{label}</label>
            <input className={customEmailClass}type='text' placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "This field is required"},
                      max: {value: max, message: `Cannot be greater than ${max}`}, 
                      min: {value: min, message: `Must be greater than ${min}`},
                      pattern: {value: /^-?\d+(\.\d+)?$/, message: "must be a number"} })}/>
              {errors[name] && <span className='text-sm text-red-400 font-semibold' >{errors[name].message}</span>}
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