import logo from '../assets/logo/Bytecraft.png'
import 'aos/dist/aos.css';

const NavBar = () => {
    
  
    return ( 
        <div 
        data-aos="fade-down" data-aos-duration="1000"
        className="nav-bar">
            <img src={logo} alt="" />
            <div onClick={()=>{
                    const navbarIcon = document.querySelector(".menu-icon")
                    navbarIcon.classList.toggle("clicked")
            }} className='menu-icon'>
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