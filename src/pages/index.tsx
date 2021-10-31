import React from 'react';

import Card from '../components/card';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
// const videoUrl = require('../../public/assets/video/video.mp4');

const Index = () => {
  // const router = useRouter();

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
        <div className="z-10 flex flex-col justify-around mx-auto text-center xl:mx-8 lg:w-1/2 xl:text-left">
          <div className="flex flex-col gap-4 p-4 bg-primary bg-opacity-70 xl:bg-transparent lg:mb-16">
            <h1 className="text-3xl font-semibold text-primary-content lg:text-3xl lg:font-bold">
              Revolutionizing agriculture using cutting edge drones.
            </h1>
            <p className=" text-primary-content opacity-70 lg:pl-4 lg:text-lg">
              we provide drone surveying, imaging and lending.
            </p>
          </div>
        </div>
        <img
          alt=""
          className="absolute top-0 right-0 h-screen xl:w-1/2"
          src="./assets/images/droneSpraying.jpg"
        />
      </section>

      <section className="flex flex-col items-center gap-24 mt-8 xl:mt-24 bg-primary">
        <div>
          <h1 className="text-4xl font-semibold">Our Services</h1>
        </div>
        <div className="container flex flex-col items-center gap-14">
          {AppConfig.services.map((service, i) => (
            <div className="px-4 " key={service.title}>
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
      <section className="flex items-center justify-center mt-8 bg-black xl:mt-24">
        <div className="flex flex-wrap justify-center gap-16 p-10 xl:p-24">
          <div className="flex flex-col max-w-xl gap-8">
            <h1 className="text-4xl font-semibold text-primary">About Us</h1>
            <p className=" text-primary">
              We utilise a wide range of industry specific UAV platforms,
              cameras and sensors which are operated by a team of highly skilled
              IAA certified drone pilots to survey and map the area required.
            </p>
            <button className="bg-blue-600 btn max-w-max">Meet the team</button>
          </div>
          <div className="max-w-xl">
            <img
              className="w-full shadow-2xl rounded-xl"
              src="./assets/images/farmer.jpg"
              alt=""
              width="384"
              height="512"
            />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
