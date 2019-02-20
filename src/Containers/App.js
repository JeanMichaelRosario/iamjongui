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
        <About className="mb4" />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
