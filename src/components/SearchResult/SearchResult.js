import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResult = (props) => {
    const navigate= useNavigate();

    const navigateToServiceDetail = id =>{
            navigate(`/searchdetail/${id}`);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="indicator">
                    <span className="indicator-item badge badge-primary">new</span>
                    <div className="grid w-60 h-32 bg-base-300 place-items-center">content</div>
                </div>
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigateToServiceDetail(props.idx)} className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;