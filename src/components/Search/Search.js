import React from 'react';
import './Search.css';
import img from '../../images/search up.png'
import './Search.css'
const Search = () => {


    return (
        <div className='text-black font-bold text-center ul'>
            <img src={img} className="max-w-sm rounded-lg pt-24 w-96" />
            <div className='mysection'>
                <input type="text" placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs mb-7" />
                
            </div>
            <button className="btn btn-primary w-20">Search</button>
        </div>
    );
};

export default Search;