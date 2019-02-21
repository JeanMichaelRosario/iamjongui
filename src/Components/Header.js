import React, { Component } from "react";

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="db dt-l w-100 border-box pa3 ph5-l">
                    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#Home" title="Home">Home</a>
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#About" title="About">About</a>
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#Portfolio" title="Portfolio">Portfolio</a>
                        <a className="link dim dark-gray f6 f5-l dib" href="#Contact" title="Contact">Contact</a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;