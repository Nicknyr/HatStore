import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Logo from './assets/logo.png';


const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Arapey|Roboto:400,500&display=swap');
    //font-family: 'Arapey', serif;
    //font-family: 'Roboto', sans-serif;
    height: auto;
    width: 100%;
    //background: #191716;
    background: #333333;
    color: snow;

    .container {
        display: flex;
        //height: auto;
        width: 80%;
        flex-wrap: wrap;
        margin: auto;
    }

    .section {
        display: flex;
        flex: 1;
        justify-content: space-around;
        //background: red;
        //border: 5px solid green;
        margin-bottom: 5em;
        margin-top: 5em;
    }

    .section-ul {
        list-style-type: none;
        //margin-top: 2em;
        //border: 2px solid yellowgreen;
        //text-align: center;

        h3 {
            font-family: 'Arapey', serif;
            text-transform: uppercase;
            margin-bottom: 1.5em;
            font-size: 1.2em;
            text-align: center;
            //color: #30BCED;
            color: #EEF1EF;
            font-weight: bold;
        }

        li {
            font-family: 'Roboto', sans-serif;
            margin: .7em;
            text-align: left;
            font-size: 1em;
            line-height: 1.2;
            font-size: .9em;
            color: #F7F7F7;

            &:hover {
                color: #4ECDC4;
            }
        }
    }

    .social-ul {
        display: inline-block;

        li {
            display: inline !important;
            margin: .5em !important;
            font-size: 1em !important;
        }

        .fa-2x {
            color: #4ECDC4;

            &:hover {
                color: #F7F7F7;
            }
        }
    }

    .grow { transition: all .2s ease-in-out; }
    .grow:hover { transform: scale(1.2); }

    .logo-container {
        //background: pink;
        height: 12em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 500px) {
        .container {
            flex-direction: column;
        }

        .section {
            margin-top: 2em;
        }
    }

`;

class Footer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }
    render() {
        return (
            <STYLES>
            <footer>
                <div className="logo-container">
                    <FontAwesomeIcon
                        icon={['fab', 'redhat']}
                        size="4x"
                        color="#4ECDC4"
                    />
                </div>
                <div className="container">
                    <div className="section">
                        <ul className="section-ul">
                            <h3>Products</h3>
                            <li className="sections-li grow">Collections</li>
                            <li className="sections-li grow">Types of Hats</li>
                            <li className="sections-li grow">Gifts</li>
                            <li className="sections-li grow">Current Sales</li>
                            <li className="sections-li grow">Most Popular</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul className="section-ul">
                            <h3>Our Company</h3>
                            <li className="sections-li grow">About Us</li>
                            <li className="sections-li grow">Deliveries</li>
                            <li className="sections-li grow">Returns</li>
                            <li className="sections-li grow">Careers</li>
                            <li className="sections-li grow">Contact Us</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul className="section-ul">
                            <h3>Your Acconut</h3>
                            <li className="sections-li grow">Account Info</li>
                            <li className="sections-li grow">Returns</li>
                            <li className="sections-li grow">Gift Cards</li>
                            <li className="sections-li grow">Shopping Cart</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul className="section-ul social-ul">
                            <h3>Social</h3>
                            <li className="sections-li">
                                <FontAwesomeIcon
                                    icon={['fab', 'instagram']}
                                    size="2x"
                                    color="#92A2B1"
                                />
                            </li>
                            <li className="sections-li">
                                <FontAwesomeIcon
                                    icon={['fab', 'facebook-square']}
                                    size="2x"
                                    color="#92A2B1"
                                />
                            </li>
                            <li className="sections-li">
                                <FontAwesomeIcon
                                    icon={['fab', 'twitter-square']}
                                    size="2x"
                                    color="#92A2B1"
                                />
                            </li>
                        </ul>
                    </div>
                    
                </div>
                </footer>
            </STYLES>
        );
    }
}

export default Footer;





/*

                    <FontAwesomeIcon 
                        icon="comment" 
                        size="2x"
                        color="red"
                    /> 
                    <FontAwesomeIcon 
                        icon="thumbs-up" 
                        size="2x"
                        color="red"
                    /> 
                    <FontAwesomeIcon 
                        icon="star" 
                        size="2x"
                        color="red"
                    /> 
                    <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    size="2x"
                    color="#92A2B1"
                  />
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-square']}
                    size="2x"
                    color="#92A2B1"
                    />
                    <FontAwesomeIcon
                    icon={['fab', 'twitter-square']}
                    size="2x"
                    color="#92A2B1"
                    />
                    */