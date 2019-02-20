import React from 'react';
import SkillCard from './SkillCard';

const ListOfSkills = ({arrayOfSkills}) => {
    const firstSet = [
        <SkillCard key={0} icon={arrayOfSkills[0]} />,
        <SkillCard key={1} icon={arrayOfSkills[1]} />
    ];

    const secondSet = [
        <SkillCard key={2} icon={arrayOfSkills[2]} />,
        <SkillCard key={3} icon={arrayOfSkills[3]} />
    ];

    const style = "flex flex-row w-50-l w-100 mb2";

    return(
        <div className="flex flex-wrap ma2">
            <div className={style}>
                {firstSet}
            </div>
            <div className={style}>
                {secondSet}
            </div>
        </div>
    );
};

export default ListOfSkills;