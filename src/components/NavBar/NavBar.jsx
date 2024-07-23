import React from 'react'
import './NavBar.css'
import * as Icon from 'react-bootstrap-icons';


const NavBar = () => {
  return (
    <nav >
      <div className=" flex flex-wrap items-center justify-between p-5 lg:p-0">
        <a href="#" className=" ml:2 sm:ml-12 flex items-center space-x-3 rtl:space-x-reverse">
          <div className="logo flex place-items-center ">
            <Icon.CarFrontFill className='text-lg sm:text-3xl sm:mr-4 mr-2 text-red-600' />
            <h2 className='text-lg sm:text-3xl font-bold text-red-600'>CarServ</h2>
          </div>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-gray-400 dark:hover:bg-red-100" aria-controls="navbar-multi-level" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col place-items-center font-medium p-4 lg:p-0 mt-4  rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase">Services</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3  lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0 lg:w-auto  lg:dark:hover:text-red-600 dark:focus:text-white dark:hover:bg-gray-700 lg:dark:hover:bg-transparent font-bold text-sm uppercase">Pages <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="doubleDropdown" className=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="  py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Overview</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase">Contact</a>
            </li>

            <li>
              <div className='flex place-items-center bg-red-600 w-56 p-10 text-white font-bold h-20 flex  justify-center text-base uppercase'>
                Get A Quote
                <Icon.ArrowRight className='ml-4' />
              </div>
            </li>
          </ul>

        </div>

      </div>

    </nav>
  )
}

export default NavBar
