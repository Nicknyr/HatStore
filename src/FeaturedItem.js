import React from 'react';


const FeaturedItem = (props) => {
    console.log("functional component props : " + props.hat);
    return (
        <div className="featured-item item-5">
            <img src={props.hatImg} height="150"/>
            <h3>{props.hatName}</h3>
            <p>{props.hatPrice}</p>
            <div className="options-container">
                <div className="color-options"></div>
            </div>
        </div>
    );
}


export default FeaturedItem;