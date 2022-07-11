import React, {useState} from 'react';
import Deisney from '../../../images/viewers-disney.png';
import marvel from '../../../images/viewers-marvel.png';
import national from '../../../images/viewers-national.png';
import pixar from '../../../images/viewers-pixar.png';
import starwars from '../../../images/viewers-starwars.png';
import styles from './Viewer.module.css';
import disneyVideo from '../../../videos/1564674844-disney.mp4';
import marvelVideo from '../../../videos/1564676115-marvel.mp4';
import nationalVideo from '../../../videos/1564676296-national-geographic.mp4';
import pixarVideo from '../../../videos/1564676714-pixar.mp4';
import starwarsVideo from '../../../videos/1608229455-star-wars.mp4';

function Viewer() {
  return (
    <div className='container-fluid py-5'>
        <div className="row gy-4">
            <div className="col-md-2 offset-md-1">
                <div className={`${styles.viewerImg}`}>
                    <img src={Deisney} alt="Deisney" />
                    <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src={disneyVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="col-md-2">
                <div className={`${styles.viewerImg}`}>
                    <img src={marvel} alt="marvel" />
                    <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src={marvelVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="col-md-2">
                <div className={`${styles.viewerImg}`}>
                    <img src={national} alt="national" />
                    <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src={nationalVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="col-md-2">
                <div className={`${styles.viewerImg}`}>
                    <img src={pixar} alt="pixar" />
                    <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src={pixarVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="col-md-2">
                <div className={`${styles.viewerImg}`}>
                    <img src={starwars} alt="starwars" />
                    <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src={starwarsVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewer