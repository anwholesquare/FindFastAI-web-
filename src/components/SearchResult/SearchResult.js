import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from "react";

const SearchResult = (props) => {

    const navigate = useNavigate();

    const navigateToResult = id => {
        
        navigate(`/searchdetail/${id}`);
    }

    const [thumb, setThumbnail] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${props.name}&type=video&key=AIzaSyBvdQNIflKQd3VAFEMvZtr0FRTrFnt3y3w `)
        .then(res=> res.json())
        .then (data => { setThumbnail(data["items"][0]["snippet"]["thumbnails"]["high"]["url"]); setDesc(data["items"][0]["snippet"]["description"]); } )
    })

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-10 my-10">
        <figure><img src={thumb} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <div className="card-actions justify-end">
                <p>{desc}</p>
            <button onClick={()=>navigateToResult(props.name)} className="btn btn-primary">Watch</button>
            </div>
        </div>
        </div>
    );
};

export default SearchResult;