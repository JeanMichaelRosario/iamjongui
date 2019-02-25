import React from 'react';

const ProjectsCard = ({ image, url }) => {
    return(
        <a href={url} className="w-50 z-0 w-25-l link overflow-hidden pa2">
            <div role="img" aria-label="Primer movie" className="grow aspect-ratio--1x1 h-25 cover bg-left w-100" style={{ backgroundImage: `url(/Images/Projects/${image}.PNG)`}}></div>
        </a>
    );
};

export default ProjectsCard;