import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import './Search.css';
import img from '../../images/search up.png'
import './Search.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Search = () => {
    const [searchlist,setSearchlist]=useState([]);
    const searchRef=useRef('');
    const navigate= useNavigate();

    const navigateToResult=()=>{
        const usersearch=searchRef.current.value;

        console.log(usersearch);

        // navigate(`/searchresults/${usersearch}`);
        navigate('/searchresults');
    }

    return (
        <div className='text-black font-bold text-center ul'>
            <img src={img} className="max-w-sm rounded-lg pt-24 w-96" />
            <div className='mysection'>
                <input type="text" ref={searchRef} placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs mb-7" />
                
            </div>
            <button onClick={navigateToResult}  className="btn btn-primary w-20">Search</button>
        </div>
    );
};

export default Search;