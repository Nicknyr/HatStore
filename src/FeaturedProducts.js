import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Hat1 from './assets/hat1.jpg';
import Hat2Blue from './assets/hat2-blue.jpg';
import Hat2Grey from './assets/hat2-grey.jpg';
import Hat2 from './assets/hat2.jpg';

const STYLES = styled.div`
    //border: 5px solid goldenrod;
    //font-family: 'Arapey', serif;
    font-family: 'Roboto', sans-serif;

    p {
        font-size: .6em;
    }

    h3 {
        margin: .3em;
    }

    h2 {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 1em;
        font-family: 'Arapey', serif;
        font-size: 2.2em;
    }

    .container {
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: space-around;
    }

    .featured-item {
        height: auto;
        flex-basis: 33%;
        font-size: 2em;
        border: 2px solid goldenrod;
        margin-bottom: 1em;
    }

    .options-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .color-options {
        height: 25px;
        width: 25px;
        background: red;
        margin: .2em;
    }

    @media(max-width: 500px) {
        .featured-item {
            flex-basis: 100%;
        }
    }
`;


class FeaturedProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return(
            <STYLES>
                <h2>Featured Products</h2>
                <div className="container">
                   <div className="featured-item item-1">
                       <img src={Hat1} height="100"/>
                       <h3>Hat One</h3>
                       <p>$40</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                       </div>
                   </div>
                   <div className="featured-item item-2">
                       <img src={Hat2} height="100" />
                       <h3>Hat Two</h3>
                       <p>$45</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                       </div>
                   </div>
                   <div className="featured-item item-3">
                       <img src={Hat2Blue} height="100" />
                       <h3>Hat One</h3>
                       <p>$50</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                       </div>
                   </div>
                   <div className="featured-item item-4">
                       <img src={Hat2Grey} height="100" />
                       <h3>Hat Three</h3>
                       <p>$70</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                       </div>
                   </div>
                   <div className="featured-item item-5">
                        <img src={Hat1} height="100"/>
                        <h3>Hat Four</h3>
                        <p>$50</p>
                        <div className="options-container">
                             <div className="color-options"></div>
                        </div>
                   </div>
                   <div className="featured-item item-6">
                        <img src={Hat2Blue} height="100" />
                        <h3>Hat Five</h3>
                        <p>$75</p>
                        <div className="options-container">
                                <div className="color-options"></div>
                                <div className="color-options"></div>
                        </div>
                   </div>
                </div>
            </STYLES>
        );
    }
}

export default FeaturedProducts;
