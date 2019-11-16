import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import NewsletterForm from './NewsletterForm';
import NewsLetterForm from './NewsletterForm';

const STYLES = styled.div`
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
`;


class Newsletter extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <STYLES>
                <div>
                <div className="newsletter-section">
                    <h2>Join our Newsletter</h2>
                    <p>Get updates on new products and be the first to hear about sales</p>
                </div>
                <NewsLetterForm />
                </div>
            </STYLES>
        );
    }
}


export default Newsletter;