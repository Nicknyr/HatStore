import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const STYLES = styled.div`
    //background: red;
    height: auto;
    width: auto;
    display: flex;
    font-family: 'Roboto', sans-serif;

    h1 {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 1em;
        font-family: 'Arapey', serif;
        font-size: 2.4em;
        text-transform: uppercase;
    }

    ul li {
        margin-top: 4em;
        text-align: left;
    }

    p {
        line-height: 1.4;
    }

    .name, .stars {
        padding: .5em;
    }

    .username {
        color: darkslategray;
        font-weight: bold;
    }

    .review {
        margin-top: .5em;
        padding-left: .5em;
        border-left: 5px solid lightgrey;
    }


    .review-section {
        height: auto;
        width: 100%;
        padding: 1em;
        overflow: none;
    }

    @media(min-width: 768px) {
        width: 70%;
        margin: 0 auto;
    }

    @media(min-width: 800px) {
        width: 50%;
    }
`;

const ProductReview = () => {
    return (
        <STYLES>
            <div className="review-section">
                <h1>Reviews</h1>
                <ul>
                    <li>
                        <p className="name">By <span className="username">Léna Ernie</span> on Date</p>
                        <p className="stars">
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                        </p>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.</p>
                    </li>
                    <li>
                        <p className="name">By <span className="username">Annabel Sebastian</span> on Date</p>
                        <p className="stars">
                        <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                        </p>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque.</p>
                    </li>
                    <li>
                        <p className="name">By <span className="username">Corey Severino</span> on Date</p>
                        <p className="stars">
                        <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                        </p>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Felis imperdiet proin fermentum leo. Lacus suspendisse faucibus interdum posuere lorem. Purus in mollis nunc sed id semper. Sed euismod nisi porta lorem mollis aliquam ut. Nisi est sit amet facilisis magna etiam.</p>
                    </li>
                    <li>
                        <p className="name">By <span className="username">Nicolaos Cai</span> on Date</p>
                        <p className="stars">
                        <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                        </p>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit. Consequat ac felis donec et odio pellentesque. Felis eget velit aliquet sagittis id consectetur. Morbi tincidunt ornare massa eget egestas purus.</p>
                    </li>
                    <li>
                        <p className="name">By <span className="username">Eveline Paskal</span> on Date</p>
                        <p className="stars">
                        <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                        </p>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Volutpat est velit egestas dui.</p>
                    </li>
                    <li>
                        <p className="name">By <span className="username">Kurt Gene</span> on Date</p>
                        <p className="stars">
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                            <FontAwesomeIcon
                                icon="star"
                                size="md"
                                color="gold"
                            />
                        </p>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Ac auctor augue mauris augue neque gravida in. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Sodales ut etiam sit amet nisl purus in mollis.</p>
                    </li>
                </ul>
            </div>
        </STYLES>
    );
}

export default ProductReview;