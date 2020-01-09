import React from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`
    //border: 5px solid goldenrod;
    //font-family: 'Arapey', serif;
    font-family: 'Roboto', sans-serif;

    p {
        font-size: .5em;
    }

    h3 {
        margin: .5em;
        font-size: .7em;
    }

    h2 {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 2.5em;
        font-family: 'Arapey', serif;
        font-size: 2.4em;
        text-transform: uppercase;
    }

    .container {
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: space-around;
        padding-left: 2em;
        padding-right: 2em;
    }

    .featured-item {
        height: auto;
        flex-basis: 25%;
        font-size: 2em;
        //border: 2px solid goldenrod;
        margin-bottom: 2em;
    }

    .options-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .color-options {
        height: 20px;
        width: 20px;
        border: 1px solid black;
        margin: .5em .2em;
        background-size: cover;
    }

    @media(max-width: 500px) {
        .featured-item {
            flex-basis: 100%;
        }
    }
`;


const SaleItem = (props) => {
    //console.log("functional component props : " + props.hat);
    return (
        <STYLES>
            <div className="featured-item item-5">
                <img src={props.img} height="150"/>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <div className="options-container">
                    <div 
                        onClick={props.handleColorOptionClicked} 
                        handleMouseEnter={props.handMouseEnter}
                        colorOption={props.colorOption1}>
                           <img 
                                className="color-options" 
                                src={props.colorOption1} 
                                handleMouseEnter={props.handleMouseEnter}/>
                           <img 
                                className="color-options" 
                                src={props.colorOption2} 
                                handleMouseEnter={props.handleMouseEnter}/>
                    </div>
                </div>
            </div>
        </STYLES>
    );
}


export default SaleItem;