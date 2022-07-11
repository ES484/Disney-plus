import React from 'react';
import styles from './Cover.module.css';
import Button from '../../common/Button.jsx/Button';

function MainSection() {
  return (
    <section className={`${styles.mainSection} pt-5`}>
        <div className="container-fluid pt-5 h-100">
            <div className="row">
                <div className="col-12 col-md-6 ps-5 pt-5 text-center">
                    <div className='text-md-start'>
                        <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="disney logo" />
                        <h1>+ More than you'd ever imagine</h1>
                    </div>
                    <div className={`d-md-flex ${styles.join}`}>
                        <div>
                            <h5 className="pb-4">&euro; 8,99<span>/month*</span></h5>
                            <Button text="sign up now"/>
                        </div>
                        <div>
                            <h5>&euro; 89,99<span>/year*</span></h5>
                            <span className='d-block'>Save over 15%.*</span>
                            <Button text="save on 12 months"/>
                        </div>
                    </div>
                    <div className={styles.footnote}>
                        <p>*Subscriber agreement applies. Savings compared to 12 months of the monthly subscription price.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainSection