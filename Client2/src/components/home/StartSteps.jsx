import styles from '../../styles/index';
import PropTypes from 'prop-types'

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-medium text-[#6d4e41] text-[18px] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;

StartSteps.propTypes = {
    number: PropTypes.string,
    text: PropTypes.string
}