import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Hat1 from './assets/hat1.jpg';
import Hat2Blue from './assets/hat2-blue.jpg';
import Hat2Grey from './assets/hat2-grey.jpg';
import Hat2 from './assets/hat2.jpg';
import Hat2BlueColor from './assets/hat2/blue.png';
import Hat2BrownColor from './assets/hat2/brown.png';
import Hat2GreyColor from './assets/hat2/grey.png';

const STYLES = styled.div`
    //border: 5px solid goldenrod;
    //font-family: 'Arapey', serif;
    font-family: 'Roboto', sans-serif;

    p {
        font-size: .5em;
    }

    h3 {
        margin: .5em;
        font-size: .7em;
    }

    h2 {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 2.5em;
        font-family: 'Arapey', serif;
        font-size: 2.4em;
        text-transform: uppercase;
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
        flex-basis: 25%;
        font-size: 2em;
        //border: 2px solid goldenrod;
        margin-bottom: 2em;
    }

    .options-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .color-options {
        height: 20px;
        width: 20px;
        border: 1px solid black;
        margin: .5em .2em;
        background-size: cover;
    }

    #Hat2Brown {
        background-image: url(${Hat2BrownColor});
    }

    #Hat2Blue {
        background-image: url(${Hat2BlueColor});
    }

    #Hat2Grey {
        background-image: url(${Hat2GreyColor});
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
            hat2: 'Hat2Brown'
        };
    }

    handleColorOptionClicked = (e) => {
        this.setState({
            hat2: e.target.id
        })
    }

    handleMouseEnter = (e) => {
        this.setState({
            hat2: e.target.id
        })
    }

    render() {
        console.log(this.state.hat2)
        return(
            <STYLES>
                <h2>Featured Products</h2>
                <div className="container">
                   <div className="featured-item item-1">
                       <img src={Hat1} height="150"/>
                       <h3>Hat One</h3>
                       <p>$40</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                       </div>
                   </div>
                   <div className="featured-item item-2">
                       <a href="http://localhost:3000/product">
                        {this.state.hat2 === "Hat2Brown" ?
                                <img src={Hat2} height="150" />
                        : null}
                        {this.state.hat2 === "Hat2Blue" ?
                                <img src={Hat2Blue} height="150" />
                        : null}
                        {this.state.hat2 === "Hat2Grey" ?
                                <img src={Hat2Grey} height="150" />
                        : null}
                       </a>
                       <h3>Hat Two</h3>
                       <p>$45</p>
                       <div className="options-container">
                             <div 
                                className="color-options"
                                id="Hat2Brown"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}  
                              >
                            </div>
                            <div 
                                className="color-options"
                                id="Hat2Blue"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}
                            >
                            </div>
                            <div 
                                className="color-options"
                                id="Hat2Grey"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}    
                            >
                            </div>
                       </div>
                   </div>
                   <div className="featured-item item-3">
                       <img src={Hat2Blue} height="150" />
                       <h3>Hat One</h3>
                       <p>$50</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                       </div>
                   </div>
                   <div className="featured-item item-4">
                       <img src={Hat2Grey} height="150" />
                       <h3>Hat Three</h3>
                       <p>$70</p>
                       <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                        </div>
                   </div>
                   <div className="featured-item item-5">
                        <img src={Hat1} height="150"/>
                        <h3>Hat Four</h3>
                        <p>$50</p>
                        <div className="options-container">
                             <div className="color-options"></div>
                        </div>
                   </div>
                   <div className="featured-item item-6">
                        <img src={Hat2Blue} height="150" />
                        <h3>Hat Five</h3>
                        <p>$75</p>
                        <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                        </div>
                   </div>
                   <div className="featured-item item-7">
                        <img src={Hat2Blue} height="150" />
                        <h3>Hat Seven</h3>
                        <p>$70</p>
                        <div className="options-container">
                            <div className="color-options"></div>
                            <div className="color-options"></div>
                        </div>
                   </div>
                   <div className="featured-item item-8">
                        <img src={Hat2Blue} height="150" />
                        <h3>Hat Eight</h3>
                        <p>$55</p>
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
