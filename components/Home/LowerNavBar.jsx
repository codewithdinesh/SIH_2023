// Header.js

"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowBarDown, IconArrowDown, IconChevronCompactDown, IconChevronDown } from '@tabler/icons-react';
import { IconChevronUp } from '@tabler/icons-react';


const LowerNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonVariants = {
    navbutton: { rotate: 0 },
    navclose: { rotate: 90 },
  };


  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(index); // Open the dropdown
    }
  };


  const navbarLinks = [
    {
      label: 'Legal Aid',
      link: '/#',

      // Dropdown options
      links: [
        {
          label: 'Bare Act',
          link: '/acts',
        },
        {
          label: 'Articles',
          link: '/articles',
        },
        {
          label: 'Indian Constitution',
          link: '/constitution',
        },
      ],
    },

    {
      label: 'Ai-help',
      link: '/#',

      // Dropdown options
      links: [
        {
          label: 'QNA',
          link: '/qna',
        },
        {
          label: 'Summarisation',
          link: '/summarisation',
        },
        {
          label: 'Document Chat',
          link: '/doc-chat',
        },

        {
          label: 'Threats',
          link: '/threats',
        },
      ],
    },
    {
      label: 'Hire Lawyer',
      link: '/hire-lawyer',
    },
  ];

  return (
    <header className="bg-background shadow-md text-text ">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">


        <nav className="lg:flex items-center hidden"
          onMouseLeave={(e) => {
            e.preventDefault();
            toggleDropdown();
          }}
        >

          <ul className="flex space-x-4 align-middle items-center font-semibold ">

            {/* Navigation Links */}
            <ul className="space-x-4 hidden md:flex">
              {navbarLinks.map((link, index) => (

                <li key={link.label} className="relative group hover:bg-blue-100 p-3 "
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    toggleDropdown(index);
                  }}

                >

                  {link.links ?
                    <Link
                      href={link.link}
                      className="text-gray-600   hover:text-blue-800 w-full h-full p-3 transition-all "

                    >
                      <span className=' inline-block space-x-1'>
                        {link.label}
                      </span>

                      {
                        openDropdown === index ?
                          <IconChevronUp className='inline-block h-full' />
                          :
                          <IconChevronDown className='inline-block h-full' />

                      }
                    </Link>
                    :
                    <Link
                      href={link.link}
                      className="text-gray-600 hover:text-blue-600 w-full h-full p-3"
                    >
                      <span>
                        {link.label}
                      </span>

                    </Link>
                  }

                  {link.links && openDropdown === index && (
                    <ul className="absolute left-0 mt-2 space-y-2 bg-white">

                      {link.links.map((dropdownLink) => (

                        <Link
                          href={dropdownLink.link}
                          key={dropdownLink.label}
                          className="text-gray-800 hover:text-blue-500 w-full h-full"
                        >
                          <li className='relative group hover:bg-blue-100 p-3 w-full h-full'>
                            {dropdownLink.label}
                          </li>
                        </Link>
                      ))}

                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* <li>
              <Link href="/about">
                <p className="text-gray-600 hover:text-blue-600  ">About</p>
              </Link>
            </li> */}
            <li>
              <Link href="/login" >
                <p className="text-white bg-blue-600 block  hover:bg-blue-700 py-2 px-4 rounded-md font-medium transition-colors duration-300">
                  Login
                </p>
              </Link>
            </li>
          </ul>

        </nav>


        <button
          className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <motion.svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={isMenuOpen ? 'navclose' : 'navbutton'}
            animate={isMenuOpen ? 'navclose' : 'navbutton'}
            variants={buttonVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">

              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>

          </motion.svg>
        </button>
      </div>


      {isMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-3 border-t z-10 ">
          <ul className="flex z-10 flex-col space-y-2 items-center min-w-full text-center font-semibold"

            onTouchEnd={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >

            {navbarLinks.map((link, index) => (

              <li key={link.label} onTouchStart={(e) => {
                e.preventDefault();
                toggleDropdown(index);
              }} className="relative group z-10 hover:bg-blue-100 p-3 w-full h-full "

              >

                {link.links ?
                  <Link
                    href={link.link}
                    className="text-gray-600 z-10 hover:text-blue-800 w-full h-full p-3 transition-all "

                  >
                    <span className=' inline-block space-x-1'>
                      {link.label}
                    </span>

                    {
                      openDropdown === index ?
                        <IconChevronUp className='inline-block h-full' />
                        :
                        <IconChevronDown className='inline-block h-full' />

                    }
                  </Link>
                  :
                  <Link
                    href={link.link}
                    className="text-gray-600 hover:text-blue-600 w-full h-full p-3"
                  >
                    <span>
                      {link.label}
                    </span>

                  </Link>
                }

                {link.links && openDropdown === index && (
                  <ul className="absolute left-0 mt-0 z-10  bg-red-700 w-full ">

                    {link.links.map((dropdownLink) => (

                      <Link
                        href={dropdownLink.link}
                        key={dropdownLink.label}
                        className="text-gray-800 hover:text-blue-500 w-full h-full"
                      >
                        <li className='relative group hover:bg-blue-100 p-3 w-full h-full'>
                          {dropdownLink.label}
                        </li>
                      </Link>
                    ))}

                  </ul>
                )}
              </li>
            ))}
            <li className='w-full mx-3'>
              <Link href="/about">
                <p className="text-gray-600 hover:text-blue-600 min-w-full">About</p>
              </Link>
            </li>

            <li className='w-full mx-3'>
              <Link href="/login">
                <p className="  text-white w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md font-medium transition-colors duration-300">
                  Login
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default LowerNavBar;