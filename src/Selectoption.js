
import Nav from './Nav';
import Subnav from './subNav';
import React, { useState } from "react";

function Selectoption() {

    const [color,setColor] = useState("red");
    function colorchange(event){
        setColor(event.target.value);
    }
    return (
        <>
            {/* <Subnav/> */}
            <div className="py-20">
                <select onChange={colorchange} name="color" id="color">
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                </select>
                <div style={{color:color}}>Hello</div>
                <Circle width={70} height={70} cname="small" color={color} />
                <Circle width={100} height={100} cname="Big" color={color} />
            </div>
        </>
    )
}

function Circle({width,height,cname,color}){
    return (
        <section>
            <h1>I am {cname}</h1>
            <div style={{width:width, height:height, background:color}}>&nbsp;</div>
        </section>
    )
    
}


export default Selectoption;