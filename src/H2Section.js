import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const STYLES = styled.div`
    .h2-container {
        margin-top: 4em;
        margin-bottom: 4em;

        h2 {
            display: flex;
            justify-content: center;
            align-content: center;
            //padding: 2.5em;
            font-family: 'Arapey', serif;
            font-size: 2.1em;
            text-transform: uppercase;
        }

        .fa-xs, .fa-sm {
            margin: .5em;
            display: inline;
            padding-top: .3em;
        }

        .fa-xs {
            font-size: 9px;
        }

        .fa-sm {
            font-size: 11px;
        }

        .hr {
            width: 40px;
            position: relative;
            display: inline-block;
            border: none;
            height: 1px;
            background-color: #333;
            z-index: -999;
        }

        .hr-right {
            left: 110px;
        }

        .hr-left {
            right: 110px;
        }
    }
`;


const H2 = (props) => {
    return(
        <STYLES>
            <div className="h2-container">
                <h2>{props.title}</h2>
                <hr className="hr-right hr"/>
                <FontAwesomeIcon
                    icon={'star'}
                    size="xs"
                    color="#333"
                />
                <FontAwesomeIcon
                    icon={'star'}
                    size="sm"
                    color="#333"
                />
                <FontAwesomeIcon
                    icon={'star'}
                    size="xs"
                    color="#333"
                />
                <hr className="hr-left hr"/>
            </div>
        </STYLES>
    );
}

export default H2;