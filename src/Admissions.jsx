import { motion } from 'framer-motion';
const Admissions = () => {
    return ( 
        <motion.div 
        variants={{
            hidden:{opacity: 0 , scale: 0.3},
            visible:{opacity: 1, scale: 1},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: .8, delay: 0}}
        className="admissions info-sec">
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex, pariatur quia eius aut id officiis rerum explicabo asperiores aperiam quidem, consectetur nemo autem facere perspiciatis, unde expedita? Libero, officiis reiciendis rerum tempora, cumque tenetur non est incidunt, voluptate ad earum! Velit sit facere soluta sint unde a necessitatibus impedit.</p>
                <div className="years">
                    <div className="year year_2021 ">
                        <h2>BAC 2021 : </h2>
                        <p><span>شعبة علوم تجريبية : </span> 16.6</p>
                        <p><span>شعبة رياضيات : </span> 16.6</p>
                        <p><span>شعبة تقني رياضي : </span> 16.6</p>
                    </div>
                    <div className="year year_2022">
                    <h2>BAC 2022 : </h2>
                        <p><span>شعبة علوم تجريبية :</span> 16.6</p>
                        <p><span>شعبة رياضيات :</span> 16.6</p>
                        <p><span>شعبة تقني رياضي :</span> 16.6</p>
                    </div>
                </div>
                <p className="mawzon">المعدل الموزون = ((نقطة الباكالوريا * 2 )+ نقطة الرياضيات )/ 3</p> 
            </div>
        </motion.div>
     );
}
 
export default Admissions;