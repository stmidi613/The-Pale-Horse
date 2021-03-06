import { Fragment } from "react/cjs/react.development";
import "./index.css"
import "./App.css"
import LoginNav from "./LoginNav";

export default function Contact() {
  return (
    <Fragment>
      <LoginNav />
      <div className="flex flex-col my-8">
        <h1 className="flex justify-center text-crimson text-3xl underline">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <form className="my-8 mx-2 border-2 rounded border-crimson bg-offwhite w-screen md:w-3/4">
            <h2 className="text-crimson text-center m-4 text-xl">
              All fields are required
            </h2>
            <div className="flex justify-center">
              <div className="md:w-3/4">
                <div className="">
                  <label htmlFor="name" className="m-0.5">Name/UserId:</label>
                  <input
                    type="text"
                    name="name"
                    className="border border-crimson ml-2 md:ml-6 md:w-3/5"
                  />
                </div>
                <br />
                <div className="">
                  <label htmlFor="email" className="m-0.5">Email:</label>
                  <input
                    type="email"
                    name="title"
                    className="border border-crimson ml-16 md:ml-20 md:w-3/5"
                  />
                </div>
                <br />
                <div className="">
                  <label htmlFor="date" className="m-0.5">Issue:</label>
                  <input
                    type="text"
                    name="date"
                    className="border border-crimson ml-16 md:ml-20 md:w-3/5"
                  />
                </div>
                <br />
                <label htmlFor="summary" className="float-left m-0.5">Summary:</label>
                <textarea
                  name="summary"
                  rows="5"
                  cols=""
                  className="border border-crimson ml-8 md:ml-12 md:w-4/5"
                />
                <br />
                <div className="mt-1">
                  <label htmlFor="checkbox" className="mr-1 lg:ml-32">
                    Would you like to flag an article?
                  </label>
                  <input type="checkbox" />
                </div>
                <br />
                <div className="flex justify-center">
                  <input
                    type="submit"
                    className="my-6 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}