// jshint esversion:6
import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../Contacts";



function CreateContact(contact) {
    return (
        <Card
            id={contact.id}
            key={contact.id}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
        />
    )
}

function App() {

    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar imgURL="https://pbs.twimg.com/profile_images/1246260581600034822/ULlHw6O3_400x400.jpg"
            />
            <div className="container">
                {contacts.map(CreateContact)}

            </div>
        </div>
    );
}

export default App;
