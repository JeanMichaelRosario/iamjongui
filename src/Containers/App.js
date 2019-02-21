import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../Styles/App.css';
import Header from "../Components/Header";
import About from './About';
import Portfolio from './Portfolio';
import Footer from "../Components/Footer";
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div>
        <div className="mh3">
          <Header />
          <div className="tc">
            <section id="About">
              <About/>
            </section>
            <section id="Portfolio">
              <Portfolio />
            </section>
          </div>
        </div>
        <section id="Contact">
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
