import React from 'react';
import img from '../../images/1.png';
import img1 from '../../images/pngegg.png';
import bghome from '../../images/bg_ai.png';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-fit bg-base-100 text-black" style={{ backgroundImage: `url(${bghome})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={img} className="max-w-sm rounded-lg pt-24" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Discover to unleash </h1>
                        <h1 className="text-5xl font-bold pb-10">your potential </h1>
                        <p className="py-6 lg:pr-56 text-xl">An advanced algorithm to find the most relevant sequential resources crawling the web according to your
                            searched topic and compiling them into a personalized playlist that is constantly learning and adapting to your preferences.
                        </p>
                        {/* <img src={img1} className="max-w-sm w-40 pb-10" /> */}
                        <a className="btn text-white my-7">Download</a> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;