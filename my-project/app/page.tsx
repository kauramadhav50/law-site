"use client";

import Content from "./components/content.tsx";
import Practice from "./components/Practice.tsx";
import Butun from "./components/button.tsx";
import Contact from "./components/contact.tsx";

import Image from "next/image";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";


export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        // color="White"
        className="p-1 font-normal nav-decoration"
      >
        <a href="#home" className="flex items-center visited active">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal nav-decoration"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal nav-decoration"
      >
        <a href="#PracticeArea" className="flex items-center">
          Practice Area
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal nav-decoration"
      >
        <a href="#" className="flex items-center ">
          Cases Study
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal nav-decoration"
      >
        <a href="#contact" className="flex items-center hover nav-decoration">
          Contact
        </a>
      </Typography>
    </ul>
  );
  return (
    <>
      <div className="bg-size bg-indigo-900 bg-center bg-cover">
        <main className="flex min-h-screen flex-col items-center justify-between p-10" id="home">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
            <Navbar className="justify-between mx-auto bg-indigo-800 text-white sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
              <div className="flex items-center justify-between text-white-900">
                <Typography
                  as="a"
                  href="#"
                  className="mr-4 cursor-pointer justify-between w-[45%] py-1.5 font-medium"
                >
                  Material Tailwind
                </Typography>
                <div className="flex justify-between items-center gap-4 w-[92%]">
                  <div className="mr-4 hidden lg:block">{navList}</div>
                  <div className="flex items-center gap-x-1">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="hidden lg:inline-block appbtn"
                    >
                      <span>Book Appointment</span>
                    </Button>

                  </div>
                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
              </div>
              <MobileNav open={openNav}>
                {navList}

              </MobileNav>
            </Navbar>
            <div>
              <Content />
            </div>
          </div>
        </main>
      </div>
      <div id="PracticeArea">
        <Practice />
        <div className="flex w-max gap-4">

        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
