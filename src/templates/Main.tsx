import { ReactNode } from 'react';

import NavBar from '../components/navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

/* HOC wrapper page template */
const Main = (props: IMainProps) => (
  <div className="w-full antialiased text-gray-700">
    {props.meta}
    <header>
      <NavBar />
    </header>
    <body>{props.children}</body>
    <footer className="text-white bg-secondary-focus">
      <div className="py-8 text-sm text-center border-t border-gray-300">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </footer>
  </div>
);

export { Main };
