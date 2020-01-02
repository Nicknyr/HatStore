import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Hat1 from './assets/hat1.jpg';
import Hat2Blue from './assets/hat2-blue.jpg';
import Hat2Grey from './assets/hat2-grey.jpg';
import Hat2 from './assets/hat2.jpg';
import Hat2BlueColor from './assets/hat2/blue.png';
import Hat2BrownColor from './assets/hat2/brown.png';
import Hat2GreyColor from './assets/hat2/grey.png';
import Hat3 from './assets/hat3/hat3.png';
import Hat3Checkered from './assets/hat3/hat3-checkered.png';
import Hat3Dark from './assets/hat3/hat3dark.png';
import Hat4Grey from './assets/hat4/hat4grey.png';
import Hat4Check from './assets/hat4/hat4check.png';
import FeaturedItem from './FeaturedItem';

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
        padding-left: 2em;
        padding-right: 2em;
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

    #Hat4Grey {
        background-image: url(${Hat4Grey});
    }

    #Hat4Check {
        background-image: url(${Hat4Check});
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
            hat2: {
                hatImg: Hat2,
                hatPrice: '$50',
                hatName: 'Hat Two'
            },
            hat3: {
                hatImg: Hat3,
                hatPrice: '$40',
                hatName: 'Hat Three'
            },
            hat4: {
                hatImg: Hat4Grey,
                hatPrice: '$60',
                hatName: 'Hat Four'
            }
        };
    }

    handleColorOptionClicked = (e) => {
        console.log('e.target is : ' + e.target);
        this.setState({
            hat2: e.target.id,
            hat3: e.target.id,
            hat4: e.target.id
        })
    }

    handleMouseEnter = (e) => {
        this.setState({
            hat2: e.target.id,
            hat3: e.target.id,
            hat4: e.target.id
        })
    }

    render() {
        console.log(this.state.hat2)
        return(
            <STYLES>
                <h2>Featured Products</h2>
                <div className="container">
                    {/*
                   <div className="featured-item item-1">
                       {this.state.hat3 === "Hat3" ?
                            <img src={Hat3} height="150" />
                       : null }
                       {this.state.hat3 === "Hat3Checkered" ?
                            <img src={Hat3Checkered} height="150" />
                       : null}
                       {this.state.hat3 === "Hat3Dark" ?
                            <img src={Hat3Dark} height="150" />
                       : null}
                       <h3>Hat One</h3>
                       <p>$40</p>
                       <div className="options-container">
                            <div 
                                className="color-options"
                                id="Hat3"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}>
                            </div>
                            <div 
                                className="color-options"
                                id="Hat3Checkered"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}>
                            </div>
                            <div 
                                className="color-options"
                                id="Hat3Dark"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}>
                            </div>
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
                        <a href="http://localhost:3000/product">
                            {this.state.hat4 === "Hat4Grey" ?
                                    <img src={Hat4Grey} height="150" />
                            : null}
                            {this.state.hat4 === "Hat4Check" ?
                                    <img src={Hat4Check} height="150" />
                            : null}
                       </a>
                       <h3>Hat 4</h3>
                       <p>$50</p>
                       <div className="options-container">
                            <div 
                                className="color-options"
                                id="Hat4Grey"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}  
                              >
                            </div>
                            <div 
                                className="color-options"
                                id="Hat4Check"
                                onClick={(e) => this.handleColorOptionClicked(e)}
                                onMouseEnter={this.handleMouseEnter}
                            >
                            </div>
                       </div>
                   </div>
                    */}
                   <FeaturedItem 
                        hatImg={this.state.hat2.hatImg}
                        hatPrice={this.state.hat2.hatPrice}
                        hatName={this.state.hat2.hatName} 
                    />
                   <FeaturedItem 
                        hatImg={this.state.hat3.hatImg}
                        hatPrice={this.state.hat3.hatPrice}
                        hatName={this.state.hat3.hatName} 
                    />
                    <FeaturedItem 
                        hatImg={this.state.hat4.hatImg}
                        hatPrice={this.state.hat4.hatPrice}
                        hatName={this.state.hat4.hatName} 
                    />
                </div>
            </STYLES>
        );
    }
}

export default FeaturedProducts;
