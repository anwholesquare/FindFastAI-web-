import React, { useEffect, useState } from 'react';

const SearchResult = () => {

    const [searchlist,setSearchlist]=useState([]);

    useEffect( ()=>{
            fetch('searchs.json')
            .then(res=>res.json())
            .then(data=>setSearchlist(data));
    },[])
    return (
        <div>
            <h1 className='text-black'>Searchlist: {searchlist.length}</h1>
        </div>
    );
};

export default SearchResult;


/***
 * 
 * <div className='grid grid-cols-4 gap-4'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
 * 
 */