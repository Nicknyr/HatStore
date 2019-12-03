import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';
import Skyline from './assets/skyline.jpg';
import Footer from './Footer';

const STYLES = styled.div`
    //font-family: 'Arapey', serif;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 500px) {
        .about-section {
        padding: 10em 0;

            h1 {
                display: flex;
                justify-content: center;
                align-content: center;
                font-family: 'Arapey', serif;
                font-size: 2.8em;
                text-transform: uppercase;
                padding-bottom: 1em;
            }

            h2 {
                display: flex;
                justify-content: center;
                align-content: center;
                //margin-top: 1em;
                font-family: 'Arapey', serif;
                font-size: 1.5em;
                text-transform: uppercase;
            }

            .section {
                text-align: left;
                padding: 1em;
                line-height: 1.4;
                margin-top: 1.5em;

                p {
                    margin-top: 1em;
                }
            }

        }
    }


`;

const About = () => {
    return (
        <div>
            <Navbar />
            <STYLES>
                <div className="about-section">
                    <h1>About Us</h1>
                    <img src={Skyline}  height="200"/>
                    <h2>Quality Men's Hats since 1955</h2>

                    <div className="history section">
                        <h2>History</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu. Nec nam aliquam sem et tortor consequat id porta nibh. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Eget sit amet tellus cras adipiscing enim eu. Ultrices sagittis orci a scelerisque purus semper eget. Ultricies leo integer malesuada nunc vel. Morbi non arcu risus quis varius quam quisque. Phasellus vestibulum lorem sed risus ultricies tristique. Ante in nibh mauris cursus mattis molestie a. Morbi quis commodo odio aenean sed adipiscing. Nunc lobortis mattis aliquam faucibus purus in massa. In metus vulputate eu scelerisque felis imperdiet proin. Interdum velit laoreet id donec ultrices tincidunt. Neque viverra justo nec ultrices dui sapien eget. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.</p>
                        
                        <p>Est velit egestas dui id ornare arcu odio. Quis commodo odio aenean sed adipiscing diam. Et ligula ullamcorper malesuada proin. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultricies tristique nulla aliquet enim tortor at auctor urna. Purus viverra accumsan in nisl nisi scelerisque. Facilisis sed odio morbi quis commodo odio aenean. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.</p>
                    </div>

                    <div className="quality section">
                        <h2>Quality</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Facilisis mauris sit amet massa vitae. Viverra tellus in hac habitasse. Vehicula ipsum a arcu cursus vitae. Nullam eget felis eget nunc. Placerat in egestas erat imperdiet sed euismod. Id cursus metus aliquam eleifend mi in nulla posuere. Cursus turpis massa tincidunt dui ut ornare lectus.</p>
                    </div>

                    <div className="experience section">
                        <h2>Since 1955</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim. Tincidunt dui ut ornare lectus sit amet est. Ridiculus mus mauris vitae ultricies. At consectetur lorem donec massa sapien faucibus. Felis donec et odio pellentesque diam volutpat. Viverra orci sagittis eu volutpat odio facilisis. Euismod lacinia at quis risus sed vulputate odio. Velit ut tortor pretium viverra suspendisse potenti nullam. Mattis aliquam faucibus purus in massa tempor nec feugiat. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nunc sed augue lacus viverra vitae congue eu. Volutpat ac tincidunt vitae semper quis lectus nulla at. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nec feugiat in fermentum posuere urna nec.</p>

                        <p>Urna molestie at elementum eu facilisis sed odio morbi. Arcu dictum varius duis at consectetur. Cursus risus at ultrices mi tempus imperdiet. Ut morbi tincidunt augue interdum. Amet porttitor eget dolor morbi non arcu risus quis varius. Varius duis at consectetur lorem donec. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Sagittis purus sit amet volutpat consequat. Viverra aliquet eget sit amet tellus. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Leo urna molestie at elementum eu facilisis sed.</p>
                    </div>
                </div>
            </STYLES>
            <Footer />
        </div>
    );
}

export default About;