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
import H2 from './H2Section';

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

        .hr {
            width: 40px;
            position: relative;
            display: inline-block;
            border: none;
            height: 1px;
            background-color: #333;
            z-index: -999;
        }

        .hr-right {
            left: 110px;
        }

        .hr-left {
            right: 110px;
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


class SaleProducts extends Component {
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
        return(
            <STYLES>
                <H2 title="On Sale" />
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
            </STYLES>
        );
    }
}

export default SaleProducts;