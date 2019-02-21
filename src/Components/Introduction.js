import React from 'react';
import Me from '../Images/me.png';

const Introduction = () => {
    return(
        <div className="w-100">
            <img alt="me" src={Me} className="dib w4 h4"/>
            <h3>Who am I ?</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default Introduction;