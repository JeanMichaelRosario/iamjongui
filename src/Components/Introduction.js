import React from 'react';

const Introduction = () => {
    return(
        <div className="w-100">
            <img alt="me" src='/Images/me.png' className="dib w4 h4"/>
            <h3>Who am I ?</h3>
            <div className="tr">
                <p>
                    I am a Software Developer, I had work for companies like:&nbsp;
                    <a href="#portfolio">nzxt</a>,&nbsp;<a href="#portfolio">financefactory</a> and&nbsp;
                    <a href="#portfolio">mctekk</a>. You can see some of the tools I use on the left.
                    As a self-learned developer, I keep learning and digging into the internet to 
                    use new stuff in projects I am working in. I love to work with other people because
                    that helps me to grow faster and I like to discuss different ideas with the team</p> 
                <p>
                    I'm extremely loyal and passionate to the works that I'm involved with,
                    and I'm always looking for new challenges. Through the experience that
                    I achieved from work, I was able to guide many people with my leadership
                    skills.
                </p>
                <p> Please check my work below, and please
                    don't hesitate to contact me. Also feel free to download my resume and
                    check it out. 
                </p>
            </div>
        </div>
    );
};

export default Introduction;