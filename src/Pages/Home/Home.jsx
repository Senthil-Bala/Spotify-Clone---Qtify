import React from 'react'
// import HeroImages from '../../Components/HeroImage/HeroImage';
import HeroImage from '../../Components/HeroImages/HeroImage';
import Albums from '../../Components/Albums/Albums';
import Footer from '../../Components/Footer/Footer';
import MusicPlayer from '../../Components/MuiscPlayer/MusicPlayer';

const Home = () => {
    return (
        <div>   
            <HeroImage />
            <Albums />
            <Footer />
            <MusicPlayer />
        </div>
    )
}

export default Home