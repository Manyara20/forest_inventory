import PropTypes from 'prop-types';

const IconButton = ({ icon, label, background, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={`${background}text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
};

IconButton.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    background: PropTypes.string,
}

export default IconButton;
