import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import 'firebase/compat/firestore';
import {auth} from '../../firebase';
import { useDispatch } from 'react-redux';
import styles from './Cover.module.css';
import { setUserLoginDetails } from '../../features/user/userSlice';
import Navbar from './../Home/Navbar/Navbar';


function Login() {
  const [user,setUser]=useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();
   const signInWithGoogle = ()=>{
    const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth,googleProvider)
    .then((result) =>{
      dispatch(setUserLoginDetails({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      }));
      setUser(result.user)
      navigate('/home');
    })
    .catch((error)=>{
      console.log(error.message);
    });
  }
  return (
    <>
    {JSON.parse(localStorage.getItem('userLoginData'))===null? <div className='pt-3 d-flex flex-row-reverse pe-3'>
    <button className={`${styles.login} text-white text-decoration-none`}
    onClick={signInWithGoogle}
    >log in</button>
  </div>:<Navbar/>}
  </>
  )
}

export default Login;