// jshint esversion:6

import React from 'react';
import Avatar from "./Avatar";
import Details from "./Details";
import contacts from '../Contacts';


function Card(props) {
    return (
        <div className="card" >
            <div className="top">
                <p className="par">{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar imgURL={props.imgURL} />

            </div>
            <div className="bottom">
                <Details detailsInfo={props.phone} />
                <Details detailsInfo={props.email} />
            </div>
        </div>
    );
}

export default Card;