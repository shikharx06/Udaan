/* eslint-disable react/no-unescaped-entities */
export const AppConfig = {
  site_name: 'Udaan',
  title: 'Udaan',
  description: 'Drone surveying, imaging and redefining agriculture in India.',
  locale: 'en',
  services: [
    {
      title: 'plotting',
      description: (
        <span>
          It is beneficial to plot the region so that you can cover the entire
          area and not miss any spots. Drone surveying and mapping allow you to
          <span className="font-semibold uppercase">
            "see the big picture"{' '}
          </span>{' '}
          and get a bird's eye view of your property. The most important purpose
          of a drone is to{' '}
          <span className="font-semibold uppercase">SAVE TIME, </span>
          so just map your farm once and{' '}
          <span className="font-semibold uppercase">
            get it sprayed everytime.
          </span>
        </span>
      ),
      src: './assets/images/plotjpg.jpg',
    },
    {
      title: 'spraying',
      description: (
        <span>
          Farmers can employ drones to apply pesticides with{' '}
          <span className="font-semibold uppercase">
            greater precision than conventional boom sprayers
          </span>
          , tractors, or manual spraying. Drones are also ideal for accessing
          areas of a field that are inaccessible due to weather or topography.
          In such cases, they are just what we require.
        </span>
      ),
      src: './assets/images/sparying.jpg',
    },
    {
      title: 'crop health monitoring',
      description: (
        <span>
          Drones can detect which portions of a field are receiving too little
          or too much water using sensors. Additionally, once the crop is
          seeded,{' '}
          <span className="font-semibold uppercase">
            drones enable exact measurements of the crop's health, heat, and
            density
          </span>
          , allowing for watering modifications as the plants mature.
        </span>
      ),
      src: './assets/images/cropHealthMonitor.png',
    },
    {
      title: 'area surveillance',
      description: (
        <span>
          Our drones are controlled manually using hand-held devices, and they
          have a video camera attached to them for surveillance as well as for
          the operator to watch through to control the drone. Drones will be
          used to survey the property and{' '}
          <span className="font-semibold uppercase">
            keep track on animal population nearby.{' '}
          </span>
        </span>
      ),
      src: './assets/images/plot.jpg',
    },
  ],
  team: {
    directors: [
      {
        name: 'BALENDU AGNIHOTRI',
        qualification:
          'Masters of Business Administration, Master of Arts(English), Bachelor of Science(Maths)',
        experience: '30 Years of Experience in Agriculture ',
        designation: 'Executive Director',
        description: 'NGO - AAKANSHA CHARITABLE TRUST',
        imageSrc: '/assets/images/teamPhotos/balendu.jpg',
      },
      {
        name: 'Shubham Agnihotri',
        qualification:
          'Bachelors of Technology in Computer Science and Engineering',
        experience: '2.5 Years of Experience as a Data Scientist',
        designation: 'CEO & Founder',
        description: 'Covid Warrior | Co Founder Dr.Buddies',
        imageSrc: '/assets/images/teamPhotos/shubham.jpg',
      },
      {
        name: 'Nishith Patel',
        qualification: 'Business Administration and Hospitality Management',
        experience: '15 Years of Experience in Business & People Management',
        designation: 'Director',
        description: 'Covid Warrior | Co Founder Dr.Buddies',
        imageSrc: '/assets/images/teamPhotos/nishith.png',
      },
    ],

    tech: [
      {
        name: 'Prachi Tripathi',
        qualification:
          'Bachelors of Technology in Electronics and Communication',
        experience: '1.5 Year of Experience as Software Developer',
        designation: 'Technical Advisor',
        description: 'Data Scientist',
        imageSrc: '/assets/images/teamPhotos/prachi.jpg',
      },
      {
        name: 'Avl Sai Ganesh',
        qualification:
          'Bachelors of Technology in Electronics and Communication',
        experience: '1 Year of Experience as Data Analyst',
        designation: 'Technical Advisor',
        description: 'Data Analyst',
        imageSrc: '/assets/images/teamPhotos/ganesh.jpg',
      },
    ],

    agriTech: [
      {
        name: 'Keshav Chouhan',
        qualification: 'Masters of Science in Entomologgy',
        experience: '1 Year',
        designation: 'Agriculture Research Advisory',
        description:
          'Software developer, Strategy & Consulting - Business Process Management (Utilities Industry)',
        imageSrc: '/assets/images/teamPhotos/balendu.jpg',
      },
      {
        name: 'Digvijay Singh Sirohi',
        qualification: 'Masters of Science in Horticulture',
        experience: '2.5 years',
        designation: 'Agriculture Research Advisory',
        description: '',
        imageSrc: '/assets/images/teamPhotos/kartik.jpg',
      },
    ],

    financialAdvisors: [
      {
        name: 'Kartik Singh',
        qualification:
          'Bachelors of Technology in Electronics and Communication',
        experience:
          '2.5 Years of Experience in Strategy & Consulting - Business Process Management',
        designation: 'Business Advisory',
        description: 'TRAVELS AND EVENT MANAGEMENT',
        imageSrc: '/assets/images/teamPhotos/kartik.jpg',
      },
      {
        name: 'Anil Mehra',
        qualification: 'Fellow Chartered Accountant (F.C.A.)',
        experience:
          'More than 3 decades of work Experience Across Various Industries including many of the Large listed Corporates of India',
        designation: 'Financial Advisory',
        description: 'ORGANIC INSPECTOR | NGO - YOUNG GENERATION',
        imageSrc: '/assets/images/teamPhotos/anilMehra.jpg',
      },
      {
        name: 'Pratik Bulani ',
        qualification:
          'Chartered Accountant (C.A.), Diploma in Information System Audit (DISA) & Forensic Audits and Fraud Detection(FAFD)',
        experience: '',
        designation: 'Financial Advisory',
        description: '',
        imageSrc: '/assets/images/teamPhotos/pratik.jpg',
      },
      {
        name: 'Chirag Choksi',
        qualification: 'Chartered Accountant (C.A.)',
        experience: '',
        designation: 'Financial Advisory',
        description: 'MANAGING DIRECTOR @ MAXS Plant science Pvt.LTD.',
        imageSrc: '/assets/images/teamPhotos/balendu.jpg',
      },
    ],
  },
};
