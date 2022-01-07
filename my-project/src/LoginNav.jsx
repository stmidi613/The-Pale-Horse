import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <Fragment>
      <nav className="mt-2 h-20 w-full bg-dark-gray">
        <ul className="flex flex-col md:flex-row flex-wrap justify-evenly items-center h-20">
          <Link to="/" className="m-auto p-1 text-pale-green hover-outline">
            Home
          </Link>
          <Link
            to="/newacc"
            className="m-auto p-1 text-pale-green hover-outline"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="m-auto p-1 text-pale-green hover-outline"
          >
            Login
          </Link>
          <Link
            to="/policies"
            className="m-auto p-1 text-pale-green hover-outline"
          >
            Disclaimer/Policies
          </Link>
          <Link
            to="/contact"
            className="m-auto p-1 text-pale-green hover-outline"
          >
            Contact Us
          </Link>
        </ul>
      </nav>

      <div className="h-3 bg-crimson"></div>
    </Fragment>
  );
}

export default LoginNav;
