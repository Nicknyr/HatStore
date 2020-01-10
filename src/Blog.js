import React from 'react';
import styled, { css } from 'styled-components';
import H2 from './H2Section';
import BKBridge from './assets/blog/bkbridge.png';
import Snow from './assets/blog/snow.png';
import Suit from './assets/blog/suit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    font-family: 'Roboto', sans-serif;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5em;

    img {
        transition: .3s;
        z-index: -999;

        &:hover {
            filter: brightness(50%);
            z-index: -999;
        }
    }

    button {
        height: 2.2em;
        width: 7em;
        border: 1px solid snow;
        font-size: 18px;
        position: relative;
        top: -300px;
        left: 0px;
        background: transparent;
        color: snow;
        font-weight: 200;
        cursor: pointer;

        &:hover {
            background: snow;
            color: black;
        }
    }


    .blog-item-container {
        display: flex;
        justify-content: space-around;
    }

    .blog-item {
        margin: 2em;
    }

    // Animates button on hover
    .blog-item:hover button {
        transition: all .3s;
        transform: translate(0, 150px);
    }

    .blog-info {
        //background: red;
        //padding-top: .1em;
        text-align: left;
        color: #838383;

        a {
            text-decoration: none;
            font-size: 1.2em;
        }

        h3 {
            padding-bottom: .2em;
            color: black;
            font-weight: 500;

            &:hover {
                color: #4ECDC4;
            }
        }

        p {
            font-size: .9em;
            line-height: 1.4;
        }
    }

    .details {
        //height: 5em;
        display: flex;
    }

    .fa-md {
        padding-right: .5em;
        color: #838383;

        &:hover {
            color: black;
        }
    }

    .details-items {
        padding-top: .5em;
        padding-right: 1em;
        padding-bottom: .5em;

        &:hover {
            color: black;
        }

        .fa-md {
        padding-right: .5em;
        color: #838383;

        &:hover {
            color: black;
        }
    }
    }

   
`;


const Blog = () => {
    return(
        <STYLES>
             <div className="container">
                <H2 title="Blog" />
                <div className="blog-item-container">
                    <div className="blog-item">
                        <img src={Suit} width="350" height="250"/>
                        <button className="mybutton">READ MORE</button>
                        <div className="blog-info">
                            <a href="#"><h3>Style Tips</h3></a>
                            <div className="details">
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'calendar-alt'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>January 8th</span>
                                </div>
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'pen-square'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>Nick</span>
                                </div>
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'comments'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>3</span>
                                </div>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque. Purus in mollis nunc sed.
                            </p>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src={Snow} width="350" height="250"/>
                        <button className="mybutton">READ MORE</button>
                        <div className="blog-info">
                            <a href="#"><h3>Winter Fashion</h3></a>
                            <div className="details">
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'calendar-alt'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>November 23rd</span>
                                </div>
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'pen-square'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>Nick</span>
                                </div>
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'comments'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>3</span>
                                </div>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit. Sit amet purus gravida quis blandit turpis cursus in. Diam sollicitudin tempor id eu nisl nunc mi ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src={BKBridge} width="350" height="250"/>
                        <button className="mybutton">READ MORE</button>
                        <div className="blog-info">
                            <a href="#"><h3>NYC Store</h3></a>
                            <div className="details">
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'calendar-alt'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>September 17th</span>
                                </div>
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'pen-square'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>Nick</span>
                                </div>
                                <div className="details-items">
                                    <FontAwesomeIcon
                                        icon={'comments'}
                                        size="md"
                                        color="#333"
                                    />
                                    <span>3</span>
                                </div>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </STYLES>
    );
}

export default Blog;