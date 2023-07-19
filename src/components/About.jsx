import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
const About = () => {
    const [activeElement, setActiveElement] = useState("link_1");
    const handleClick = (elementId) => {
        setActiveElement(elementId);
    };
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      
        return () => {
          AOS.refreshHard();
        };
      }, []);
      
    return ( 
        <div 
        data-aos="fade-right" data-aos-duration="1000"
        className="about">
            <Link onClick={() => handleClick("link_1")} id="link_1" className={activeElement === 'link_1' ? 'active' : ''} to="/studies" >Studies</Link>
            <Link onClick={() => handleClick("link_2")} id="link_2" className={activeElement === 'link_2' ? 'active' : ''} to="/specialities">Specialities</Link>
            <Link onClick={() => handleClick("link_3")} id="link_3" className={activeElement === 'link_3' ? 'active' : ''} to="/admissions">Admissions</Link>
        </div>
     );
}
 
export default About;