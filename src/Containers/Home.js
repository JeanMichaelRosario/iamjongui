import React, { Component } from 'react';
import Typed from "typed.js";

class Home extends Component {
    
    constructor(){
        super();
        this.strings = [
            "Hello World!",
            "I am Jean Michael Rosario",
            "I am a Software Developer",
            "I have 4+ years of experience",
            "I love to create amazing apps",
            "Are you ready to create one?",
            "Text me",
            "Because...",
            "I am how you are looking for ;)"
        ];
    }

    componentDidMount(){
        const options = {
            strings: this.strings,
            startDelay: 2000,
            typeSpeed: 100,
            backSpeed: 100,
            smartBackspace: true,
            showCursor: false
        };

        this.typed = new Typed(this.element, options);
    }

    render(){
        return(
            <section id="home" className="relative">
                <div className="bg-home w-100">
                    <span></span>
                    <h2 className="tc home-text relative f1-l f3" ref={(element) => {this.element = element}}>Hello World!</h2>
                </div>
            </section>
        );
    }
}

export default Home;