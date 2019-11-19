import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Hat1 from './assets/hat1.jpg';

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
        border-top: 3px solid #FFA400;
    }

    .logo {
        flex: 1;
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
        margin-left: auto;
        margin-right: auto;
        
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
            font-size: 1.4em;
        }
        
        a {
            margin: 3em;
        }
    }

    .hover-ul-items {
        list-style-type: none;
        padding: 0;
        margin: 1em;

        li {
            margin: .5em;
        }
    }

    .hover-preview-image {
        display: flex;
        flex: 1;
        background: blue;
    }

    .hamburger {
        flex: 1;
    }

    @media(max-width: 500px) {
        .nav {
            display: none;
        }

        .navbar {
            justify-content: space-between;
        }
    }
   
`;

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverMenu: false
        };
    }

    handleMouseHover = () => {
        this.setState(this.hover);
    }

    hover = () => {
        this.setState({
            hoverMenu: !this.state.hoverMenu
        })
    }

    render() {
        console.log(this.state.hoverMenu);
        return (
            <STYLES>
                <navbar className="navbar">
                    <div className="logo"></div>
                        <ul className="nav">
                            <li className="nav-link" onMouseEnter={this.hover} onMouseLeave={this.hover}>
                                <a href="#">Shop</a>
                            </li>
                            <li className="nav-link" >
                                <a href="#">About Us</a>
                            </li>
                            <li className="nav-link" >
                                <a href="#">Sales</a>
                            </li>
                        </ul>
                    <div className="hamburger"></div>
                </navbar>
                {this.state.hoverMenu ? 
                    <div className="hover-menu">
                        <ul className="hover-ul">
                            <li className="hover-li">
                                <h3>Hats</h3>
                                <ul className="hover-ul-items">
                                    <li>Hat 1</li>
                                    <li>Hat 2</li>
                                    <li>Hat 3</li>
                                    <li>Hat 4</li>
                                    <li>Hat 5</li>
                                    <li>Hat 6</li>
                                </ul>
                            </li>
                            <li className="hover-li">
                                <h3>Collections</h3>
                                <ul className="hover-ul-items">
                                    <li>Collection 1</li>
                                    <li>Collection 2</li>
                                    <li>Collection 3</li>
                                    <li>Collection 4</li>
                                </ul>
                            </li>
                            <li className="hover-li">
                                <h3>New</h3>
                                <ul className="hover-ul-items">
                                    <li>New Item 1</li>
                                    <li>New Item 2</li>
                                    <li>New Item 3</li>
                                </ul>
                            </li>
                            <div className="hover-preview-image">
                                <img src={Hat1} height="250px"></img>
                            </div>
                        </ul>
                    </div>
                : null}
            </STYLES>
        );
    }
}

export default Navbar;