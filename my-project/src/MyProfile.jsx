import { Fragment } from "react/cjs/react.development";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "./Logout";

export default function Profile(props) {
  function onClick(){
    console.log(props)
  }

  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col m-8">
        <h1 className="flex justify-center text-crimson text-3xl underline">
          My Profile
        </h1>
        <div className="flex justify-center items-center">
          <form className="my-8 mx-2 border-2 rounded border-crimson bg-offwhite w-screen md:w-3/4">
            <div className="flex justify-center items-center">
              <div className="w-screen md:w-full">
                <div className="flex flex-wrap justify-center pt-4">
                  <label htmlFor="name" className="float-left pl-5">Name/UserId:</label>
                  <input
                    type="text"
                    name="name"
                    className="flex justify-center border border-crimson ml-2 md:w-3/5"
                  />
                  <button onClick={onClick} className="relative float-right mx-2 w-18 bg-crimson hover:shadow-md text-pale-green px-2 rounded">
                    Edit
                  </button>
                </div>
                <br />
                <div className="flex flex-wrap justify-center">
                  <label htmlFor="email" className="pl-20">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="border border-crimson ml-2 md:w-3/5"
                  />
                  <button className="relative float-right mx-2 w-18 bg-crimson hover:shadow-md text-pale-green px-2 rounded">
                    Edit
                  </button>
                </div>
                <br />
                <div className="flex flex-wrap justify-center">
                  <label htmlFor="password" className="pl-11 mr-2">Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="border border-crimson md:w-3/5"
                  />
                  <button
                    className="relative float-right mx-2 w-18 bg-crimson hover:shadow-md text-pale-green px-2 rounded"
                    onClick={NewPassword}
                  >
                    Edit
                  </button>
                </div>
                <br />
                <div
                  id="opacity-1"
                  className="flex flex-wrap justify-center opacity"
                >
                  <label htmlFor="newpassword" className="mr-2">
                    New Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="newpassword"
                    className="mr-12 border border-crimson md:w-3/5"
                    disabled
                  />
                </div>
                <br />
                <div
                  id="opacity-2"
                  className="flex flex-wrap justify-center opacity"
                >
                  <label htmlFor="confirm-password" className="mr-2">
                    Confirm password:
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    name="confirm-password"
                    className="border border-crimson md:w-3/5"
                    disabled
                  />
                  <input
                    type="submit"
                    className="bg-crimson hover:shadow-md text-pale-green px-4 ml-2 rounded"
                    onClick={SubmitPassword}
                  />
                  <br />
                  <p className="text-crimson text-center pt-2 w-3/4">
                    (Must be 8 to 16 characters long and include a number letter
                    and special character)
                  </p>
                </div>
                <br />
                <div className="flex flex-wrap justify-center">
                  <label htmlFor="image" className="pl-24">Image:</label>
                  <input
                    type="url"
                    name="image"
                    className="border border-crimson md:w-3/5 ml-2"
                  />
                  <button className="ml-2 w-18 bg-crimson hover:shadow-md text-pale-green py-1 px-2 rounded">
                    Upload
                  </button>
                </div>
                <br />
                <div className="flex flex-wrap justify-center">
                  <label htmlFor="motto" className="pl-20">Motto:</label>
                  <input
                    type="text"
                    name="motto"
                    className="border border-crimson ml-2 md:w-3/5"
                  />
                  <button className="relative float-right mx-2 w-18 bg-crimson hover:shadow-md text-pale-green px-2 rounded">
                    Edit
                  </button>
                </div>
                <p className="text-crimson text-center my-4">
                  Only 100 characters allowed.
                </p>
              </div>
            </div>
          </form>
        </div>
        <Logout Authenticated={props.Authenticated} setAuthenticated={props.Authenticated} />
      </div>
    </Fragment>
  );
}

function NewPassword() {
  document.getElementById("password").disabled = false;
  document.getElementById("confirm-password").disabled = false;
  document.getElementById("opacity-1").style.opacity = "100%";
  document.getElementById("opacity-2").style.opacity = "100%";
}

function SubmitPassword() {
  document.getElementById("password").disabled = true;
  document.getElementById("confirm-password").disabled = true;
  document.getElementById("opacity-1").style.opacity = "35%";
  document.getElementById("opacity-2").style.opacity = "35%";
}
