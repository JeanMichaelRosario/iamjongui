import React, { Component } from "react";

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="db dt-l w-100 border-box pa3 ph5-l">
                    <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                        <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
                    </a>
                    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
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