import React from 'react';
import styled, { css } from 'styled-components';
import ManInHat from './assets/man-in-hat.png';
import Brick from './assets/brick.png';

const STYLES = styled.div`
    .features-section {
        display: flex;
        height: auto;
        flex-wrap: wrap;
    }

    .left {
        height: 30em;
        width: 50%;
        background-image: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${ManInHat});
        background-size: cover;
    }

    .right {
        height: 30em;
        width: 50%;
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Brick});
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        p {
            font-size: 2.5em;
            width: 80%;
            color: #FFF;
        }
    }

    @media(max-width: 500px) {
        .left, .right {
            min-width: 100%;
        }
    }
`;

const Features = () => {
    return (
        <STYLES>
            <div className="features-section">
                <div className="left"></div>
                <div className="right">
                    <p>Timeless & stylish, made with the highest quality materials</p>
                </div>
            </div>
        </STYLES>
    );
}

export default Features;