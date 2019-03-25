import React from 'react';


const TechSkills = () => {
    const classAtributes = "w-25-l pa2-l w-25-m pa2-m w-50 mv4 ";
    return(
        <div>
            <h3>Skills</h3>
            <div className="flex flex-wrap icon-skills">
                <i className={ classAtributes + "devicon-docker-plain-wordmark"}></i>
                <i className={ classAtributes + "devicon-laravel-plain colored"}></i>
                <i className={ classAtributes + "devicon-react-original-wordmark"}></i>
                <i className={ classAtributes + "devicon-nodejs-plain-wordmark"}></i>
                <i className={ classAtributes + "devicon-php-plain"}></i>
                <i className={ classAtributes + "devicon-wordpress-plain-wordmark colored"}></i>
            </div>
        </div>
    );
};

export default TechSkills;