import React, { Component } from 'react';
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
            <About/>
            <Portfolio />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
