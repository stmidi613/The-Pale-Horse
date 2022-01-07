import "./App.css";
import profilepic from "./pictures/profile.png";
import hamburger from "./pictures/hamburgerbutton.svg";
/* This example requires Tailwind CSS v2.0+ */
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="relative bg-dark-gray mt-2">
      <div className="px-4 sm:px-6">
        <div className="flex justify-start items-center py-6 md:justify-start md:space-x-10">
          <div className="flex place-content-start">
            <h1 className="text-2xl text-pale-green">The Pale Horse</h1>
          </div>

          <NavLink
            to="/homepage"
            className="hidden md:block text-base font-medium text-pale-green py-4 border-b-4 border-dark-gray hover:border-pale-green"
          >
            Home page
            </NavLink>
          <NavLink to="/upload"
            className="hidden md:block text-base font-medium text-pale-green py-4 border-b-4 border-dark-gray hover:border-pale-green"
          >
            Upload Work
            </NavLink>
          <NavLink
            to="/mycontactus"
            className="hidden md:block text-base font-medium text-pale-green py-4 border-b-4 border-dark-gray hover:border-pale-green"
          >
            Contact Us
            </NavLink>
          <NavLink
            to="/mypalehorse"
            className="hidden md:block text-base font-medium text-pale-green py-4 border-b-4 border-dark-gray hover:border-pale-green"
          >
            Pale Horse
            </NavLink>

          <div className="sm:flex items-center justify-end md:flex-1 lg:w-0">
              <NavLink to="/profile"
             className="hidden z-20 md:flex">
              <img src={profilepic} alt="" />
              </NavLink>
          </div>
          <div className="position-right flex justify-end flex-col">
            <button className="m-auto pl-40 pb-6" onClick={dropdownMenu}>
              <img src={hamburger} alt="" className="md:hidden pr-2" />
            </button>
            <div id="dropdown" className="hidden left-1 bg-dark-gray w-64 z-10">
                <button
                  className="px-2 m-2 block rounded border-2 text-pale-green border-pale-green"
                  onClick={closeMenu}
                >
                  X
                </button>
              <Link
                to="/homepage"
                className="text-pale-green text-right hover:underline py-4 px-8 no-underline block"
              >
                Home Page
              </Link>
              <Link
                to="/upload"
                className="text-pale-green text-right hover:underline py-4 px-8 no-underline block"
              >
                Upload Work
              </Link>
              <Link
                to="/mycontactus"
                className="text-pale-green text-right hover:underline py-4 px-8 no-underline block"
              >
                Contact Us
              </Link>
              <Link
                to="/mypalehorse"
                className="text-pale-green text-right hover:underline py-4 px-8 no-underline block"
              >
                Pale Horse
              </Link>
              <Link
                to="/profile"
                className="text-pale-green text-right hover:underline py-4 px-8 no-underline block"
              >
                Profile
              </Link>
              <Link
                to="/"
                className="text-pale-green text-right hover:underline py-4 px-8 no-underline block"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 bg-crimson"></div>
    </div>
  );
}

function dropdownMenu() {
  document.getElementById("dropdown").style.display = "block";
}

function closeMenu() {
  document.getElementById("dropdown").style.display = "none";
}

export default Navbar;
