import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import bbc from "./assets/zab.png";
import pp from "./assets/download.jpg";
import Steps from "./components/work.jsx";
import ScrollingPage from "./components/scrolling";
import arrow from "./assets/arrow.svg"
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import  Playground from './components/playground.jsx'

const Buttons = () => {
  return (
    <div>
      <button className="getr">
        <h12>Get started ➜</h12>
      </button>

      <button className="sales">
        <h13>talk to sales</h13>
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">

<Navbar />


     <Routes>
        <Route path='Playground' elemet={<Playground/>}/>
    </Routes>


      <div className="firstH">
        <h5>Build Your</h5>
        <h2>Software Now!</h2>
        <h10>we will take your order from</h10>
        <h11>here.</h11>
      </div>

      <div className="btn">
        <Buttons />
      </div>
      <Steps />
     <ScrollingPage />


    </div>
  );
}

export default App;
