import React, { Component } from "react";

class Header extends Component {
    render(){
        return(
            <nav className="fixed shadow-5 bg-white z-1 top-0 left-0 db dt-l w-100 border-box pa3 ph5-l">
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#home" title="Home">Home</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#about" title="About">About</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#portfolio" title="Portfolio">Portfolio</a>
                    <a className="link dim dark-gray f6 f5-l dib red" target="_blank" href={process.env.PUBLIC_URL + "Jean Michael Rosario CV.pdf"} title="Resume"><strong>Resume</strong></a>
                </div>
            </nav>
        );
    }
}

export default Header;