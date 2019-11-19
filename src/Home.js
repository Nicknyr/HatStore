import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import FeaturedProducts from './FeaturedProducts';
import AboutSection from './AboutSection';
import Features from './Features';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <FeaturedProducts />
            <Features />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;