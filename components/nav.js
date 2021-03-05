import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Anchor from "./anchor";

const NavAnchor = (props) => (
  <a
    {...props}
    className={`${
      props.className || ""
    } cursor-pointer text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
  />
);

const Nav = (props) => {
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={`${navExpanded ? "true" : "false"}`}
              onClick={() => {
                setNavExpanded(!navExpanded);
              }}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/*
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                */}
              <svg
                className={`${navExpanded ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/*
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                */}
              <svg
                className={`${navExpanded ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Anchor className="block h-10 w-20 relative">
                  <Image src="/rocdev.svg" alt="Home" layout="fill" />
                </Anchor>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/code-of-conduct">
                  <NavAnchor>Code of Conduct</NavAnchor>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-0 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavAnchor
                  target="_blank"
                  rel="external nofollow noopener"
                  href="https://www.meetup.com/RocDev"
                >
                  Meetup
                </NavAnchor>
                <NavAnchor
                  target="_blank"
                  rel="external nofollow noopener"
                  href="http://www.youtube.com/channel/UC-U6kxmRTZXr6RDsXvwGeGw"
                >
                  YouTube
                </NavAnchor>
                <NavAnchor
                  target="_blank"
                  rel="external nofollow noopener"
                  href="https://rocdev.slack.com"
                >
                  Slack
                </NavAnchor>
                <NavAnchor
                  target="_blank"
                  rel="external nofollow noopener"
                  href="https://github.com/rocdev-foundation/"
                >
                  GitHub
                </NavAnchor>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
          Mobile menu, toggle classes based on menu state.

          Menu open: "block", Menu closed: "hidden"
        */}
      <div className={`${navExpanded ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <NavAnchor className="block">Home</NavAnchor>
          </Link>
          <Link href="/code-of-conduct">
            <NavAnchor className="block">Code of Conduct</NavAnchor>
          </Link>
          <NavAnchor
            target="_blank"
            rel="external nofollow noopener"
            href="https://www.meetup.com/RocDev"
            className="block"
          >
            Meetup
          </NavAnchor>
          <NavAnchor
            target="_blank"
            rel="external nofollow noopener"
            href="https://rocdev.slack.com"
            className="block"
          >
            Slack
          </NavAnchor>
          <NavAnchor
            target="_blank"
            rel="external nofollow noopener"
            href="https://github.com/rocdev-foundation/"
            className="block"
          >
            GitHub
          </NavAnchor>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
