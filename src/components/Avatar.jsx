// jshint esversion:6

import React from 'react';

function Avatar(props) {
    return (
        <img className="circle-img" src={props.imgURL}
            alt="Image" />

    )
}

export default Avatar;