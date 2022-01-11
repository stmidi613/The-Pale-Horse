import "./index.css";
import { Fragment } from "react/cjs/react.development";
import LoginNav from "./LoginNav";
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoutes";

function Login(props) {
  const [details, setDetails] = useState({ userId: "", password: ""});


  return (
    <Fragment>
      <LoginNav />
      <div className="h-full w-full m-auto flex flex-col justify-center items-center">
        <h1 className="w-1/2 text-center text-3xl mt-8 text-crimson">
          Upon logging in you must agree to the Disclaimer and Policies of this
          website.
        </h1>
        <h2 className="text-2xl pb-4 pt-10 text-crimson">Login</h2>
        {/*Error!*/}
        <form>
          <label className="mr-7 text-crimson">UserId:</label>
          <input
            type="text"
            name="userid"
            value={details.userId}
            className="my-2 border-2 border-crimson"
            onChange={(e) => setDetails({ ...details, userId: e.target.value })}
          />
          <br />
          <label className="mr-2 text-crimson">Password:</label>
          <input
            type="password"
            name="password"
            value={details.password}
            className="my-2 border-2 border-crimson"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
          <br />
          <div className="flex justify-center">
            <ProtectedRoutes details={details} Authenticated={props.Authenticated} setAuthenticated={props.setAuthenticated} />
          </div>
          <br />
        </form>
        <button className="flex items-center m-10 w-62 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded">
          Forgot UserId or Password?
        </button>
      </div>
    </Fragment>
  );
}

export default Login;
