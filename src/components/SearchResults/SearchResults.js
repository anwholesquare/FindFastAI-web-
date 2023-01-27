import React, { useEffect, useState } from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './SearchResults.css';
const SearchResults = () => {

    const [searchlist,setSearchlist]=useState([]);

    useEffect( ()=>{
            fetch('searchs.json')
            .then(res=>res.json())
            .then(data=>setSearchlist(data));
    },[])
    return (
        <div className='text-black'>
            <h1 className='text-black text-center'>Searchlist: {searchlist.length}</h1>

            <div className='services-container'>
            {
                searchlist.map(sresult=>
                    <SearchResult
                    key={sresult.id}
                    name={sresult.name} day={sresult.day}
                    description={sresult.description} >
                </SearchResult>
                    )
            }
            </div>
        </div>
    );
};

export default SearchResults;
