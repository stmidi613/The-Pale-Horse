import React from "react";
import Policies from "./DandP";
import { useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom'

export default function AfterLogin() {
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    const checkbox = document.getElementById("checkbox");
    checkbox.checked ? navigate("/homepage") : <Navigate replace to="login/afterlogin" />
  }

  return (
    <>
      <Policies />
      <div className="my-12 ml-12">
        <input type="checkbox" id="checkbox" className="border-2 border-crimson" />
        <label htmlFor="button" className="text-crimson ml-4">I agree.</label>
        <button onClick={onClickHandler} className="relative bottom-2 text-center float-right mr-12 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </>
  );
}
