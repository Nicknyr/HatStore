import React from 'react';


const NavbarHoverMenu = (props) => {
    console.log('props from Navbar.js : ' + props.hatToShow);
    return (
        <div className="hover-menu" onMouseLeave={props.onHover}>
            <ul className="hover-ul">
                <li className="hover-li">
                    <h3>Hats</h3>
                    <ul className="hover-ul-items">
                        <li className="grow">
                            <a href="#" onMouseOver={props.onLinkHover}>Hat 1</a>
                        </li>
                        <li className="grow">
                            <a href="#">Hat 2</a>
                        </li>
                        <li className="grow">
                            <a href="#">Hat 3</a>
                        </li>
                        <li className="grow">
                            <a href="#">Hat 4</a>
                        </li>
                        <li className="grow">
                            <a href="#">Hat 5</a>
                        </li>
                    </ul>
                </li>
                <li className="hover-li">
                    <h3>Collections</h3>
                    <ul className="hover-ul-items">
                        <li className="grow">
                            <a href="#">Collection 1</a>
                        </li>
                        <li className="grow">
                            <a href="#">Collection 2</a>
                        </li>
                        <li className="grow">
                            <a href="#">Collection 3</a>
                        </li>
                        <li className="grow">
                            <a href="#">Collection 4</a>
                        </li>
                    </ul>
                </li>
                <li className="hover-li">
                    <h3>New Items</h3>
                    <ul className="hover-ul-items">
                        <li className="grow">
                            <a href="#">Item 1</a>
                        </li>
                        <li className="grow">
                            <a href="#">Item 2</a>
                        </li>
                        <li className="grow">
                            <a href="#">Item 3</a>
                        </li>
                    </ul>
                </li>
                <div className="hover-preview-image">
                    <img src={props.hatToShow} height="250px"></img>
                </div>
            </ul>
        </div>
    );
}

export default NavbarHoverMenu;