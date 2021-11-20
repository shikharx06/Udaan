import React from 'react';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { EventConfig } from '../../utils/EventConfig';

const InaugurationEvent = () => (
  <Main
    meta={
      <Meta
        title="Udaan | Inauguration"
        description="S Agri Udaan Inauguration"
      />
    }
  >
    <div
      style={{ backgroundImage: "url('/assets/images/event1/a.jpg')" }}
      className="w-full flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat h-[54rem]"
    >
      <div className="p-2 px-4 bg-gray-100 rounded-lg bg-opacity-60 ">
        <h1 className="text-3xl font-semibold text-black capitalize md:text-6xl ">
          {EventConfig.event1.title}
        </h1>
      </div>
    </div>

    <section className="flex justify-center mx-6 mt-24 mb-32 md:mx-12 md:mt-32">
      <div className="container flex flex-col items-center gap-6">
        <h1 className="text-3xl capitalize md:text-5xl">
          {EventConfig.event1.title}
        </h1>
        <div className="flex flex-col items-start gap-12">
          {EventConfig.event1.description}
        </div>
      </div>
    </section>
  </Main>
);

export default InaugurationEvent;
