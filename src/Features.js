import React from 'react';
import styled, { css } from 'styled-components';
import ManInHat from './assets/man-in-hat.png';

const STYLES = styled.div`
    .features-section {
        display: flex;
        height: auto;
        flex-wrap: wrap;
    }

    .left {
        height: 30em;
        width: 50%;
        background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${ManInHat});
        background-size: cover;
    }

    .right {
        height: 30em;
        width: 50%;
        background: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        p {
            font-size: 2.5em;
            width: 80%;
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