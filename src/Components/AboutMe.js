import React from "react";
import ListOfSkills from './ListOfSkills';

const AboutMe = () => {
    const skills = [
        {
            icon: 'fas fa-people-carry',
            title: 'Colaborator',
            text: 'I like to work with other people and having fun building apps together'
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Confidence',
            text: 'I have the experience to be sure about what I do, and to know when I made a mistake'
        },
        {
            icon: 'fas fa-handshake',
            title: 'Commitment',
            text: 'I am always exited about what I am making, and being a good teammate'
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'Happy Coder',
            text: 'I love what I do. Every day is a new opportunity to grow, learn and have fun'
        }
    ]

    return(
        <div className="fl w-100 mb5">
            <ListOfSkills arrayOfSkills={skills} />
        </div>
    );
};

export default AboutMe;