import campus_1 from "./assets/campus_1.png"
import campus_2 from "./assets/campus_2.png"
import campus_3 from "./assets/campus_3.png"
import 'aos/dist/aos.css';

const LifeinCampus = () => {
    
    return ( 
        <div className="life-in-campus" id='life-in-campus'>
            <h1 data-aos="fade-right" data-aos-duration="1000"
            className="title">life in <span>campus</span></h1>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
            className="campus-sec">
                <div className="text">
                    <h2>Campus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio consequuntur saepe illo possimus reiciendis, accusamus perferendis. Voluptates dicta earum aliquam saepe hic ducimus culpa consequatur dignissimos maiores! Sit, reiciendis non? Autem non nisi voluptatibus!</p>
                </div>
                <img src={campus_1} alt="campus image" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000"
            className="campus-sec">
                <img src={campus_2} alt="campus image" />
                <div className="text">
                    <h2>Campus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio consequuntur saepe illo possimus reiciendis, accusamus perferendis. Voluptates dicta earum aliquam saepe hic ducimus culpa consequatur dignissimos maiores! Sit, reiciendis non? Autem non nisi voluptatibus!</p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000"
            className="campus-sec">
                <div className="text">
                    <h2>Campus</h2>
                    <p>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum!ipsum dolor sit amet consectetur adipisicing elit. Animi optio consequuntur saepe illo possimus reiciendis, accusamus perferendis. Voluptates dicta earum aliquam saepe hic ducimus culpa consequatur dignissimos maiores! Sit, reiciendis non? Autem non nisi voluptatibus!</p>
                </div>
                <img src={campus_3} alt="campus image" />
            </div>
        </div>
        
        
     );
}
 
export default LifeinCampus;