import PropTypes from 'prop-types';

const MultipleCheckBox = ({ options, register, title }) => {
  return (
    <div className='flex justify-start w-full flex-col'>
        <div className=' my-2 py-2'>
            <p className=' text-left font-semibold'>{title}</p>
        </div>
        <div className='flex justify-start w-full'>
        <fieldset>
        {options.map((option) => (
            <div className=" form-control justify-start" key={option.id}>
            <label className='label cursor-pointer'>
                <input
                className='checkbox checkbox-primary'
                type="checkbox"
                value={option.id}
                {...register('selectedPermissions')}
                />
                <span className="label-text pl-2 font-medium">{option.name}</span>
            </label>
            </div>
        ))}
        </fieldset>
        </div>
    </div>
  );
};

MultipleCheckBox.propTypes = {
  options: PropTypes.array.isRequired,
  register: PropTypes.object,
  title: PropTypes.string
};

export default MultipleCheckBox;
