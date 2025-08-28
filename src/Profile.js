import React from "react";
import { motion } from "motion/react";
import Nav from './Nav';
function Profile() {
  return (
    <>
      <Nav/>
      <div className="container profile">
          <div className="row">
            <div className="col-lg-4">
                <div className="icon">
                  
                  <motion.img initial={{ y: 20, opacity:0 }} animate={{ y: 0, opacity:1}}  transition={{delay: 1 }} src="../dist/images/heart.png" width={70} className="img-fluid"/>
                </div>
                <h1>2024<br/>
                    The Year<br/>
                    in Review</h1>
                <h2>In 2024, we levelled up in a big way!</h2>
                <p>Thanks to our donors, we achieved a recordbreaking milestone, raising $11.5 million and unlocking opportunities for over 1,100 students.</p>
            </div>
            <div className="col-lg-8 text-end">
              <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration: 1 }} src="../dist/images/human-cards.png" className="img-fluid" width={535}/>
            
            </div>
          </div>
      </div>
    </>
  );
}

export default Profile;
