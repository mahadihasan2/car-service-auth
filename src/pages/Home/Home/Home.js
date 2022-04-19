import React from 'react';
import { Helmet } from 'react-helmet-async';
import Mylocation from '../../Mylocation/Mylocation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Experts from './Experts/Experts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Mylocation></Mylocation>
        </div>
    );
};

export default Home;