import React, { useState } from 'react';
import { Link } from '../../../lib/utilities/data';
import MobileNav from '../mobile/MobileNav';
import NavLinks from './NavLinks';

function NavBar() {
  return (
    <>
      <nav className="hidden col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 lg:flex flex-col items-start justify-between">
        <NavLinks />
        <div className="xl:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
          <h1 className="text-xl w-full font-medium">
            Grow Your <br /> Saving Now!
          </h1>
          <p> Pick an investment strategy that reflexts your goals </p>
          <button className=" w-full py-2 px-3 bg-black text-white">
            Become a Pro
          </button>
        </div>
      </nav>
      {/* Mobile navigation */}
      <MobileNav/>
    </>
  );
}
export default NavBar;
