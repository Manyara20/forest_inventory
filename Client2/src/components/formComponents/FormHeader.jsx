import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import kfsLogo from '../../assets/images/logo.png'

const FormHeader=(props)=>{

    const {heading, paragraph, linkName, linkUrl}= props;

    return(
        <div className="mb-5">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src={kfsLogo}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}


FormHeader.propTypes ={
    heading: PropTypes.string,
    paragraph: PropTypes.string,
    linkName: PropTypes.string,
    linkUrl: PropTypes.string,
}

export default FormHeader