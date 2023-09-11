import styles from '../../styles/index';
import PropTypes from 'prop-types'
import nursery from '../../assets/images/nursery.jpeg'

const NewFeatures = ({ title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={nursery} alt="icon" className="w-full h-full object-contain rounded-full" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p className="flex-1 mt-[16px] font-medium text-[18px] text-[#6d4e41] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;

NewFeatures.propTypes={
    title: PropTypes.string,
    imgUrl: PropTypes.object,
    subtitle: PropTypes.string
}