import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Hat1 from './assets/hat1.jpg';
import Logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClickHandler from 'react-outside-click-handler';
import NavbarHoverMenu from './NavbarHoverMenu';
//import HamburgerMenu from './HamburgerMenu';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Arapey|Roboto:400,500&display=swap');
    //font-family: 'Arapey', serif;
    //font-family: 'Roboto', sans-serif;
    font-family: 'Roboto', sans-serif;
    background: snow;
    position: fixed;
    width: 100%;
    display: flex;


    h1, h2, h3, h4, h5 {
        font-family: 'Arapey', serif;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        height: 5em;
        width: 100%;
        position: fixed;
        background: snow;  
        z-index: 99;
        //border-top: 3px solid #FFA400;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 1em;
    }

    .nav {
        display: flex;
        flex: 5;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: black;
        margin: 0;
        padding: 0;
        //margin-left: auto;
        margin-right: 7em;
        
        li {
            display: inline-block;
            font-size: 1.2em;
            text-transform: uppercase;
            margin-left: 1.5em;
            margin-right: 1.5em;
        }
    }

    .nav-link  {
        a {
            color: black;
            text-decoration: none;
            font-family: 'Arapey', serif;

            &:hover {
                color: lightgrey;
            }
        }
    }

    .hover-menu {
        height: auto;
        width: 100%;
        color: black;
        background: snow;
        border: 1px solid lightgrey;
        position: absolute;
        z-index: 100;
        margin-top: 5em;
    }

    .hover-ul {
        display: flex;
        padding: 0;
        margin: 1em;
    }

    .hover-li {
        flex: 1;
        list-style-type: none;
        //background: red;

        h3 {
            font-size: 1.6em;
            font-weight: 500;
            margin-top: .5em;
            margin-bottom: 1em;
            font-weight: 500;
        }
        
        a {
            margin: 3em;
            text-decoration: none;

            &:hover {
                font-size: 1.1em;
            }
        }
    }

    .grow { transition: all .2s ease-in-out; }
    .grow:hover { transform: scale(1.2); }

    .hover-ul-items {
        list-style-type: none;
        padding: 0;
        margin: 1em;

        li {
            margin: 1em;
        }

        a {
            color: #000;
            text-decoration: none;
        }
    }

    .hover-preview-image {
        display: flex;
        flex: 1;
        //background: blue;
        justify-content: center;
    }

    .hamburger {
        display: none;
    }

    @media(max-width: 500px) {
        .nav {
            display: none;
        }

        .navbar {
            justify-content: space-between;
        }

        .hamburger {
            //background: red;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1em;
        }

        .hamburger-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80vh;
            width: 100%;
            background: #181715;
            font-family: 'Arapey', serif;

            ul {
                width: 100%;
                margin-top: 3em;
                text-align: center;

                li {
                    display: block;
                    margin-top: 4em;

                    a {
                        text-decoration: none;
                        font-size: 1.8em;
                        color: snow;
                    }
                }
            }
        }
        
    }
   
`;

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverMenu: false,
            hamburgerMenuOpen: false,
            hatToShow: {
                hat1: Hat1
            }
        };
    }

    hi = () => {
        alert("Hi!");
    }

    handleMouseHover = () => {
        this.setState(this.hover);
    }

    hover = () => {
        this.setState({
            hoverMenu: !this.state.hoverMenu
        })
    }

    handleHamburgerClick = () => {
        //alert("hamburger clicked");
        this.setState({
            hamburgerMenuOpen: !this.state.hamburgerMenuOpen
        })
    }

    render() {
        console.log(this.state.hoverMenu);
        return (
            <STYLES>
                <navbar className="navbar">
                    <div className="logo">
                        <a href="http://localhost:3000">
                            <img src={Logo} height="40" />
                        </a>
                    </div>
                        <ul className="nav">
                            <li className="nav-link" onMouseEnter={this.hover} >
                                <a href="#">Shop</a>
                            </li>
                            <li className="nav-link" >
                                <a href="http://localhost:3000/about">About Us</a>
                            </li>
                            <li className="nav-link" >
                                <a href="#">Sales</a>
                            </li>
                        </ul>
                        <div 
                            className="hamburger"
                            onClick={this.handleHamburgerClick}
                        >
                            <FontAwesomeIcon
                                icon="bars"
                                size="3x"
                                color="black"
                            />
                        </div>
                </navbar>
                { this.state.hamburgerMenuOpen ?
                    <div className="hamburger-menu">
                        <ul>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Sales</a>
                            </li>
                        </ul>
                    </div>
                : null }
                {/* Hover Menu */ }
                {this.state.hoverMenu ? 
                    <NavbarHoverMenu 
                        onHover={this.hover}
                        hatToShow={this.state.hatToShow}
                        onLinkHover={this.hi}
                    />
                : null}
            </STYLES>
        );
    }
}

export default Navbar;





{/*
                    <div className="hover-menu" onMouseLeave={this.hover}>
                        <ul className="hover-ul">
                            <li className="hover-li">
                                <h3>Hats</h3>
                                <ul className="hover-ul-items">
                                    <li className="grow">
                                       <a href="#">Hat 1</a>
                                    </li>
                                    <li className="grow">
                                       <a href="#">Hat 2</a>
                                    </li>
                                    <li className="grow">
                                       <a href="#">Hat 3</a>
                                    </li>
                                    <li className="grow">
                                       <a href="#">Hat 4</a>
                                    </li>
                                    <li className="grow">
                                       <a href="#">Hat 5</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="hover-li">
                                <h3>Collections</h3>
                                <ul className="hover-ul-items">
                                    <li className="grow">
                                        <a href="#">Collection 1</a>
                                    </li>
                                    <li className="grow">
                                        <a href="#">Collection 2</a>
                                    </li>
                                    <li className="grow">
                                        <a href="#">Collection 3</a>
                                    </li>
                                    <li className="grow">
                                        <a href="#">Collection 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="hover-li">
                                <h3>New Items</h3>
                                <ul className="hover-ul-items">
                                    <li className="grow">
                                        <a href="#">Item 1</a>
                                    </li>
                                    <li className="grow">
                                        <a href="#">Item 2</a>
                                    </li>
                                    <li className="grow">
                                        <a href="#">Item 3</a>
                                    </li>
                                </ul>
                            </li>
                            <div className="hover-preview-image">
                                <img src={Hat1} height="250px"></img>
                            </div>
                        </ul>
                    </div>
                   */}