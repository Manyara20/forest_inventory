import PropTypes from 'prop-types';

const FormCard = (props) => {
    const {children} = props

  return (
    <div className="h-full max-w-lg border-4 rounded-2xl">
        <div className="grid grid-cols-12 gap-1">
            <div className="hidden sm:block md:col-span-4 lg:col-span-5 bg-cover bg-center bg-no-repeat bg-kenya">
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-7 w-full flex justify-center flex-col items-center px-2">
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