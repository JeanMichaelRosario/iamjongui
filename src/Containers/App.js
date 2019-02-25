import React, { Component } from 'react';
import Header from "../Components/Header";
import About from './About';
import Portfolio from './Portfolio';
import Footer from "../Components/Footer";
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="tc mh3 margin-top-70">
          <About/>
          <Portfolio />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
