import React from "react";
import Policies from "./DandP";
import {Link} from 'react-router-dom'

export default function AfterLogin() {
  return (
    <>
      <Policies />
      <div className="my-12 ml-12">
        <input type="checkbox" className="border-2 border-crimson" />
        <label className="text-crimson ml-4">I agree.</label>
        <Link to="/homepage" className="relative bottom-2 text-center float-right mr-12 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded">
          Submit
        </Link>
      </div>
    </>
  );
}
