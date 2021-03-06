import React from 'react';

// import Image
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const navItems = [
    {
      name: 'home',
      disabled: true,
      href: '/',
    },
    {
      name: 'events',
      disabled: true,
      href: '/events',
    },
    {
      name: 'about us',
      disabled: true,
      href: '/aboutus',
    },
    {
      name: 'contact us',
      disabled: true,
      href: '/contact',
    },
  ];

  const navAnimationConfig = {
    hidden: { x: -10000 },
    visible: {
      x: 0,
      transition: {
        duration: 0.325,
      },
    },
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 z-40 w-full bg-scroll navbar bg-primary bg-opacity-80 backdrop-blur text-primary-content">
        <div className="flex-1 px-2 mx-2">
          <div className="w-16">
            <img src="/assets/images/udaanLogo.svg" alt="udaan" />
          </div>
          <span className="font-bold text-md md:text-2xl font-brand">
            S. Agri Udaan
          </span>
        </div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-stretch">
            {navItems.map((navItem) => (
              <Link key={navItem.name} href={navItem.href} passHref>
                <a
                  className={`${
                    router.pathname === navItem.href ? 'text-accent' : ''
                  } btn btn-ghost`}
                >
                  {navItem.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-none lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        variants={navAnimationConfig}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="fixed top-0 z-50 flex flex-col w-2/3 h-screen pt-10 bg-primary "
      >
        {navItems.map((navItem) => (
          <Link key={navItem.name} href={navItem.href} passHref>
            <a
              className={`${
                router.pathname === navItem.href ? 'text-accent' : ''
              } btn btn-ghost`}
            >
              {navItem.name}
            </a>
          </Link>
        ))}
      </motion.div>
      <div
        className={`${
          !isOpen ? 'hidden' : ''
        }  fixed top-0 z-40 w-screen h-screen bg-black opacity-80`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </>
  );
};

export default NavBar;
