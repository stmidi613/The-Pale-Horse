import { Fragment } from "react/cjs/react.development";
import Navbar from "./Navbar";

export default function Upload() {
  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col m-8">
        <h1 className="flex justify-center text-crimson text-3xl underline">
          Upload Your Work
        </h1>
        <div className="flex justify-center">
          <form className="my-8 mx-2 border-2 rounded border-crimson bg-offwhite w-screen md:w-3/4">
            <h2 className="text-crimson text-center m-4 text-xl">
              All fields are required
            </h2>
            <div className="flex justify-center">
              <div className="m-2 md:m-0 md:w-3/5">
                <div className="">
                  <label className="">Author:</label>
                  <input
                    type="text"
                    name="author"
                    className="border border-crimson ml-7 md:w-3/5"
                  />
                </div>
                <p className="text-crimson mt-4">
                  You cannot upload another person’s work without their
                  permission.
                </p>
                <br />
                <div className="">
                  <label className="">Title:</label>
                  <input
                    type="text"
                    name="title"
                    className="border border-crimson ml-11 md:w-3/5"
                  />
                </div>
                <br />
                <div className="">
                  <label className="">Date:</label>
                  <input
                    type="date"
                    name="date"
                    className="border border-crimson ml-10 md:w-3/5"
                  />
                </div>
                <p className="text-crimson mt-4">
                  Date you first published or wrote the article
                </p>
                <br />
                <div className="">
                  <label className="">Topic:</label>
                  <input
                    type="text"
                    name="topic"
                    className="border border-crimson ml-9 md:w-3/5"
                  />
                </div>
                <br />
                <label className="float-left">Summary:</label>
                <textarea
                  name="summary"
                  rows="4"
                  cols=""
                  className="border border-crimson ml-2 md:w-3/5"
                />
                <br />
                <div className="mt-4">
                  <label className="">Image:</label>
                  <input
                    type="url"
                    name="image"
                    className="border border-crimson md:w-3/5 ml-8"
                  />
                  <button className="relative m-2 md:ml-1 text-center w-16 bg-crimson hover:shadow-md text-pale-green py-1 px-1 rounded">
                    Upload
                  </button>
                  <br />
                  <label className="md:ml-20 mr-2 text-center">
                    Use profile picture
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
