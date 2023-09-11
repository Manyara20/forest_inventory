import { motion } from 'framer-motion';
import styles from '../../styles/index';
import { startingFeatures } from '../../constants/constants';
import { staggerContainer, fadeIn, planetVariants } from '../../utils/motion';
import { TitleText, TypingTextBlack } from './CustomTexts';
import rangers from '../../assets/images/rangers.png'
import StartSteps from './StartSteps';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={rangers}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain mix-blend-color-burn"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingTextBlack title="| Welcome to Kenya Forest Inventory System" />
        <TitleText title={<>A Database for all Institutional and Private Tree Nurseries</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={index}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;