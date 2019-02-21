import React from "react";
import ListOfSkills from './ListOfSkills';

const AboutMe = () => {
    const skills = [
        "fas fa-people-carry",
        "fas fa-user-tie",
        "fas fa-handshake",
        "fas fa-laptop-code"
    ]

    return(
        <div className="fl w-100 mb5">
            <ListOfSkills arrayOfSkills={skills} />
        </div>
    );
};

export default AboutMe;