import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Hat2 from './assets/hat2.jpg';
import Hat2Blue from './assets/hat2-blue.jpg';
import Hat2Grey from './assets/hat2-grey.jpg';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ProductReview from './ProductReview';


const STYLES = styled.div`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    //background: red;
    justify-content: center;
    padding-top: 7em;
    padding-bottom: 7em;

    .breadcrumbs {
        height: 2em;
        width: 100%;
        background: #f5f5f5;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        ul {
            margin-left: 1em;

            li {
                display: inline-block;
                margin-right: 1em;

                a {
                    text-decoration: none;
                    color: #666;
                    font-size: .9em;
                }

                span {
                    margin-left: 1em;
                }
            }
        }
    }

    .image-container {
        display: flex;
        height: 100vh;
        width: 45%;
        justify-content: center;
        align-items: center;
    }

    .image-gallery {
        //margin-left: 3em;
        //margin-right: 3em;
    }

    .info-container {
        display: flex;
        height: 100vh;
        width: 45%;
        justify-content: center;
        align-items: center;
        //background: pink;
    }

    .options-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 50vh;
        width: 100%;
    }

    .product-description {
        //background: purple;
        width: 50%;
        
        h3 {
            font-size: 2.2em;
            padding-bottom: .5em;
        }

        p {
            font-size: 2em;
            padding-bottom: .5em;
        }
    }

    .color-options {
        height: 20px;
        width: 20px;
        border: 1px solid black;
        margin: .5em .2em;
        display: inline-block;
    }

    button {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        font-weight: 500;
        border: 2px solid black;
        padding: .3em .7em;
        color:#181715;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        width: 10em;
        height: 2.5em;
        display: block;
        margin: 2em auto;

        a {
            color: #181715;
            text-decoration: none;
        }

        &:hover {
            background: #181715;

            a {
                color: snow;
            }
        }
    }

    @media(max-width: 500px) {
        .image-container {
            width: 100%;
        }

        .info-container {
            width: 100%;
        }
    }


`;

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        const images = [
            {
              original: `${Hat2}`,
              thumbnail: `${Hat2}`,
            },
            {
              original: `${Hat2Blue}`,
              thumbnail: `${Hat2Blue}`,
            },
            {
              original: `${Hat2Grey}`,
              thumbnail: `${Hat2Grey}`,
            },
          ];
        return (
            <div>
            <Navbar />
                <STYLES>
                    <div className="breadcrumbs">
                        <ul>
                            <li>
                                <a href="http://localhost:3000">Home</a>
                                <span>
                                    >
                                </span>
                            </li>
                            <li>
                                <a href="#">Hats</a>
                                <span>
                                    >
                                </span>
                            </li>
                            <li>
                                <a href="#">Hat One</a>
                            </li>
                        </ul>
                    </div>
                    <div className="image-container">
                        {/*<img src={Hat2} height="350" />*/}
                        <ImageGallery 
                            items={images} 
                            showPlayButton={false} 
                            showFullscreenButton={false}
                        />
                    </div>
                    <div className="info-container">
                        <div className="options-container">
                            <div className="product-description">
                                <h3>Hat One</h3>
                                <p>$50</p>
                                <h4>Colors</h4>
                                <div className="color-options"></div>
                                <div className="color-options"></div>
                                <div className="color-options"></div>
                                <button>
                                    <a href="#">Add to cart</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ProductReview />
                </STYLES>
            <Footer />       
            </div>
        
        );
    }
}

export default ProductPage;