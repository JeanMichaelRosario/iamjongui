import React from 'react';

const Footer = () => {
    return(
        <footer className="tc-l bg-center cover mt3">
            <div className="w-100 ph3">
                <a className="link black-60 bg-transparent hover-black inline-flex items-center br2 pa2"
                    href="https://github.com/JeanMichaelRosario"
                    target="_blank"
                    rel="noopener noreferrer" 
                    title="GitHub">
                    <i className="fab fa-github"></i>
                    <span className="f6 ml3 pr2">GitHub</span>
                </a>
                <a className="link black-60 bg-transparent hover-black inline-flex items-center br2 pa2"
                    href="https://instagram.com/iamjongui"
                    target="_blank"
                    rel="noopener noreferrer" 
                    title="Instagram">
                    <i className="fab fa-instagram"></i>
                    <span className="f6 ml3 pr2">Instagram</span>
                </a>
                <a className="link black-60 bg-transparent hover-black inline-flex items-center br2 pa2"
                    href="https://linkedin.com/in/iamjongui"
                    target="_blank"
                    rel="noopener noreferrer" 
                    title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                    <span className="f6 ml3 pr2">LinkedIn</span>
                </a>
                <a className="link black-60 bg-transparent hover-black inline-flex items-center br2 pa2"
                    href="mailto:jmrosario94@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Gmail">
                    <i className="far fa-envelope"></i>
                    <span className="f6 ml3 pr2">Gmail</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;