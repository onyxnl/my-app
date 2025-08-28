import Nav from './Nav';
import Subnav from './subNav';
import React, { useState } from "react";



function Item({isComplete,name}){
    return (
        <li>{isComplete ? <del>{name}</del> : name }</li>
    )
}


function Listing() {

    return (
        <>
            <Nav/><Subnav/>
            <div className="py-20">
                <h1>Order List</h1>
                <ul>
                    <Item isComplete={true}  name="Potato" />
                    <Item isComplete={true} name="Onion" />
                    <Item isComplete={true} name="Tomato" />
                    <Item isComplete={false} name="Rice" />
                </ul>
            </div>
        </>
    )
}




export default Listing;