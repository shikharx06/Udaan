import React from 'react';

import { motion } from 'framer-motion';

import ActiveLink from './activeLink';

const NavBar = () => {
  const navItems = [
    {
      name: 'home',
      disabled: true,
      href: '/',
    },
    {
      name: 'blogs',
      disabled: true,
      href: '/blogs',
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
        duration: 0.3,
      },
    },
  };

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="fixed top-0 z-40 w-full navbar bg-primary text-primary-content">
        <div className="flex-1 px-2 mx-2">
          <span className="text-3xl font-bold font-brand">Udaan</span>
        </div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-stretch">
            {navItems.map((navItem) => (
              <ActiveLink
                key={navItem.name}
                activeClassName="text-accent"
                href={navItem.href}
                passHref
              >
                <a className="btn btn-ghost">{navItem.name}</a>
              </ActiveLink>
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
        className="fixed top-0 z-50 flex flex-col w-2/3 h-screen bg-primary "
      >
        {navItems.map((navItem) => (
          <ActiveLink
            key={navItem.name}
            activeClassName="text-accent"
            href={navItem.href}
            passHref
          >
            <a className="btn btn-ghost">{navItem.name}</a>
          </ActiveLink>
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
