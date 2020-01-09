import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import FeaturedProducts from './FeaturedProducts';
import AboutSection from './AboutSection';
import Features from './Features';
import Newsletter from './Newsletter';
import Footer from './Footer';
import SaleProducts from './SaleProducts';
import FeaturedIn from './FeaturedIn';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <FeaturedProducts />
            <Features />
            <SaleProducts />
            <FeaturedIn />
            <Newsletter />
            <Blog />
            <Footer />
        </div>
    );
}

export default Home;