import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';
import CloseIcon from './icons/closeIcon';
import MenuIcon from './icons/menuIcon';

function Navbar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-light-bg dark:bg-dark-bg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-primary dark:text-dark-primary text-[18px] font-bold cursor-pointer flex">
            Jeffery&nbsp;
            <span className="sm:block hidden">| Grafe</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex items-start flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-primary dark:text-dark-primary' : 'text-tertiary dark:text-dark-tertiary'
              } hover:text-secondary dark:hover:text-dark-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            {toggle ? (
              <CloseIcon className="text-primary dark:text-dark-secondary w-[28px] h-[28px] object-contain" />
            ) : (
              <MenuIcon className="text-primary dark:text-dark-secondary w-[28px] h-[28px] object-contain" />
            )}
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-light5 dark:bg-dark-tetradic absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-primary dark:border-dark-primary`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-primary dark:text-dark-primary' : 'text-tertiary dark:text-dark-tertiary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;