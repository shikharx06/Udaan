import { TeamMemberCard } from '../components/teamCard';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <Main
    meta={
      <Meta
        title="Udaan | Meet the team"
        description="Meet the team behind Udaan"
      />
    }
  >
    {/* <section className="flex min-w-full pt-20 bg-primary ">
      <div className="flex flex-col mx-12 gap-11">
        <div>
          <h1 className="text-xl font-semibold">RESOURCES AND QUALITY</h1>
          <p className="mt-2 text-base">
            The data collected from our drones is collected by IAA certified
            pilots and processed in-house using specialist software and
            techniques by a large team of photogrammetrists, geomatics
            surveyors, BIM modellers, CAD technicians and media editors.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            IAA CERTIFICATION AND SAFETY
          </h1>
          <p className="mt-2 text-base ">
            Our IAA certified flight team have developed industry specific
            operational procedures and risk assessments which are approved by
            the IAA and have expert knowledge in the SOP flight application
            process. This combined with our comprehensive drone specific
            insurance cover ensures your project is carried out safely and
            efficiently and in compliance with the Small Unmanned Aircraft
            (Drones) and Rockets Order S.I. 563 of 2015.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">INSURANCES</h1>
          <p className="mt-2 text-base">
            We have worked with our insurance providers to develop comprehensive
            industry specific policies and are currently one of very few
            operators that can provide PL, EL and PI to the high levels often
            required in the surveying and inspection sectors.
          </p>
        </div>
      </div>
    </section> */}

    <section className="flex flex-col items-center gap-12 mt-24 xl:gap-24 bg-primary">
      <div className="text-center">
        <h1 className="mx-12 text-3xl font-semibold">Meet our Amazing Team</h1>
      </div>
      <div className="flex flex-col gap-8 text-center xl:text-left">
        <h1 className="text-2xl uppercase">Company directors</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
          {AppConfig.team.directors.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              qualification={member.qualification}
              description={member.description}
              designation={member.designation}
              src=""
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 text-center xl:text-left">
        <h1 className="text-2xl uppercase">Tech Team</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
          {AppConfig.team.tech.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              qualification={member.qualification}
              description={member.description}
              designation={member.designation}
              src=""
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 text-center xl:text-left">
        <h1 className="text-2xl uppercase">Agri Tech Team</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
          {AppConfig.team.agriTech.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              qualification={member.qualification}
              description={member.description}
              designation={member.designation}
              src=""
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 text-center xl:text-left">
        <h1 className="text-2xl uppercase">Financial Advisors</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
          {AppConfig.team.financialAdvisors.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              qualification={member.qualification}
              description={member.description}
              designation={member.designation}
              src=""
            />
          ))}
        </div>
      </div>
    </section>
  </Main>
);

export default About;
