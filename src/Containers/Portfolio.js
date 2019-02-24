import React from 'react';
import ProjectsCard from '../Components/ProjectsCard'

const Portfolio = () => {
    const projects = [
        {
            url:'https://camwebapp.com',
            image:"cam"
        },
        {
            url:'https://agent.financefactory.com',
            image:"agent-finance"
        },
        {
            url:'https://nzxt.com',
            image:"nzxt"
        },
        {
            url:'https://financefactory.com',
            image:"financefactory"
        }        
    ];

    const listOfProjects = projects.map((project, i) => {
        return <ProjectsCard image={project.image} url={project.url} key={i}/>
    });
    
    return(
        <div>
            <h2>Projects</h2>
            <div className="flex justify-center mb2">
                {listOfProjects}
            </div>
        </div>
    );
};

export default Portfolio;