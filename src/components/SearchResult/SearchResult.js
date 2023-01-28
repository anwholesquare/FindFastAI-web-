import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from "react";

const SearchResult = (props) => {

    const navigate = useNavigate();

    const navigateToResult = id => {
        
        navigate(`/searchdetail/${id}`);
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-10 my-10">
        {/* <figure><img src={thumb} alt="Shoes" /></figure> */}
        <div className="card-body">
            <h2 className="card-title mt-5 text-center">{props.name}</h2>
            <div className="card-actions justify-center">
                {/* <p>{desc}</p> */}
            <button onClick={()=>navigateToResult(props.name)} className="btn btn-primary">Watch</button>
            </div>
        </div>
        </div>
    );
};

export default SearchResult;