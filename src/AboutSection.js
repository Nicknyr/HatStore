import React from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`
    //font-family: 'Arapey', serif;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20em;
    width: 100%;
    background: #f4f4f4;
    margin-top: 5em; 
    margin-bottom: 5em;

    h2 {
        padding: 1em;
        font-family: 'Arapey', serif;
        font-size: 2.2em;
    }

    .container {
        display: flex;
        width: 30em;
        height: 13em;
        justify-content: center;
        align-items: center;
    }

    button {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        font-weight: 500;
        border: 2px solid black;
        padding: .3em .7em;
        color:#181715;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        width: 10em;
        height: 2.5em;

        a {
            color: #181715;
            text-decoration: none;
        }

        &:hover {
            background: #181715;

            a {
                color: snow;
            }
        }
    }
`;

const AboutSection = () => {
    return (
        <STYLES>
            <div className="about-section">
                <div className="container">
                    <h2>American Made & Timeless. Quality men's hats made in NYC since 1955.</h2>
                </div>
                <button>
                    <a href="#">About Us</a>
                </button>
            </div>
        </STYLES>
    );
}

export default AboutSection;