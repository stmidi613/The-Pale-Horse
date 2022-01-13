import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <Fragment>
      <nav className="mt-2 h-60 md:h-20 w-full bg-dark-gray">
        <ul className="flex flex-col md:h-20 md:flex-row md:flex-wrap justify-around items-center">
          <Link to="/" className="my-2 p-1 text-pale-green hover-outline">
            Home
          </Link>
          <Link
            to="/newacc"
            className="m-2 p-1 text-pale-green hover-outline"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="m-2 p-1 text-pale-green hover-outline"
          >
            Login
          </Link>
          <Link
            to="/policies"
            className="m-2 p-1 text-pale-green hover-outline"
          >
            Disclaimer/Policies
          </Link>
          <Link
            to="/contact"
            className="my-2 p-1 text-pale-green hover-outline"
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
