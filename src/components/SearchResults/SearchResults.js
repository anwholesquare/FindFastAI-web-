import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';
import './SearchResults.css';
const SearchResults = () => {

    // const {searchname}=useParams();
    const [searchlist,setSearchlist]=useState([]);

    useEffect( ()=>{
            fetch('searchs.json')
            .then(res=>res.json())
            .then(data=>setSearchlist(data));
    },[])


    return (
        <div className='text-black'>
            {/* <h1 className='text-2xl text center'>{searchname}</h1> */}
            <h1 className='text-black ml-20'>Searchlist: {searchlist.length}</h1>

            <div className='services-container'>
            {
                searchlist.map(sresult=>
                    <SearchResult
                    key={sresult.id}
                    idx = {sresult.id}
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
