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
        qualification: 'MBA, MA( ENG), BSC(MATHS)',
        experience: '30 YEARS OF EXPERIENCE IN SEED INDUSTRY',
        designation: 'EXECUTIVE DIRECTOR',
        description: 'NGO - AAKANSHA CHARITABLE TRUST',
      },
      {
        name: 'DR.SAINIDHI AGNIHOTRI',
        qualification: 'MBBS',
        experience: '',
        designation: 'DIRECTOR',
        description: 'Covid Warrior | Co Founder Dr.Buddies',
      },
      {
        name: 'NISHITH PATEL',
        qualification: 'BUSINESS ADMIN. HOSPITALITY MANAGEMENT',
        experience: '',
        designation: 'DIRECTOR',
        description: 'Covid Warrior | Co Founder Dr.Buddies',
      },
      {
        name: 'ARCHANA THAKUR',
        qualification: 'MA ( SOCIOLOGY) BSC SCIENCE',
        experience: '15 YEARS',
        designation: 'DIRECTOR',
        description: 'TRAVELS AND EVENT MANAGEMENT',
      },
    ],

    tech: [
      {
        name: 'SHUBHAM AGNIHOTRI',
        qualification: 'B.Tech',
        experience: '2.5 years',
        designation: 'TECH. ADVISER',
        description: 'Data Scientist',
      },
      {
        name: 'AVL SAI GANESH',
        qualification: 'B.E (ELECTRONICS & COMM)',
        experience: '1 Year',
        designation: 'TECH. ADVISER',
        description: 'Data Analyst',
      },
      {
        name: 'PRACHI TRIPATHI',
        qualification: 'B.Tech (ELECTRONICS & COMM)',
        experience: '1 Year',
        designation: 'TECH. ADVISER',
        description:
          'Software developer, Strategy & Consulting - Business Process Management (Utilities Industry)',
      },
      {
        name: 'KARTIK SINGH',
        qualification: 'B.TECH (ELECTRONICS & COMM)',
        experience: '2.5 years',
        designation: 'TECH. ADVISER',
        description: '',
      },
    ],

    agriTech: [
      {
        name: 'DUSHYANT V. SHARMA ',
        qualification: 'MSC (micro biology and environmental bio technology)',
        experience: '',
        designation: 'RESEARCH ADV.',
        description: 'ORGANIC INSPECTOR | NGO - YOUNG GENERATION',
      },
      {
        name: 'KESHAV CHOUHAN ',
        qualification: 'MSC (ENTOMOLGY)',
        experience: '',
        designation: 'RESEARCH ADV.',
        description: '',
      },
      {
        name: 'DIGVIJAY SINGH SIROHI',
        qualification: 'MSC (HORTICULTURE)',
        experience: '',
        designation: 'RESEARCH ADV.',
        description: 'MANAGING DIRECTOR @ MAXS Plant science Pvt.LTD.',
      },
    ],

    financialAdvisors: [
      {
        name: 'ANIL MEHRA',
        qualification: 'FCA | B.Com Hons.',
        experience: '',
        designation: '',
        description:
          'More than 3 decades of work Experience Across Various Industries including many of the Large listed Corporates of India',
      },
      {
        name: 'PRATIK BULANI ',
        qualification: 'C.A.',
        experience: '',
        designation: 'DISA (Systemt Auditor), FAFD (Forensic Auditor)',
        description: '',
      },
      {
        name: 'CHIRAG CHOKSI',
        qualification: 'C.A.',
        experience: '',
        designation: '',
        description: '',
      },
    ],
  },
};
