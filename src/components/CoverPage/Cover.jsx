import React from 'react'
import AvailabeInDevices from './AvailabeInDevices';
import Footer from './Footer';
import FrequentlyQ from './FrequentlyQ';
import MainSection from './MainSection';
import WatchWay from './WatchWay';

function Home() {
  return (
    <React.Fragment>
        <MainSection/>
        <WatchWay/>
        <AvailabeInDevices/>
        <FrequentlyQ/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home