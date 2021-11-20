import React, { ReactNode } from 'react';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

type EventCardType = {
  src: string;
  title: string;
  description: ReactNode;
  empty: boolean;
};

const EventCard = (props: EventCardType) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      variants={item}
      initial="hidden"
      animate={controls}
      className={`mb-5 bg-white border border-gray-200 rounded-lg 
      ${
        !props.empty
          ? 'w-64 md:max-w-sm md:w-auto  shadow-md '
          : 'w-56 md:w-96 min-h-[18rem]  border-2 border-blue-300 hover:border-0 hover:shadow-lg border-dashed flex justify-center items-center'
      } `}
    >
      {!props.empty && (
        <>
          <Link href="/events/inauguration" passHref>
            <a>
              <img className="rounded-t-lg " src={props.src} alt="" />
            </a>
          </Link>
          <div className="p-5">
            <div className="p-1 px-2 mb-2 bg-blue-300 bg-opacity-50 rounded-md max-w-max">
              <span className="text-sm font-semibold leading-normal text-blue-700 uppercase">
                Media
              </span>
            </div>
            <Link href="/events/inauguration" passHref>
              <a>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 md:text-xl">
                  {props.title}
                </h5>
              </a>
            </Link>
            <p className="mb-3 font-normal text-gray-700 ">
              {props.description}
            </p>
            <Link href="/events/inauguration" passHref>
              <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 hover:border-none">
                Read more {'>'}
              </a>
            </Link>
          </div>
        </>
      )}
      {props.empty && <p>Coming Soon..</p>}
    </motion.div>
  );
};

export default EventCard;
