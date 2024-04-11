import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/png;base64,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"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Toolkit TS
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Basket
              </a>
            </li>
            <li>
              <Link
                to="/admin"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
