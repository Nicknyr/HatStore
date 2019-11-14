import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: 30em;
    width: 100%;
    background: black;
    color: snow;
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
                <div className="container">
                    <FontAwesomeIcon icon="check-square" />
                </div>
            </STYLES>
        );
    }
}

export default Footer;