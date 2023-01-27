import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResult = (props) => {
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/searchdetail/${id}`);
    }
    const navigateToSearch = id => {
        navigate("/search");
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <a onClick={() => navigateToServiceDetail(props.idx)} href="#" className="btn">Yay!</a>
                        <a onClick={() => navigateToSearch()} href="#" className="btn">No</a>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="indicator">
                    <span className="indicator-item badge badge-primary">new</span>
                    <div className="grid w-60 h-32 bg-base-300 place-items-center">content</div>
                </div>
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <a href="#my-modal-2" className="btn btn-primary">open modal</a>

                </div>
            </div>
        </div>
    );
};

export default SearchResult;