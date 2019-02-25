import React, { Component } from 'react';
import Header from "../Components/Header";
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Footer from "../Components/Footer";
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="code">
        <Header />
        <Home />
        <div className="tc mh3">
          <About/>
          <Portfolio />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
