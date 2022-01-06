import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import star from "./pictures/star.svg";
import "./index.css"

function AllCards() {
  const Cards = [
    {
      id: 1,
      image: "#",
      Title: "Let's Read",
      Author: "Anonymous",
      date: "12/2/2021",
      Topic: "Reading",
      Uploaded: "12/3/2021",
      Summary: "Let's read about lorem ipsum and other great things.",
    },
    {
      id: 2,
      image: "#",
      Title: "Let's Learn",
      Author: "Mr. Learner",
      date: "12/2/2021",
      Topic: "Learning",
      Uploaded: "12/3/2021",
      Summary: "Let's learn about lorem ipsum and other great things.",
    },
    {
      id: 3,
      image: "#",
      Title: "Let's Think",
      Author: "Mr. Thinker",
      date: "12/2/2021",
      Topic: "Think",
      Uploaded: "12/3/2021",
      Summary: "Let's Think about lorem ipsum and other great things.",
    },
    {
      id: 4,
      image: "#",
      Title: "Let's Try",
      Author: "Mr. Tryer",
      date: "12/2/2021",
      Topic: "Learning",
      Uploaded: "12/3/2021",
      Summary: "Let's try lorem ipsum and other great things.",
    },
  ];

  const Card = Cards.map((card) => (
    <Fragment>
      <div className="flex border-2 border-crimson rounded card-clamp h-48 bg-offwhite m-4 hover:shadow-lg">
        <div key={card.id}>
          <img
            src={card.image}
            alt="#/"
            className="bg-light-gray border-2 border-crimson rounded w-32 h-32 m-2"
          />
          <p className="flex flex-row ml-2 pt-1">
            Rating:{" "}
            <span className="m-1">
              <img src={star} alt="#" />
            </span>
            <span className="m-1">
              <img src={star} alt="#" />
            </span>
            <span className="m-1">
              <img src={star} alt="#" />
            </span>
            <span className="m-1">
              <img src={star} alt="#" />
            </span>
            <span className="m-1">
              <img src={star} alt="#" />
            </span>
          </p>
        </div>
        <ul className="flex flex-col space-y-2 w-64 ml-4 mt-2">
          <li key={card.id}>Title: {card.Title}</li>
          <li>Author: {card.Author}</li>
          <li>Date: {card.date}</li>
          <li>Topic: {card.Topic}</li>
        </ul>
        <ul className="hidden md:flex flex-col space-y-2 w-64 mt-2">
          <li>Uploaded: {card.Uploaded}</li>
          <li>Summary: {card.Summary}</li>
        </ul>
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <div className="flex flex-row flex-wrap justify-center">{Card}</div>
    </Fragment>
  );
}

export default AllCards;
