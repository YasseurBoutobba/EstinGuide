import { motion } from 'framer-motion';
const Specialities = () => {
    return ( 
        <motion.div
        variants={{
            hidden:{opacity: 0 , scale: 0.3},
            visible:{opacity: 1, scale: 1},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: .8, delay: 0}}
        className="specialities info-sec" id='specialities'>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex, pariatur quia eius aut id officiis rerum explicabo asperiores aperiam quidem, consectetur nemo autem facere perspiciatis, unde expedita? Libero, officiis reiciendis rerum tempora, cumque tenetur non est incidunt, voluptate ad earum! Velit sit facere soluta sint unde a necessitatibus impedit.</p>
                <div className="spec-two">
                    <div className="spec ai-ds">
                        <h2>Ai and Data Science</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste rem adipisci soluta aliquam laborum! Nam deleniti accusamus corporis voluptatibus quam. Qui, vitae rerum. Earum exercitationem nostrum, sunt autem cupiditate rerum?</p>
                    </div>
                    <div className="spec cyber-s">
                        <h2>Cyber Securty Science</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste rem adipisci soluta aliquam laborum! Nam deleniti accusamus corporis voluptatibus quam. Qui, vitae rerum. Earum exercitationem nostrum, sunt autem cupiditate rerum?</p>
                    </div>
                </div>
                <q>Some random Quote in One Line</q> 
            </div>
        </motion.div>
     );
}
 
export default Specialities;