import React from 'react';


const Contact = () => {
    return(
        <div className="mb5">
            <h1>Contact</h1>
            <div>
                <h4>Have any question?</h4>
                <div>
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <textarea type="text" placeholder="Your Message"></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;