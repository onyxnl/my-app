import { useState } from "react";
import { motion } from "motion/react";
import { Link } from 'react-router-dom'; 


function Nav() {

    const [isToggled, setToggled] = useState(false);

    const toggleMenu  = () =>{
        setToggled(!isToggled);
    }
   
   


    return (
        <div className={`navigation ${isToggled ? 'active' : ''}`}>
            <div className="menuwapper">
                <div className="mainMenu" onClick={toggleMenu}>
                    <div className={`hamburger ${isToggled ? 'toggled' : ''}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> <span>Menu</span>
                </div>
            </div>
            <motion.nav
                className={`navwapper ${isToggled ? '' : 'hidden'}`}
                // animate={{ opacity: isToggled ? 1 : 0 }}  
                transition={{ duration: 0.3 }}  
            >
                <ul className="menulist">
                    <li>
                        <Link onClick={toggleMenu} to="/">Home <motion.div animate={{ y: isToggled ? 0 : 10}} transition={{ease: "easeIn",duration: 0.8 }} className="subline">Home Sample</motion.div>
                        </Link> 
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/about">About <motion.div animate={{ y: isToggled ? 0 : 10}} transition={{ease: "easeIn",duration: 0.8 }} className="subline">About Sample</motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/contact">Contact <motion.div animate={{ y: isToggled ? 0 : 10}} transition={{ease: "easeIn",duration: 0.8 }} className="subline">Contact Sample</motion.div>
                        </Link> 
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/profile/123">Profile <motion.div animate={{ y: isToggled ? 0 : 10}} transition={{ease: "easeIn",duration: 0.8 }} className="subline">Profile Sample</motion.div>
                        </Link> 
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/tutorial">Tutorial <motion.div animate={{ y: isToggled ? 0 : 10}} transition={{ease: "easeIn",duration: 0.8 }} className="subline">Tutorial Sample</motion.div>
                        </Link> 
                    </li>
                </ul>
                <motion.ul className="example">
                    {isToggled && [0, 1, 2, 3].map((_, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, transform: "translateX(-15px)" }}
                            animate={{ opacity: isToggled ? 1 : 0, transform: isToggled ? 'none' : 'translateX(-15px)' }}
                            transition={{ delay: index * 0.1 }}
                        />
                    ))}
                </motion.ul>
            </motion.nav>
        </div>
    )

    
}
export default Nav;