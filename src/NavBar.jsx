// import { motion } from 'framer-motion';
import logo from './assets/logo-estin.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
    const thebody = document.getElementsByTagName('body')
    const handelClick =(e)=>{
        e.target.classList.toggle("clicked")
    }
    useEffect(() => {
        AOS.init();
      }, []);
    return ( 
        <div 
        data-aos="fade-down" data-aos-duration="1000"
        className="nav-bar">
            <img src={logo} alt="" />
            <div onClick={(e)=>{handelClick(e)}} className='menu-icon'>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <ul>
                    <li><a href="/">Home </a></li>
                    <li><a href="#our-clubs">Clubs</a></li>
                    <li><a href="#our-events">Events</a></li>
                    <li><a href="#life-in-campus">Life in Campus</a></li>
                </ul>
        </div>
     );
}
 
export default NavBar;