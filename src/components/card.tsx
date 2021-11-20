import React, { ReactNode } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type CardType = {
  src: string;
  title: string;
  description: ReactNode;
  reverse: boolean;
};

const Card = (props: CardType) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const scaleUpAnimationConfig = {
    hidden: { opacity: 0.6, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const fadeInAnimationConfig = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div
      className={`container flex flex-col   ${
        props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-10 xl:gap-24`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scaleUpAnimationConfig}
        className="lg:max-w-md "
      >
        <img
          className="w-full h-48 shadow-2xl md:h-auto rounded-xl"
          src={props.src}
          alt=""
          width="384"
          height="512"
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInAnimationConfig}
        className="flex-1 max-w-max lg:text-left lg:m-auto"
      >
        <h1 className="mt-2 text-2xl font-semibold uppercase md:mt-0 xl:text-2xl text-primary-content">
          {props.title}
        </h1>
        <div className="w-10 h-2 border-b-2 border-black"></div>
        <p className="mt-6 text-lg text-left overflow-ellipsis lg:text-left text-primary-content xl:text-lg">
          {props.description}
        </p>
      </motion.div>
    </div>
  );
};

export default Card;
