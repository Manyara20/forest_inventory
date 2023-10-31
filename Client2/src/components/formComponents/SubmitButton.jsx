import PropTypes from 'prop-types';

const SubmitButton =(props)=>{

    const {action, text, handleSubmit}= props;

    return(
        <>
            <button
                type={action}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-20 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onSubmit={handleSubmit}
            >
                {text}
            </button>
        </>
    )
}

SubmitButton.propTypes ={
    action: PropTypes.string,
    text: PropTypes.string,
    handleSubmit: PropTypes.func,
}

export default SubmitButton;