import "./App.css";
import { Fragment } from "react/cjs/react.production.min";
import AllCards from "./Card";
import PageIndex from "./PageIndex";

function HomePage() {
  return (
    <Fragment>
      
      <div className="py-4 flex flex-col md:flex-row flex-wrap place-content-around m-auto">
        <p className="text-crimson py-2">Filter by:</p>
        <div className="px-4 py-2">
          <input type="checkbox" className="border-2 border-crimson" />
          <label className="text-crimson ml-2">Latest</label>
        </div>
        <div className="px-4 py-2">
          <input type="checkbox" className="border-2 border-crimson" />
          <label className="text-crimson ml-2">Most Popular</label>
        </div>
        <div className="px-4 py-2">
          <input type="checkbox" className="border-2 border-crimson" />
          <label className="text-crimson ml-2">My Uploads</label>
        </div>
        <div className="px-4 py-2">
          <input type="checkbox" className="border-2 border-crimson" />
          <label className="text-crimson ml-2">Recently Visited</label>
        </div>
        <div className="px-4 py-1">
          <label className="text-crimson mr-4">Keyword(s):</label>
          <input type="search" className="border-2 border-crimson" />
        </div>
      </div>
      <AllCards />
      <PageIndex />
    </Fragment>
  );
}

export default HomePage;
