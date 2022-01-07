import './App.css'
import { Link } from 'react-router-dom'; 
import React, { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <header>
        <image
          src="/#"
          alt=""
          className="relative top-3 left-5 float-left pt-2 w-20 h-20 border-crimson border-2 bg-auto bg-center rounded-full"
        />
        <h1 className="text-center text-5xl pt-2 text-crimson">The Pale Horse</h1>
        <h2 className="text-center text-2xl pt-1 text-crimson">Satire Writing</h2>
      </header>

    </Fragment>
  );
}