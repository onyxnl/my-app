"use client"

import { motion, useMotionValue, useTransform, animate,useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Content from "./Content"
import Nav from './Nav';
function About() {
    const totalRaised  = useMotionValue(0)
    const individualDonors = useMotionValue(0)
    const corporateDonors = useMotionValue(0)
    const staffPercentage = useMotionValue(0)
    const scholarships = useMotionValue(0)
    //const rounded = useTransform(count, latest => Math.round(latest))
    const formattedRaised = useTransform(totalRaised, v =>Math.round(v).toLocaleString())
    const formattedIndividual = useTransform(individualDonors, v =>Math.round(v).toLocaleString())
    const formattedcorporateDonors = useTransform(corporateDonors, v =>Math.round(v).toLocaleString())
    const formattedstaff = useTransform(staffPercentage, v =>Math.round(v))
    const formattedscholarships = useTransform(scholarships, v =>Math.round(v).toLocaleString())

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) // run only once when in view

    useEffect(() => {
        if (isInView) {
           console.log("✅ Element is in view")
            animate(totalRaised, 11516766, { duration: 1.5 })
            animate(individualDonors, 3126, { duration: 1.5 })
            animate(corporateDonors, 314, { duration: 1.5 })
            animate(staffPercentage, 41, { duration: 1.5 })
            animate(scholarships, 1139, { duration: 1.5 })
            // return () => controls.stop()
        } else {
            console.log("❌ Element is NOT in view")
        }
    }, [isInView]) // Only start animating when in view

    return (
        <div>
            <Nav/>
            <Content />
            <MarquessText/>
            <Yearreview refProp={ref} 
            formattedRaised={formattedRaised}
            formattedIndividual={formattedIndividual}
            formattedcorporateDonors={formattedcorporateDonors}
            formattedstaff={formattedstaff}
            formattedscholarships={formattedscholarships}
            />
            
        </div>
    )
}

// const cardVariants = {
//     offscreen: {
//         y: 300,
//     },
//     onscreen: {
//         y: 50,
//         rotate: -10,
//         transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 0.8,
//         },
//     },
// }



function Yearreview({ refProp, formattedRaised,formattedIndividual,formattedcorporateDonors,formattedstaff,formattedscholarships }){
    return(
       <div className="bg-yellow">
        <div className="container">
          <h1>2024</h1>
          <span style={text}>$</span><motion.span
                ref={refProp}
                style={text}
            >
                {formattedRaised}
            </motion.span>
            <ul className="yearreivelist">
              <li>
                <div className="individualreview">
                  <div className="number"><motion.span>{formattedIndividual}</motion.span></div>
                  <p>Individual Donors</p>
                </div>
              </li>
              <li className="linewrapper">
                <div className="line">&nbsp;</div>
              </li>
              <li>
                  <div className="individualreview">
                    <div className="number"><motion.span>{formattedcorporateDonors}</motion.span></div>
                    <p>Corporate Donors</p>
                  </div>
              </li>
              <li className="linewrapper">
                <div className="line">&nbsp;</div>
              </li>
              <li>
                  <div className="individualreview">
                    <div className="number"><motion.span>{formattedstaff}</motion.span>%</div>
                    <p>SUSS Staff Donors</p>
                  </div>
              </li>
              <li className="linewrapper">
                <div className="line">&nbsp;</div>
              </li>
              <li>
                  <div className="individualreview">
                    <div className="number"><motion.span>{formattedscholarships}</motion.span></div>
                    <p>Donor-Supported <br/>Scholarships, <br/>Awards & Grants</p>
                </div>
              </li>
            </ul>
       </div>
      </div>
    )
}

function MarquessText(){
  const items = ["Level Up", "Level Up", "Level Up", "Level Up"]

  return(
    <div className="animate-move">
      <div className="animate-wrapper">
        <div className="animate-move-left">
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
          <p>LEVEL UP</p>
        </div>
      </div>
    </div>
  )
}

const text = {
    fontSize: 64,
    color: "#000",
}
export default About;