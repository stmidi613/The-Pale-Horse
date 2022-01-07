import { Fragment } from "react/cjs/react.development";
import "./index.css";
import LoginNav from "./LoginNav";

function Policies() {
  return (
    <Fragment>
      <LoginNav />
    <div className="w-full m-auto flex flex-col justify-center">
      <h1 className="text-center underline text-5xl pt-5 text-crimson">
        Disclaimer and Policies
      </h1>
      <h2 className="mt-12 mx-12 text-crimson">Disclaimer:</h2>
      <p className="mx-12 mt-6 text-crimson">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <h2 className="mt-12 mx-12 text-crimson">Policies:</h2>
      <p className="mx-12 mt-6 text-crimson">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <p className="mx-12 m-6 text-crimson">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      {/* <div className="my-12 ml-12">
          <input type="checkbox" className="border-2 border-crimson" />
          <label className="text-crimson ml-4">I agree.</label>
          <button className="float-right mr-12 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded">
          Submit
          </button>
        </div> */}
    </div>
        </Fragment>
  );
}

export default Policies;
