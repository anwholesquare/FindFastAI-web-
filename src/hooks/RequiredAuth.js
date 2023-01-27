import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../firebase.init';
import Usefirebase from './Usefirebase';


const auth=getAuth(app);
const RequiredAuth = ({children}) => {
    
    const [user]=Usefirebase();
    const location=useLocation();
    if(!user){
        <Navigate to='/signin' state={{from:location}}></Navigate>
    }
    return children;
};

export default RequiredAuth;