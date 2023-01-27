import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResult = (props) => {
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-10 my-10">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
            </div>
        </div>
        </div>
    );
};

export default SearchResult;