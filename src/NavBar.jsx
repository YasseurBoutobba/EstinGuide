import { motion } from 'framer-motion';
import logo from './assets/logo-estin.png'
const NavBar = () => {
    return ( 
        <motion.div 
        variants={{
            hidden:{opacity: 0 , y: -100},
            visible:{opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1.2,}}
        className="nav-bar">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><a href="/">Home </a></li>
                    <li><a href="/">Clubs</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Life in Campus</a></li>
                </ul>
            </nav>
        </motion.div>
     );
}
 
export default NavBar;