import React from 'react';
import TechSkills from "../Components/TechSkills";
import Introduction from '../Components/Introduction';
import AboutMe from "../Components/AboutMe";

const About = () => {
    return(
        <div className="tc">
            <h2>About</h2>
            <div className="mb2">
                <AboutMe />
            </div>
            <div className="fl w-100">
                <div className="flex flex-wrap">
                    <div className="w-50-l w-100 mb2 ph2">
                        <Introduction />
                    </div>
                    <div className="w-50-l w-100 mb2 ph2">
                        <TechSkills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;