import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import './Search.css';
import img from '../../images/search up.png'
import './Search.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Search = () => {
    const [topic, setTopic] = useState([]);
    const [abc, setabc] = useState(true);
    const [usersearch, setusersearch] = useState('');
    const searchRef = useRef('');
    const navigate = useNavigate();
    useEffect( ()=>{
        fetch(`https://khandokeranan.com/projects/findfastai/gpt3/suggestedtopic.php?q=${usersearch}`)
        .then(res=>res.json())
        .then(data=>setTopic(JSON.parse(data)));
},[])
    const subtopicshow = () => {
        setusersearch(searchRef.current.value);
        setabc(false);

        // navigate(`/searchresults/${usersearch}`);
        //navigate('/searchresults');
    }
    const navigateToResult = () => {
        const usersearch = searchRef.current.value;
        console.log(usersearch);

        //navigate(`/searchresults/${usersearch}`);
        navigate('/searchresults');
    }

    return (
        <div className='text-black font-bold text-center ul'>
            <img src={img} className="max-w-sm rounded-lg pt-24 w-96" />
            <div className='mysection'>
                <input type="text" ref={searchRef} placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs mb-7" />

            </div>
            <button onClick={subtopicshow} className="btn btn-primary w-20">Search</button>
            <div className={abc ? "btn-group mt-10 off" : "btn-group mt-10 on"}>
                {
                    topic.map(subtopic=>
                        <input key={subtopic} type="radio" onClick={navigateToResult} name="options" data-title={subtopic} className="btn mr-5 tag" />
                    )
                }
                
            </div>
        </div>
    );
};

export default Search;