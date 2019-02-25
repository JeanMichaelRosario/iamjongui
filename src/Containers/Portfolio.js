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
        <section id="portfolio">
            <h2>Projects</h2>
            <div className="flex justify-center flex-wrap">
                {listOfProjects}
            </div>
        </section>
    );
};

export default Portfolio;