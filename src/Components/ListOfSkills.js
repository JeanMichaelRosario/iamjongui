import React from 'react';
import SkillCard from './SkillCard';

const ListOfSkills = ({arrayOfSkills}) => {
    const set = arrayOfSkills.map((skill, i) => {
        return <SkillCard key={i} 
        icon={skill.icon} 
        title={skill.title} 
        text={skill.text} />
    });

    const style = "flex flex-row w-50-l w-100 mb2";

    return(
        <div className="flex flex-wrap ma2">
            <div className={style}>
                {set.slice(0,2)}
            </div>
            <div className={style}>
                {set.slice(2)}
            </div>
        </div>
    );
};

export default ListOfSkills;