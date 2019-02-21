import React, { Component } from "react";
import Me from '../me.png';

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="db dt-l w-100 border-box pa3 ph5-l">
                    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="About">About</a>
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Portfolio">Portfolio</a>
                        <a className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Contact</a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;