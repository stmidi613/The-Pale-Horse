import { Fragment } from "react";
import "./index.css";
import LoginNav from "./LoginNav";

function NewAcc() {
  return (
    <Fragment>
      <LoginNav />
    <div className="h-full w-full m-auto flex flex-col justify-center items-center">
      <h1 className="w-1/2 text-center text-3xl mt-8 text-crimson">
        Upon logging in you must agree to the Disclaimer and Policies of this
        website.
      </h1>
      <h2 className="text-2xl pb-4 pt-10 text-crimson">New User</h2>
      <form className="m-2 w-96">
        <label className="mr-7 text-crimson">UserId:</label>
        <input type="text" name="userid" className="my-2 border-2 border-crimson" />
        <br />
        <div className="">
                  <label className="mr-9 text-crimson">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="my-2 border-2 border-crimson"
                    />
                </div>
        <label className="mr-2 text-crimson">Password:</label>
        <input type="password" name="password" className="my-2 border-2 border-crimson" />
        <p className="text-crimson text-center my-2">
          (Must be 8 to 16 characters long and include a number letter and
          special character)
        </p>
        <label className="mr-2 text-crimson">Confirm password:</label>
        <input type="password" name="confirm-password" className="mt-2 mb-10 border-2 border-crimson" />
        <br />
        <div className="flex justify-center">
        <input type="submit" className="w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded" />
        </div>
      </form>
    </div>
    </Fragment>
  );
}

export default NewAcc;
