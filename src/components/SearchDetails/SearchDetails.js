import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const SearchDetails = () => {
    const {searchId}=useParams();
    return (
        <div>
            <h1 className='tet-2xl font-bold text-black text-center my-20'>Video no{searchId}</h1>
            <div>
            <div className="mysection mb-5">
                <figure><ReactPlayer url="https://youtu.be/Zv4K_Vh_uKs" /></figure>
            </div>
            <p className="mysection mt-10 font-semibold text-black px-60 mb-20">
                An advanced algorithm to find the most relevant sequential resources crawling the web according to your searched topic and compiling them into a personalized playlist
            that is constantly learning and adapting to your preferences.
            </p>
        </div>
        </div>
    );
};

export default SearchDetails;