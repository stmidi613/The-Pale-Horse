import React from "react";
import Policies from "./DandP";
import {useNavigate, Navigate, Outlet} from 'react-router-dom'

export default function AfterLogin() {
  
  const checkbox = document.getElementById("checkbox")
  
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    console.log(checkbox.checked);
    return checkbox.checked ? navigate("/homepage") : <Navigate replace to="login/afterlogin" />
  }

  return (
    <>
      <Policies />
      <div className="my-12 ml-12">
        <input type="checkbox" id="checkbox" className="border-2 border-crimson" />
        <label className="text-crimson ml-4">I agree.</label>
        <button onClick={onClickHandler} className="relative bottom-2 text-center float-right mr-12 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </>
  );
}
