import { motion } from 'framer-motion';
import PropTypes from 'prop-types'
import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[18px] text-blue-800 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

TypingText.propTypes={
    title: PropTypes.node,
    textStyles: PropTypes.string
}

export const TypingTextBlack = ({ title, textStyles }) => (
    <motion.p
      variants={textContainer}
      className={`font-bold cursive text-[18px] text-black ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );

TypingTextBlack.propTypes={
    title: PropTypes.node,
    textStyles: PropTypes.string
}

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[54px] text-[30px] text-purple-800 ${textStyles}`}
  >
    {title}
  </motion.h2>
);

TitleText.propTypes={
    title: PropTypes.node,
    textStyles: PropTypes.string
}

export const TitleTextWhite = ({ title, textStyles }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[54px] text-[30px] text-purple-50 ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
  
  TitleTextWhite.propTypes={
      title: PropTypes.node,
      textStyles: PropTypes.string
  }