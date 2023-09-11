import PropTypes from 'prop-types';

const FormCard = (props) => {
    const {children} = props

  return (
    <div className="h-full mx-auto border-4 rounded-2xl max-w-2xl bg-white py-5 my-5">
        <div className="grid grid-cols-12 gap-1">
            <div className="hidden sm:block md:col-span-5 lg:col-span-6 bg-cover bg-center bg-no-repeat bg-forest">
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-6 w-full flex justify-center flex-col items-center px-2">
               {children}
            </div>
            
        </div>
    </div>
  )
}

FormCard.propTypes = {
    children: PropTypes.node,
}


export default FormCard