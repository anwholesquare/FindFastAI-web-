import React from 'react';
import ReactPlayer from 'react-player';
import './About.css'
const About = () => {
    return (
        <div>
            <div className="mysection mt-20">
                <figure><ReactPlayer url="https://youtu.be/Zv4K_Vh_uKs" /></figure>
            </div>
            <p className="mysection mt-10 font-semibold text-black ">
                An advanced algorithm to find the most relevant sequential resources crawling the web according to your
                searched topic and compiling them into a personalized playlist that is constantly learning and adapting to your preferences.
            </p>
        </div>


    );
};

export default About;