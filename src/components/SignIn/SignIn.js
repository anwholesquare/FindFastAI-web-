import React from 'react';
import gl from '../../google-logo-9824.png';
const SignIn = () => {
    return (
        <div className="w-full p-6 bg-white rounded-md shadow-2xl lg:max-w-xl text-black mt-60 mx-auto my-auto">
            <h1 className="text-3xl font-semibold text-center uppercase" style={{color:"#4D4CFF"}}>Sign in</h1>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            </div>
            <div className="flex mt-4 gap-x-2">
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                >
                   <img src={gl} className="max-w-sm rounded-lg w-10" /><p className='ml-2'>Sign in with google</p>
                </button>
            </div>
        </div>
    );
};

export default SignIn;