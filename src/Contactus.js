import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Content from "./Content"
import Nav from './Nav';
function Contactus(){
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])
    return (
        <>
            <Nav/>
            <h2>Get in Touch on the Contact Page</h2>
            <Content/>
            <ImpactStories  />
            <Content/>
        </>
    )
}

function ImpactStories(){
    return (
        <>
            <div className="impactstories">
                <p>Play It Forward</p>
                <h2>Stories of Impact</h2>
                <div className="imagewrapper">
                    <motion.div
                        initial={{ y: 30, opacity:0}}
                        whileInView={{ y: 0, opacity:1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 0.5,once: true }}
                        className="card-image" 
                    >
                        <a className="" 
                        style={{background: 'url(./dist/images/story-gathering.png)',overflow: "hidden"}}><p>Teamwork in Action</p></a>
                    </motion.div>
                    <motion.div
                        initial={{ y: 30, opacity:0}}
                        whileInView={{ y: -50, opacity:1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 0.5,once: true }}
                        className="card-image" 
                    >
                        <a className="" 
                        style={{background: 'url(./dist/images/story-growing.png)',overflow: "hidden"}}><p>Helping Students Rise</p></a>
                    </motion.div>
                     <motion.div
                        initial={{ y: 30, opacity:0}}
                        whileInView={{ y: 0, opacity:1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 0.5,once: true }}
                        className="card-image ms-5" 
                    >
                        <a className="" 
                        style={{background: 'url(./dist/images/story-helping.png)',overflow: "hidden"}}><p>Teamwork in Action</p></a>
                    </motion.div>
                    <motion.div
                        initial={{ y: 30, opacity:0}}
                        whileInView={{ y: -50, opacity:1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 0.5,once: true }}
                        className="card-image ms-5" 
                    >
                        <a className="" 
                        style={{background: 'url(./dist/images/story-teamwork.png)',overflow: "hidden"}}><p>Helping Students Rise</p></a>
                    </motion.div>
                </div>
            </div>
        </>
    )
}


export default Contactus;