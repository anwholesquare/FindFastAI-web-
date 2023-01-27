import { useEffect, useState } from "react";
import app from "../firebase.init";
import {getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
const auth=getAuth(app);

const googleprovider =new GoogleAuthProvider();
const Usefirebase = ()=> {

    const[user,setUser]= useState({});

    const signInWithGoogle= () =>{
        console.log("signin");
        signInWithPopup(auth,googleprovider)
        .then(result=>{
            const user=result.user;
            setUser(user);
            console.log(user);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
    })

    return{user,signInWithGoogle};
}
export default Usefirebase;