import React from 'react';


const SkillCard = ({ icon, title, text }) => {
    return(
        <div className="w-50">
            <div>
                <i className={icon}></i>
                <h4 className="f4">{title}</h4>
                <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="ph2">
                {text}
            </p>
        </div>
    );
};

export default SkillCard;