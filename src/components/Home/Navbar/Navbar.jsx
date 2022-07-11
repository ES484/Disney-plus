import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'firebase/compat/firestore';
import {auth} from '../../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setSignOut } from '../../../features/user/userSlice';

function Navbar() {
  const userName = JSON.parse(localStorage.getItem('userLoginData')).userName;
  const userPhoto = JSON.parse(localStorage.getItem('userLoginData')).userPhoto;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const signOutProcess =()=>{
      auth.signOut().then(()=>{
      dispatch(setSignOut());
      navigate('/');
    }).catch((error)=>console.log(error.message));
  }
  return (
    <React.Fragment>
        <nav className={`navbar navbar-expand-lg navbar-dark shadow-sm ${styles.navBar}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${styles.navBrand} mb-2`} to="/home">
                  <img className='d-block' src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="disney logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.navLinks} align-items-center
                flex-ro`}>
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="movies">
                      <i className="fa-solid fa-house-chimney"></i>home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="tvs">
                      <i className="fa-solid fa-plus"></i>watchlist
                    </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="people">
                    <i className="fa-solid fa-star"></i>People
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="movies">
                      <i className="fa-solid fa-video"></i>movies
                    </Link>
                    </li>
                    <li className={`text-center px-md-5 d-flex ${styles.userProfileDetails}`}>
                      <button onClick={signOutProcess}>Sign Out</button>
                      <img className={styles.profileImg} src={userPhoto} alt={userName} />
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar