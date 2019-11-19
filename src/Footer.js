import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Arapey|Roboto:400,500&display=swap');
    //font-family: 'Arapey', serif;
    //font-family: 'Roboto', sans-serif;
    height: auto;
    width: 100%;
    background: #191716;
    color: snow;

    .container {
        display: flex;
        height: auto;
        width: 100%;
        flex-wrap: wrap;
    }

    .section {
        flex: 1;
    }

    .section-ul {
        list-style-type: none;
        margin-top: 5em;
        //border: 2px solid yellowgreen;
        text-align: center;

        h3 {
            font-family: 'Arapey', serif;
            text-transform: uppercase;
            margin-bottom: 1.5em;
            font-size: 1.1em;
            text-align: center;
            color: #30BCED;
        }

        li {
            font-family: 'Roboto', sans-serif;
            margin: .5em;
            text-align: center;
            font-size: 1em;
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
                <div className="container">
                    <div className="section">
                        <ul className="section-ul">
                            <li className="sections-li">
                                <h3>Products</h3>
                            </li>
                            <li className="sections-li">Collections</li>
                            <li className="sections-li">Types of Hats</li>
                            <li className="sections-li">Gifts</li>
                            <li className="sections-li">Current Sales</li>
                            <li className="sections-li">Most Popular</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul className="section-ul">
                            <li className="sections-li">
                                <li className="sections-li">
                                    <h3>Our Company</h3>
                                </li>
                                <li className="sections-li">About Us</li>
                                <li className="sections-li">Deliveries</li>
                                <li className="sections-li">Returns</li>
                                <li className="sections-li">Careers</li>
                                <li className="sections-li">Contact Us</li>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul className="section-ul">
                            <li className="sections-li">
                                <h3>Your Acconut</h3>
                            </li>
                            <li className="sections-li">Account Info</li>
                            <li className="sections-li">Returns</li>
                            <li className="sections-li">Gift Cards</li>
                            <li className="sections-li">Shopping Cart</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul className="section-ul">
                            <li className="sections-li">
                                <h3>Social</h3>
                            </li>
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