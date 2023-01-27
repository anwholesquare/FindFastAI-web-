import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import './Search.css';
import img from '../../images/search up.png'
import './Search.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Search = () => {
    const [topic, setTopic] = useState([]);
    const [abc, setabc] = useState(true);
    const searchRef = useRef('');
    const navigate = useNavigate();
    let finalTopic = "";

    const searchClick = async (usersearch) => {
        try {
            console.log("Hello");
            const response = await fetch(`https://khandokeranan.com/projects/findfastai/gpt3/suggestedtopic.php?q=${usersearch}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            setTopic(result["data"]);
            console.log(result);
            setabc(false);
        } catch (err) {
        } finally {
        }
    }
    const subtopicshow = () => {
        ;
        searchClick(searchRef.current.value);
        // navigate(`/searchresults/${usersearch}`);
        //navigate('/searchresults');
    }
    const navigateToResult = () => {
        
        navigate('/search');
    }

    const navigateToNext = (topic) => {
        
        navigate(`/search/${topic}`);
    }

    const changer = (topic) => {
        
        finalTopic = topic;
    }

    return (
        <div className='text-black font-bold text-center ul'>
            <img src={img} className="max-w-sm rounded-lg pt-24 w-96" />
            <div className='mysection'>
                <input type="text" ref={searchRef} placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs mb-7" />

            </div>
            <button onClick={subtopicshow} className="btn btn-primary w-20">Search</button>



            <div className={abc ? "btn-group mt-10 off" : "btn-group mt-10 on"}>
                <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <a href="#" onClick={()=>navigateToNext(finalTopic)} className="btn">Yes</a>
                            <a href="#" onClick={()=>navigateToResult()} className="btn">No</a>
                        </div>
                    </div>
                </div>
                {   
                    topic.map(subtopic =>
                        <a type="radio" name="options" key={subtopic} href="#my-modal-2" onClick={changer(subtopic)} className="btn mr-5 tag">{subtopic}</a>
                    )
                }

            </div>
        </div>
    );
};

export default Search;