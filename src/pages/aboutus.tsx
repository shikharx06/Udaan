import React from 'react';

import { motion } from 'framer-motion';

import { TeamMemberCard } from '../components/teamCard';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Main
      meta={
        <Meta
          title="Udaan | Meet the team"
          description="Meet the team behind Udaan"
        />
      }
    >
      <section className="flex justify-center mx-6 mt-24 mb-32 md:mx-12 md:mt-32">
        <div className="flex flex-col max-w-6xl gap-12">
          <div className="text-center">
            <h1 className="mx-12 text-3xl font-semibold">
              Meet our Amazing Team
            </h1>
          </div>
          <div className="flex flex-col gap-8 text-center xl:text-left">
            <h1 className="text-2xl uppercase">Company directors</h1>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-12 xl:grid-cols-2 "
            >
              {AppConfig.team.directors.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  qualification={member.qualification}
                  description={member.description}
                  designation={member.designation}
                  experience={member.experience}
                  imageSrc={member.imageSrc}
                />
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col gap-8 text-center xl:text-left">
            <h1 className="text-2xl uppercase">Tech Team</h1>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-12 xl:grid-cols-2 "
            >
              {AppConfig.team.tech.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  qualification={member.qualification}
                  description={member.description}
                  designation={member.designation}
                  experience={member.experience}
                  imageSrc={member.imageSrc}
                />
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col gap-8 text-center xl:text-left">
            <h1 className="text-2xl uppercase">Agri Tech Team</h1>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-12 xl:grid-cols-2 "
            >
              {AppConfig.team.agriTech.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  qualification={member.qualification}
                  description={member.description}
                  designation={member.designation}
                  experience={member.experience}
                  imageSrc={member.imageSrc}
                />
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col gap-8 text-center xl:text-left">
            <h1 className="text-2xl uppercase">Financial Advisors</h1>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-12 xl:grid-cols-2 "
            >
              {AppConfig.team.financialAdvisors.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  qualification={member.qualification}
                  description={member.description}
                  designation={member.designation}
                  experience={member.experience}
                  imageSrc={member.imageSrc}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default About;
