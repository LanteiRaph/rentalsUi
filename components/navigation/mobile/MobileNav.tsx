import { useState } from 'react';
import { navLinks } from '../../../lib/utilities/data';

export interface IProps {
  name?: string;
}

const BaseTemplate = ({ name }: IProps) => {
  const [active, setActive] = useState<number>(0);
  const translate = 0;
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 border-t-2 border-royal/20 backdrop-blur-lg">
      <ul className="flex relative justify-between">
        {navLinks.map((link) => {
          return (
            <a
              key={link.name}
              href="#"
              className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="tab block text-xs">Home</span>
            </a>
          );
        })}

        {/* <span
            className={`bg-rose-600 duration-500 ${navLinks[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span> */}
        {/* {navLinks.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <menu.iconName/>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default BaseTemplate;
