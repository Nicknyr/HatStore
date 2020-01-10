import React from 'react';
import styled, {css} from 'styled-components';
import Brand1 from './assets/brands/brand1.png';
import Brand2 from './assets/brands/brand2.png';
import Brand3 from './assets/brands/brand3.png';
import Brand4 from './assets/brands/brand4.png';
import Brand5 from './assets/brands/brand5.png';
import Brand6 from './assets/brands/brand6.png';

const STYLES = styled.div`
    background: #F0F0F0;
    //height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;


    .brands {
        height: 60em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    @media(min-width: 500px) {
        flex-direction: row;
        height: 12em;

        .brands {
            height: auto;
            flex-direction: row;
            
        }
    } 
    
`;

const FeaturedIn = () => {
    return (
        <STYLES>
            <div className="container">
                <div className="brands">
                    <img src={Brand1} />
                    <img src={Brand2} />
                    <img src={Brand3} />
                    <img src={Brand4} />
                    <img src={Brand5} />
                    <img src={Brand6} />
                </div>
            </div>
        </STYLES>
    );
}

export default FeaturedIn;

