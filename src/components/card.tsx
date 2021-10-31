import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type CardType = {
  src: string;
  title: string;
  description: string;
  reverse: boolean;
};

const Card = (props: CardType) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const scaleUpAnimationConfig = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
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
      className={`container flex flex-col flex-wrap ${
        props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-6`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scaleUpAnimationConfig}
        className="max-w-md lg:w-1/2 "
      >
        <img
          className="w-full shadow-2xl rounded-xl"
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
        className="text-center lg:text-left lg:m-auto"
      >
        <h1 className="text-2xl font-semibold uppercase xl:text-4xl text-primary-content">
          {props.title}
        </h1>
        <p className="text-lg text-primary-content xl:text-lg">
          {props.description}
        </p>
      </motion.div>
    </div>
  );
};

export default Card;
