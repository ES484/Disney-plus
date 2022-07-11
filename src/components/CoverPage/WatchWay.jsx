import React from 'react';
import styles from './Cover.module.css'
import Button from './../../common/Button.jsx/Button';
function WatchWay() {
  return (
    <div className={`container ${styles.watchway}`}>
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className='w-100 h-100 pb-sm-5'>
                    <img className='w-100 h-100' src="https://cnbl-cdn.bamgrid.com/assets/b687a9613390c7fa3aae0bf358fd9fe76d9bf143598b40c6c621c16a5e0a9cf5/original" alt="wanda vision" />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div>
                    <h2>Watch the way you want</h2>
                    <ul>
                        <li>Host virtual movie nights with GroupWatch. Pause, rewind and react with up to six personal friends. To invite or be invited to join GroupWatch, subscription is required</li>
                        <li>Download any movie or series and watch on-the-go</li>
                        <li>Keep your family safe with easy parental controls</li>
                        <li>An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices</li>
                        <li>Stream on up to four devices at the same time</li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="text-center pt-3">
                   <Button text="sign up now"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WatchWay