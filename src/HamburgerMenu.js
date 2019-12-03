import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const STYLES = styled.div`
    margin-right: 5em;
    background: red;


    .hamburger {
        opacity: 0;
    }

    @media(max-width: 500px) {
        margin-right: 0;

        .hamburger {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 1em;
            opacity: 1;
         }
    }
`;

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hamburgerOpen: false
        }
    }

    handleClick = (e) => {
        alert("Hamburger clicked");
    }

    render() {
        return (
            <STYLES>
                <div 
                    className="hamburger"
                    onClick={this.handleClick}
                >
                    <FontAwesomeIcon
                        icon="bars"
                        size="3x"
                        color="black"
                    />
                </div>
            </STYLES>
        );
    }
}

export default HamburgerMenu;