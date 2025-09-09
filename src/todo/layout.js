import Subnav from '../subNav';
import React, { useState } from "react";
import Itemlist from '../todo/itemList';



function Layout() {

     const [items, setItem] = useState([]);
    const [listval, setListval] = useState("");
    function addItem(event){
        setListval( event.target.value);
    }

    function sendItem(e){
        if(e.key == 'Enter' && listval.trim() !== ""){
            setItem([...items, listval])
            setListval('');
        }
    }

    return (
        <>
            <Subnav/>
            <h2>To Do List</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    value ={listval}
                    onChange={addItem}
                    onKeyDown={sendItem}
                    placeholder="Key in...."
                /><br/>
                <Itemlist lists ={items} />
            </div>
            
        </>
    )
}




export default Layout;