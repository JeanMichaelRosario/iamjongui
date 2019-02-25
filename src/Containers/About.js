import React from 'react';
import TechSkills from "../Components/TechSkills";
import Introduction from '../Components/Introduction';
import AboutMe from "../Components/AboutMe";

const About = () => {
    return(
        <section id="about">
            <h2>About</h2>
            <AboutMe />
            <div className="w-100 flex flex-wrap">
                <div className="w-50-l w-100 mb2 ph2">
                    <Introduction />
                </div>
                <div className="w-50-l w-100 mb2 ph2">
                    <TechSkills />
                </div>
            </div>
        </section>
    );
};

export default About;