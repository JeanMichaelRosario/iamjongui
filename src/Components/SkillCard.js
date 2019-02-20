import React from 'react';


const SkillCard = ({ icon }) => {
    return(
        <div className="w-50">
            <i className={icon}></i>
        </div>
    );
};

export default SkillCard;