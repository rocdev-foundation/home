import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import { htmlReplacements, Anchor, NavAnchor } from "../components";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RocDev</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text"
          rel="stylesheet"
        />
      </Head>
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/*
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                */}
                <svg
                  className="block h-6 w-6"
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
                  className="hidden h-6 w-6"
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
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link href="/code-of-conduct">
                    <NavAnchor>Code of Conduct</NavAnchor>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-0 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <NavAnchor
                    target="_blank"
                    rel="external nofollow noopener"
                    href="https://www.meetup.com/RocDev"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Meetup
                  </NavAnchor>
                  <NavAnchor
                    target="_blank"
                    rel="external nofollow noopener"
                    href="https://rocdev.slack.com"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Slack
                  </NavAnchor>
                  <NavAnchor
                    target="_blank"
                    rel="external nofollow noopener"
                    href="https://github.com/rocdev-foundation/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>

      <div className="font-sans flex flex-col min-h-screen">
        <MDXProvider components={htmlReplacements}>
          <main className="flex-1 w-5/6 md:w-3/5 xl:w-2/5 mx-auto">
            <Component {...pageProps} />
          </main>
        </MDXProvider>
        <footer className="mt-8 border-t border-gray-300 p-8 text-center">
          <div className="w-2/5 lg:w-1/5 mx-auto">
            This work is licensed under a{" "}
            <Anchor href="https://creativecommons.org/licenses/by-nc/4.0/legalcode">
              Creative Commons Attribution-NonCommercial 4.0 International
              Public License
            </Anchor>
            .
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
