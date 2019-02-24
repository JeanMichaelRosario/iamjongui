import React from "react";
import ListOfSkills from './ListOfSkills';

const AboutMe = () => {
    const skills = [
        {
            icon: 'fas fa-people-carry',
            title: 'Coworker',
            text: 'I like to work with other people and having fun building apps together.'
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Confidence',
            text: 'I have 4+ years of experience in this area, I know what I have to do and how get it done.'
        },
        {
            icon: 'fas fa-handshake',
            title: 'Commitment',
            text: 'My work is what I am passion about, that is why I take care to the details of everything I do'
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'Happy Coder',
            text: 'I love what I do. Every day is a new opportunity to grow, learn and have fun.'
        }
    ]

    return(
        <div className="w-100 mb5">
            <ListOfSkills arrayOfSkills={skills} />
        </div>
    );
};

export default AboutMe;