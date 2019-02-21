import React from 'react';


const SkillCard = ({ icon }) => {
    return(
        <div className="w-50">
            <div>
                <i className={icon}></i>
                <h1 className="f4">Mimi Whitehouse</h1>
                <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="ph2">
                Quite affectionate and outgoing. 
                She loves to get chin scratches 
                and will roll around on the floor 
                waiting for you give her more of them.
            </p>
        </div>
    );
};

export default SkillCard;