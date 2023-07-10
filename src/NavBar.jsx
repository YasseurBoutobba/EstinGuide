import { motion } from 'framer-motion';
import logo from './assets/logo-estin.png'
import { HiMenuAlt3 } from "react-icons/hi";
const NavBar = () => {
    const handelClick =(e)=>{
        e.target.classList.toggle("clicked")
        console.log(e.target.classList)
    }
    return ( 
        <motion.div 
        variants={{
            hidden:{opacity: 0 , y: -100},
            visible:{opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1,}}
        className="nav-bar">
            <img src={logo} alt="" />
            <HiMenuAlt3 onClick={(e)=>{handelClick(e)}} className='menu-icon'></HiMenuAlt3>
                <ul>
                    <li><a href="/">Home </a></li>
                    <li><a href="#our-clubs">Clubs</a></li>
                    <li><a href="#our-events">Events</a></li>
                    <li><a href="#life-in-campus">Life in Campus</a></li>
                </ul>
        </motion.div>
     );
}
 
export default NavBar;