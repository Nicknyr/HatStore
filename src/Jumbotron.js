import React from 'react';
import styled, { css } from 'styled-components';
import JumboImage from './assets/jumbo.png';

const STYLES = styled.div`
    height: 80vh;
    width: auto;
    background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${JumboImage});
    background-size: cover;

`;

const Jumbotron = () => {
    return (
        <STYLES>
            <div className="container">
            </div>
        </STYLES>
    );
}

export default Jumbotron;