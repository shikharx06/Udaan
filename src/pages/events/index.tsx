import { motion } from 'framer-motion';

import EventCard from '../../components/eventCard';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { EventConfig } from '../../utils/EventConfig';

const Events = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Main
      meta={
        <Meta
          title="Udaan | Events"
          description="Recent events surrounding S Agri Udaan"
        />
      }
    >
      <section className="flex flex-col items-center gap-12 mt-24 md:mb-32 md:mx-12 md:mt-32">
        <h1 className="text-4xl font-semibold">Recent Events</h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2 overflow-hidden md:gap-8"
        >
          <motion.div variants={item}>
            <EventCard
              title={EventConfig.event1.title}
              src={EventConfig.event1.src}
              description={EventConfig.event1.shortDescription}
              empty={false}
            />
          </motion.div>
          <motion.div variants={item}>
            {' '}
            <EventCard
              title={EventConfig.event1.title}
              src={EventConfig.event1.src}
              description={EventConfig.event1.shortDescription}
              empty={false}
            />
          </motion.div>
          <motion.div variants={item}>
            {' '}
            <EventCard title="" src="" description="" empty={true} />
          </motion.div>
        </motion.div>
      </section>
    </Main>
  );
};

export default Events;
