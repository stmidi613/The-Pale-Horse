import "./App.css";
import { Fragment } from "react/cjs/react.development";
import Rei from "./pictures/Rei.jpg";
import Erza from "./pictures/Erza.png";
import Misaki from "./pictures/Misaki.jpg";
import Esdeath from "./pictures/Esdeath.jpg";
import What from "./pictures/what.png";
import LoginNav from "./LoginNav";

export default function PaleHorse() {
  return (
    <Fragment>
      <LoginNav />
      <div
        id="incelbox"
        className="alertbox hidden z-30 fixed justify-center w-screen md:h-full"
        >
        <div className="flex flex-col justify-center items-center border-2 border-crimson bg-offwhite md:w-3/4 h-1/2">
          <h1 className="p-4 text-center w-full text-5xl md:supertext">You're an Incel!</h1>
          <button
            className="w-24 my-2 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
            onClick={RemoveAlert}
            >
            Ok
          </button>
        </div>
      </div>
      
      <div
        id="normalbox"
        className="alertbox hidden z-30 fixed md:justify-center w-screen h-96 md:h-screen"
      >
        <div className="flex flex-col justify-center items-center border-2 border-crimson bg-offwhite md:w-3/4 h-1/2">
          <h1 className="w-full md:w-1/2 text-center text-xl">
            You might be a normal individual who can live a regular life with a
            wife and family.
          </h1>
          <button
            className="mt:4 md:mt-12 w-24 my-2 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
            onClick={RemoveAlert}
          >
            Ok
          </button>
        </div>
      </div>
      <div className="flex flex-col m-8">
        <h1 className="flex justify-center text-crimson text-3xl underline">
          Personality Test For Anime Lovers
        </h1>
        <div className="flex justify-center">
          <div className="my-8 mx-2 border-2 rounded border-crimson bg-offwhite w-screen md:w-5/6">
            <h2 className="text-crimson text-center m-4 text-xl">
              Which anime character would you like to date or marry?
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center space-around w-full">
                <div className="px-2">
                  <img src={Rei} alt="" />
                  <button
                    className="my-2 w-full bg-crimson hover:shadow-md text-pale-green py-1 px-4 rounded"
                    onClick={IncelAlert}
                  >
                    Rei
                  </button>
                </div>
                <div className="px-2">
                  <img src={Erza} alt="" />
                  <button
                    className="my-2 w-full bg-crimson hover:shadow-md text-pale-green py-1 px-4 rounded"
                    onClick={IncelAlert}
                  >
                    Erza
                  </button>
                </div>
                <div className="px-2">
                  <img src={Misaki} alt="" />
                  <button
                    className="my-2 w-full bg-crimson hover:shadow-md text-pale-green py-1 px-4 rounded"
                    onClick={IncelAlert}
                  >
                    Misaki
                  </button>
                </div>
                <div className="px-2">
                  <img src={Esdeath} alt="" />
                  <button
                    className="my-2 w-full bg-crimson hover:shadow-md text-pale-green py-1 px-4 rounded"
                    onClick={IncelAlert}
                  >
                    Esdeath
                  </button>
                </div>
                <div className="px-2">
                  <img src={What} alt="" />
                  <button
                    className="my-2 w-full bg-crimson hover:shadow-md text-pale-green py-1 px-4 rounded"
                    onClick={NormalAlert}
                  >
                    What?!?!?!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

function IncelAlert() {
  document.getElementById("incelbox").style.display = "flex";
}

function NormalAlert() {
  document.getElementById("normalbox").style.display = "flex";
}

function RemoveAlert() {
    document.getElementById("incelbox").style.display = "none";
    document.getElementById("normalbox").style.display = "none";
}