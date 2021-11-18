import React from 'react'

import Card from '../components/card'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'
import { AppConfig } from '../utils/AppConfig'
// const videoUrl = require('../../public/assets/video/video.mp4');

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title='Udaan'
          description='Revolutionizing agritech space using accessible drones.'
        />
      }
    >
      {/* Hero */}
      <section className='flex h-screen min-w-full overflow-hidden bg-primary '>
        <div className='z-10 flex flex-col justify-around mx-auto text-center xl:mx-0 lg:w-1/2 xl:text-left'>
          <div className='flex flex-col flex-wrap gap-4 p-4 bg-primary xl:mx-8 bg-opacity-80 xl:bg-transparent lg:mb-16'>
            <h1 className='text-3xl font-semibold text-primary-content lg:text-4xl lg:font-bold'>
              Revolutionizing agriculture using cutting edge drones.
            </h1>
            <div className='xl:pr-28'>
              <p className='text-primary-content opacity-90 lg:opacity-70 lg:text-lg'>
                To survey and map the required region, we use a variety of
                industry-specific UAV platforms, cameras, and sensors, which are
                handled by a team of highly competent IAA certified drone
                pilots.
              </p>
            </div>
          </div>
        </div>
        <div
          className='absolute top-0 right-0 w-full h-screen bg-center bg-no-repeat bg-cover xl:w-1/2'
          style={{
            backgroundImage: "url('./assets/images/udaanDroneHeroImage.jpg')"
          }}
        >
          {/* <img
            alt=""
            className=""
            src="./assets/images/udaanDroneHeroImage.jpg"
          /> */}
        </div>
      </section>

      <section className='flex flex-col items-center gap-24 mt-8 xl:mt-24 bg-primary'>
        <div>
          <h1 className='text-4xl font-semibold'>Our Services</h1>
        </div>
        <div className='container flex flex-col items-center gap-14'>
          {AppConfig.services.map((service, i) => (
            <div className='px-12' key={service.title}>
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
      <section className='flex flex-col items-center gap-24 mt-8 xl:mt-24 bg-primary'>
        <div>
          <h1 className='text-4xl font-semibold'>Recent Events</h1>
        </div>
      </section>
      <section className='flex items-center justify-center mt-8 bg-black xl:mt-24'>
        <div className='flex flex-wrap justify-center gap-16 p-10 xl:p-24'>
          <div className='flex flex-col max-w-xl gap-8'>
            <h1 className='text-4xl font-semibold text-primary'>In the news</h1>
            <p className=' text-primary'>
              We utilise a wide range of industry specific UAV platforms,
              cameras and sensors which are operated by a team of highly skilled
              IAA certified drone pilots to survey and map the area required.
            </p>
            <button className='bg-blue-600 btn max-w-max'>Meet the team</button>
          </div>
          <div className='max-w-xl'>
            <div className=' shadow-2xl relative pb-[56.25%] w-60 sm:w-64 md:w-[32rem]'>
              <iframe
                width='100%'
                className='absolute top-0 bottom-0 rounded-xl'
                height='100%'
                src='https://www.youtube.com/embed/LNzNVI69cQc'
                title='S AGRI UDAAN camera drone inauguration by Parbatbhai Patel'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}

export default Index
