import Subnav from '../subNav';
import React, { useState } from "react";




function itemList({lists}) {

    const [ischeckItem, setIsCheck] = useState(new Array (lists.length).fill(false));

    function checkItem(index){
        const newCheckItem = [...ischeckItem];
        newCheckItem[index] = !newCheckItem[index];
        setIsCheck(newCheckItem);
    }

    return (
        <>
            <div >
                {lists.map((item,index) => (
                    <div style={{display: "flex"}} key={index}><input type="checkbox" value={item}  checked={ischeckItem[index]}  onChange={() => checkItem(index)} />&nbsp;
                    {ischeckItem[index]? <del>{item}</del> : item }
                    </div>
                ))}
            </div>
        </>
    )
}




export default itemList;