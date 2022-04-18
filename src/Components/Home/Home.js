import React from 'react';
import Banner from '../Banner/Banner';
import HealthCoach from '../HealthCoach/HealthCoach';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HealthCoach></HealthCoach>
        </div>
    );
};

export default Home;