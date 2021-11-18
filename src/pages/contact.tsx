import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import React from "react";
const Contact = () => (
  <Main
    meta={
      <Meta
        title="Udaan | Contact Us"
        description="Contact Udaan for Assistance"
      />
    }
  >
    <section className="flex flex-wrap justify-center h-full gap-16 pb-6 mx-8 my-auto overflow-hidden lg:h-screen lg:mx-16 pt-28 bg-primary">
      <div className="flex flex-col flex-wrap gap-12">
        <div>
          <h1 className="text-2xl font-semibold lg:text-3xl text-primary-content">
            Get in touch with us.
          </h1>
          <p>
            You need more information? Check what other persons are saying about
            our product.
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <MdOutlineAddLocationAlt className="text-3xl text-primary-content" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary-content">
              Find us at the office
            </h2>
            <p>B 505, Narnarayan Complex, Navrangpura , Ahmedabad</p>
          </div>
        </div>

        <div className="flex gap-8">
          <div>
            <IoMdCall className="text-3xl text-primary-content" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary-content">
              Give us a ring
            </h2>
            <p>B 505, Narnarayan Complex, Navrangpura , Ahmedabad</p>
          </div>
        </div>
      </div>
      <div className=" shadow-2xl h-60 relative pb-[26.25%] w-60 sm:w-64 md:w-[32rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d917.9162180392711!2d72.5622989!3d23.036074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f48547dc77%3A0xee8f25aa7aeeb577!2sNarnarayan%20Complex%2C%20Navrangpura%20Rd%2C%20Swastik%20Society%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1637181861885!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="absolute top-0 bottom-0 rounded-xl"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  </Main>
);

export default Contact;
