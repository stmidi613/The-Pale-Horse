import "./App.css";
import articles from "./pictures/articles.jpg";
import work from "./pictures/workupload.png";
import example from "./pictures/example.png";
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import LoginNav from "./LoginNav";


export default function HeroHome() {
  return (
    <Fragment>
      <LoginNav />
      <section className="h-auto p-20 px-10 w-full block">
        <h3 className="block text-center text-3xl text-crimson underline p-5">
          Search for Articles
        </h3>
        <div className="flex flex-wrap items-center justify-center">
          <img src={articles} alt="" className="mr-7" />
          <h4 className="mt-10 w-60 text-2xl text-crimson">
            Search for your favorite articles and authors based on the criteria
            of your choice.
          </h4>
        </div>
      </section>

      <section className="h-auto px-10 w-full block">
        <h3 className="block text-center text-3xl text-crimson underline p-5">
          Upload Your Own Work
        </h3>
        <div className="flex flex-wrap items-center justify-center">
          <h4 className="mb-8 w-60 text-2xl text-crimson">
            Upload your work so everyone can see. Get ratings.
          </h4>
          <img src={work} alt="" className="ml-5" />
        </div>
      </section>

      <section className="h-auto p-20 px-10 w-full block">
        <h3 className="block text-center text-3xl text-crimson underline p-5">
          Read Originals by The Pale Horse
        </h3>
        <div className="flex flex-wrap items-center justify-center">
          <img src={example} alt="" className="border-crimson mr-5" />
          <div className="h-auto">
            <h4 className="w-60 py-10 text-2xl text-crimson">
              Read Material Created By The Pale Horse.
            </h4>
            <Link
              to="/palehorse"
              className="bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded flex content-start w-36"
            >
              Go For a Ride?
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-5 h-10 w-full bg-dark-gray">
        <p className="text-white w-full inline-block text-center align-middle">
          copyright 2021
        </p>
      </footer>
    </Fragment>
  );
}
