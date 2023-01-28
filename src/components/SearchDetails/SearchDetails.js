import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const SearchDetails = () => {
    const {subtopic}=useParams();
    

    const [videoURL, setvideoURL] = useState("");
    const [desc, setDesc] = useState("");


    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${subtopic}&type=video&key=AIzaSyAsPBRUNoay29bUWe1IdBiPE0le1ZOUIrY `)
        .then(res=> res.json())
        .then (data => { setvideoURL("https://www.youtube.com/watch?v=" + data["items"][0]["id"]["videoId"]); setDesc(data["items"][0]["snippet"]["description"]); } )
    });
    return (
        <div>
            <h1 className='text-2xl font-bold text-black text-center my-20'>The Topic is: {subtopic}</h1>
            <div>
            <div className="mysection mb-5">
                <figure><ReactPlayer url={videoURL} /></figure>
            </div>
            <p className="mysection mt-10 font-semibold text-black px-60 mb-20">
                {desc}
            </p>    
        </div>
        </div>
    );
};

export default SearchDetails;