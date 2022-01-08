import "./index.css";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.development";
import LoginNav from "./LoginNav";
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoutes";

function Login() {
  const [userId, setUserId] = useState('');
  const [pw, setpw] = useState('');
  
  return (
    <Fragment>
      <LoginNav />
      <div className="h-full w-full m-auto flex flex-col justify-center items-center">
        <h1 className="w-1/2 text-center text-3xl mt-8 text-crimson">
          Upon logging in you must agree to the Disclaimer and Policies of this
          website.
        </h1>
        <h2 className="text-2xl pb-4 pt-10 text-crimson">Login</h2>
        <form>
          <label className="mr-7 text-crimson">UserId:</label>
          <input
            type="text"
            name="userid"
            value={userId}
            className="my-2 border-2 border-crimson"
            onChange={e => setUserId(e.target.value)}
          />
          <br />
          <label className="mr-2 text-crimson">Password:</label>
          <input
            type="password"
            name="password"
            value={pw}
            className="my-2 border-2 border-crimson"
            onChange={e => setpw(e.target.value)}

          />
          <br />
          <div className="flex justify-center">
            {}
            <ProtectedRoutes userId={userId} pw={pw} setUserId={setUserId} setpw={setpw} />
          </div>
          <br />
        </form>
        <button className="flex items-center m-10 w-62 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded">
          Forgot UserId or Password?
        </button>
      </div>
      {/* {<ProtectedRoutes Authenticated={Authenticated} />} */}
    </Fragment>
  );
  
}

export default Login;

