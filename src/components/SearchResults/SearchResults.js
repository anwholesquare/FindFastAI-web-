import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';
import './SearchResults.css';
const SearchResults = () => {

    const {topicName}=useParams();
    const [searchlist,setSearchlist]=useState([]);

    useEffect( ()=>{
            fetch(`https://khandokeranan.com/projects/findfastai/gpt3/test.php?q=${topicName}`)
            .then(res=>res.json())
            .then(data=>setSearchlist(data["data"]));
    },[]);


    return (
        <div className='text-black'>
            {/* <h1 className='text-2xl text center'>{searchname}</h1> */}
            <h1 className='text-black ml-20 text-4xl p-10'>{topicName}</h1>
            <div className='services-container'>
            {
                searchlist.map(sresult=>
                    <SearchResult
                    key={sresult} name ={sresult}
                    ></SearchResult>
                    )
            };
            </div>
            
        </div>
    );
};

export default SearchResults;
