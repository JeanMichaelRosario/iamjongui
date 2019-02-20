import React from 'react';


const TechSkills = () => {
    return(
        <div>
            <h3>Skills</h3>
            <div className="flex flex-wrap icon-skills">
                <i className="w-25-l pa2-l w-25-m pa2-m w-50 mv4 devicon-docker-plain-wordmark"></i>
                <i className="w-25-l pa2-l w-25-m pa2-m w-50 mv4 devicon-rails-plain-wordmark"></i>
                <i className="w-25-l pa2-l w-25-m pa2-m w-50 mv4 devicon-react-original-wordmark"></i>
                <i className="w-25-l pa2-l w-25-m pa2-m w-50 mv4 devicon-nodejs-plain-wordmark"></i>
                <i className="w-25-l pa2-l w-25-m pa2-m w-50 mv4 devicon-php-plain"></i>
            </div>
        </div>
    );
};

export default TechSkills;