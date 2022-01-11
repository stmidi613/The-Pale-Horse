import React, { Fragment } from "react";
import "./App.css";

export default function LogOut({LoggedOut}) {
  const logoutDisplay = document.getElementById("logout");

  const DisplayLogout = () => {
    logoutDisplay.style.display = "flex";
  }

  function RemoveBox() {
    logoutDisplay.style.display = "none";
    console.log(LoggedOut)
  }

  return (
    <Fragment>
      <div
        id="logout"
        className="hidden mt-10 z-30 fixed justify-center w-screen h-screen"
      >
        <div className="flex flex-col justify-center items-center border-2 border-crimson bg-offwhite w-3/4 h-1/2">
          <h1 className="p-4 text-center text-5xl">
            Are you sure you want to logout?
          </h1>
          <div className="flex space-x-10">
            <button
              className="w-24 my-2 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
              onClick={RemoveBox}
            >
              Yes
            </button>
            <button
              className="w-24 my-2 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
              onClick={RemoveBox}
            >
              No
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={DisplayLogout}
          className="text-center m-8 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </Fragment>
  );
}

