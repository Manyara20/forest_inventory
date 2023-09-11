import { motion } from 'framer-motion';
import styles from '../../styles/index';
import { staggerContainer } from '../../utils/motion';
import { TitleTextWhite, TypingTextBlack, } from './CustomTexts';

const Additional = () => (
  <section className={` p-8 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingTextBlack title="| A Goal Within Reach " textStyles="text-center" />
      <TitleTextWhite
        title={(
          <>
          Support the attainment of the Presidential Directive on 10% national tree cover by 2022
          </>
        )}
        textStyles="text-center"
      />
    </motion.div>
  </section>
);

export default Additional;