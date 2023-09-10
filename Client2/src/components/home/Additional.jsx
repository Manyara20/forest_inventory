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
      <TypingTextBlack title="| People on the World" textStyles="text-center" />
      <TitleTextWhite
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />
    </motion.div>
  </section>
);

export default Additional;