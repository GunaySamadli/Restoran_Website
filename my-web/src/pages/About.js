import React from 'react';
import Team from '../components/Team/Team';
import About from '../components/About/About.js';

const AboutPage = () => {
    return (
        <>
            <div className="contact-home">
                <h1>About Us</h1>
            </div>
            <About />
            <Team />
        </>

    )
}

export default AboutPage