import { useEffect, useState } from "react";
import app from "../firebase.init";
import {getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
const auth=getAuth(app);

const googleprovider =new GoogleAuthProvider();
const Usefirebase = ()=> {

    const navigate = useNavigate();
    const[user,setUser]= useState({});

    const signInWithGoogle= () =>{
        console.log("signin");
        signInWithPopup(auth,googleprovider)
        .then(result=>{
            const user=result.user;
            setUser(user);
            navigate("/search");
        })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{

        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
    })

    return{user,signInWithGoogle,handleSignOut};
}
export default Usefirebase;