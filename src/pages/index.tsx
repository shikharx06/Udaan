import { motion } from 'framer-motion';

import Card from '../components/card';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

// const videoUrl = require('../../public/assets/video/video.mp4');

const Index = () => {
  // const router = useRouter();

  const fadeInAnimationConfig = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Main
      meta={
        <Meta
          title="Udaan"
          description="Revolutionizing agritech space using accessible drones."
        />
      }
    >
      {/* Hero */}
      <section className="flex h-screen min-w-full overflow-hidden bg-primary ">
        <div className="z-10 flex flex-col justify-around mx-auto text-center xl:mx-0 lg:w-1/2 xl:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimationConfig}
            className="flex flex-col flex-wrap gap-4 p-4 bg-primary xl:mx-8 bg-opacity-80 xl:bg-transparent lg:mb-16"
          >
            <h1 className="text-3xl font-semibold text-primary-content lg:text-4xl lg:font-bold">
              Revolutionizing agriculture using cutting edge drones.
            </h1>
            <div className="xl:pr-28">
              <p className="text-primary-content opacity-90 lg:opacity-70 lg:text-lg">
                To survey and map the required region, we use a variety of
                industry-specific UAV platforms, cameras, and sensors, which are
                handled by a team of highly competent IAA certified drone
                pilots.
              </p>
            </div>
          </motion.div>
        </div>
        <div
          className="absolute top-0 right-0 w-full h-screen bg-center bg-no-repeat bg-cover xl:w-1/2"
          style={{
            backgroundImage: "url('./assets/images/udaanDroneHeroImage.jpg')",
          }}
        >
          {/* <img
            alt=""
            className=""
            src="./assets/images/udaanDroneHeroImage.jpg"
          /> */}
        </div>
      </section>

      <section className="flex flex-col items-center gap-24 mt-8 xl:mt-24 bg-primary">
        <div>
          <h1 className="text-4xl font-semibold">Our Services</h1>
        </div>
        <div className="container flex flex-col items-center max-w-7xl gap-14">
          {AppConfig.services.map((service, i) => (
            <div className="px-12" key={service.title}>
              <Card
                title={service.title}
                description={service.description}
                src={service.src}
                reverse={i % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-24 mt-8 xl:mt-24 bg-primary">
        <div>
          <h1 className="text-4xl font-semibold">Recent Events</h1>
        </div>
      </section>
      <section className="flex items-center justify-center mt-8 overflow-hidden bg-black xl:mt-24">
        <div className="flex flex-wrap justify-center gap-16 p-10 xl:p-24">
          <div className="flex flex-col max-w-xl gap-8 md:items-start">
            <h1 className="text-4xl font-semibold text-primary">In the news</h1>
            <p className="text-left text-primary md:text-left">
              S Agri Udaan, a Gujarat-based business, launched its first product
              in Banaskantha district&lsquo;s Tharad taluk. On 30/10/21, in the
              presence of honourable Mr. Parbat bhai patel, member of parliament
              (lok sabha), ex MLA of Gujarat-Tharad constituency, the launch
              took place in the farmhouse of Mr. Jivraj bhai patel, nagala
              village sarpanch.
            </p>
            <button className="bg-blue-600 btn max-w-max">Meet the team</button>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <div className=" shadow-2xl relative pb-[56.25%] w-full  md:w-[32rem]">
              <iframe
                width="100%"
                className="absolute top-0 bottom-0 rounded-xl"
                height="100%"
                src="https://www.youtube.com/embed/LNzNVI69cQc"
                title="S AGRI UDAAN camera drone inauguration by Parbatbhai Patel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
