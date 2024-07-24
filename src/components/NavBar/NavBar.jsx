import React, { useRef } from 'react'
import './NavBar.css'
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const NavBar = () => {
    const dropdownRef = useRef(null);
    let toggle = false;

    
  function displayList(){
    if(toggle){
      dropdownRef.current.className='hidden w-full lg:block lg:w-auto';
      toggle = !toggle;
    }else{
      dropdownRef.current.className='block  w-full lg:block lg:w-auto';
      toggle = !toggle;
    }
  }


  return (
    <nav >
      <div className=" flex flex-wrap items-center justify-between p-5 lg:p-0 shadow-md">


         <Link to={'/'} className=" ml:2 sm:ml-12 flex items-center space-x-3 rtl:space-x-reverse" >
         <div className="logo flex place-items-center ">
            <Icon.CarFrontFill className='text-lg sm:text-3xl sm:mr-4 mr-2 text-red-600' />
            <h2 className='text-lg sm:text-3xl font-bold text-red-600'>CarServ</h2>
          </div>
         </Link>


        <button onClick={displayList} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-gray-400 dark:hover:bg-red-100" aria-controls="navbar-multi-level" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div ref={dropdownRef} className="hidden w-full lg:block lg:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col place-items-center font-medium p-4 lg:p-0 mt-4  rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
            <li>
              <Link to={'/'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-red-600 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase" >Home</Link>
            </li>
            <li>
              <Link to={'/About'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-red-600 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase" >About</Link>
            </li>
            <li>
              <Link to={'/ServicesPage'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-red-600 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase" >Services</Link>
          
            </li>
            <li>
            <Link to={'/Booking'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-red-600 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase" >Booking</Link>
            </li>
            <li>
              <Link to={'/Technicians'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-red-600 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase" >Technicians</Link>
            </li>
            <li>
            <Link to={'/Testimonial'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-600 lg:p-0  lg:dark:hover:text-red-600 dark:hover:bg-red-600 dark:hover:text-white lg:dark:hover:bg-transparent font-bold text-sm uppercase" >Testimonial</Link>
            </li>
            <li>
              <div className='place-items-center bg-red-600 w-56 p-10 text-white font-bold h-20 flex  justify-center text-base uppercase'>
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
