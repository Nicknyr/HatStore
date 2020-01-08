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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeaturedIn from './FeaturedIn';

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

    .h2-container {
        margin-top: 4em;
        margin-bottom: 4em;

        h2 {
            display: flex;
            justify-content: center;
            align-content: center;
            //padding: 2.5em;
            font-family: 'Arapey', serif;
            font-size: 2.1em;
            text-transform: uppercase;
        }

        .fa-xs, .fa-sm {
            margin: .5em;
            display: inline;
            padding-top: .3em;
        }

        .fa-xs {
            font-size: 9px;
        }

        .fa-sm {
            font-size: 11px;
        }

        .hr-right {
            width: 40px;
            position: relative;
            display: inline-block;
            left: 110px;
            border: none;
            height: 1px;
            background-color: #333;
        }

        .hr-left {
            width: 40px;
            position: relative;
            display: inline-block;
            right: 110px;
            border: none;
            height: 1px;
            background-color: #333;
        }
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

    .featured-in {
        height: 10em;
        width: 100%;
        background-color: #F0F0F0;
        margin: 0 auto;
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
                img: {
                    hat2: Hat2,
                    hat2Grey: Hat2Grey,
                    hat2Blue: Hat2Blue
                },
                colors: {
                    Hat2BlueColor,
                    Hat2BrownColor
                },
                price: '$50',
                name: 'Hat Two'
            },
            hat3: {
                img: Hat3,
                colors: {
                    Hat2BlueColor,
                    Hat2BrownColor
                },
                price: '$40',
                name: 'Hat Three'
            },
            hat4: {
                img: Hat4Grey,
                colors: {
                    Hat2BlueColor,
                    Hat2BrownColor
                },
                price: '$60',
                name: 'Hat Four'
            }
        };
    }

    handleColorOptionClicked = (e) => {
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
        //console.log(this.state.hat2)
        return(
            <STYLES>
                <div className="h2-container">
                    <h2>Featured Products</h2>
                    <hr className="hr-right"/>
                    <FontAwesomeIcon
                        icon={'star'}
                        size="xs"
                        color="#333"
                    />
                    <FontAwesomeIcon
                        icon={'star'}
                        size="sm"
                        color="#333"
                    />
                    <FontAwesomeIcon
                        icon={'star'}
                        size="xs"
                        color="#333"
                    />
                    <hr className="hr-left"/>
                </div>
                <div className="container">
                   <FeaturedItem 
                        img={this.state.hat2.img.hat2}
                        price={this.state.hat2.price}
                        name={this.state.hat2.name} 
                        handleMouseEnter={this.handleMouseEnter}
                        handleColorOptionClicked={(e) => this.handleColorOptionClicked(e)}
                        colorOption1={this.state.hat2.colors.Hat2BlueColor}
                        colorOption2={this.state.hat2.colors.Hat2BrownColor}
                    />
                   <FeaturedItem 
                        img={this.state.hat3.img}
                        price={this.state.hat3.price}
                        name={this.state.hat3.name} 
                        handleMouseEnter={this.handleMouseEnter}
                        handleColorOptionClicked={(e) => this.handleColorOptionClicked(e)}
                        colorOption1={this.state.hat2.colors.Hat2BlueColor}
                        colorOption2={this.state.hat2.colors.Hat2BrownColor}
                    />
                    <FeaturedItem 
                        img={this.state.hat4.img}
                        price={this.state.hat4.price}
                        name={this.state.hat4.name} 
                        handleMouseEnter={this.handleMouseEnter}
                        handleColorOptionClicked={(e) => this.handleColorOptionClicked(e)}
                        colorOption1={this.state.hat2.colors.Hat2BlueColor}
                        colorOption2={this.state.hat2.colors.Hat2BrownColor}
                    />
                </div>
                <div className="container">
                   <FeaturedItem 
                        img={this.state.hat2.img.hat2}
                        price={this.state.hat2.price}
                        name={this.state.hat2.name} 
                        handleMouseEnter={this.handleMouseEnter}
                        handleColorOptionClicked={(e) => this.handleColorOptionClicked(e)}
                        colorOption1={this.state.hat2.colors.Hat2BlueColor}
                        colorOption2={this.state.hat2.colors.Hat2BrownColor}
                    />
                   <FeaturedItem 
                        img={this.state.hat3.img}
                        price={this.state.hat3.price}
                        name={this.state.hat3.name} 
                        handleMouseEnter={this.handleMouseEnter}
                        handleColorOptionClicked={(e) => this.handleColorOptionClicked(e)}
                        colorOption1={this.state.hat2.colors.Hat2BlueColor}
                        colorOption2={this.state.hat2.colors.Hat2BrownColor}
                    />
                    <FeaturedItem 
                        img={this.state.hat4.img}
                        price={this.state.hat4.price}
                        name={this.state.hat4.name} 
                        handleMouseEnter={this.handleMouseEnter}
                        handleColorOptionClicked={(e) => this.handleColorOptionClicked(e)}
                        colorOption1={this.state.hat2.colors.Hat2BlueColor}
                        colorOption2={this.state.hat2.colors.Hat2BrownColor}
                    />
                </div>
                <FeaturedIn />
            </STYLES>
        );
    }
}

export default FeaturedProducts;

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
                    */}