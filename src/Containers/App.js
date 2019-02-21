import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../Styles/App.css';
import Header from "../Components/Header";
import About from './About';
import Portfolio from './Portfolio';
import Contact from "./Contact";
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="mh3">
        <Header />
        <div className="tc">
        <About/>
        <Portfolio />
        <Contact />
        </div>
      </div>
    );
  }
}

export default App;
