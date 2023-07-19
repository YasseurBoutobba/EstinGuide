

const Admissions = () => {
    return ( 
        <div data-aos="zoom-in" data-aos-duration="1000"
        className="admissions info-sec">
            <div>
                <p>"Admission to the school is based on calculating the Baccalaureate grade point, the available pedagogical seats, and the demand for the school. The first priority is given to the Mathematics section, the second priority to the Experimental Sciences section, and the third priority to the Technical Mathematics section."</p>
                <div className="years">
                    <div className="year year_2021 ">
                        <h2>BAC 2021 : </h2>
                        <p><span>شعبة رياضيات : </span> 17.01</p>
                        <p><span>شعبة علوم تجريبية : </span> 17.50</p>
                        <p><span>شعبة تقني رياضي : </span> 18.03</p>
                    </div>
                    <div className="year year_2022">
                    <h2>BAC 2022 : </h2>
                        <p><span>شعبة رياضيات :</span> 17.06</p>
                        <p><span>شعبة علوم تجريبية :</span> 17.55</p>
                        <p><span>شعبة تقني رياضي :</span> 18.11</p>
                    </div>
                </div>
                <p className="mawzon">المعدل الموزون = ((نقطة الباكالوريا * 2 )+ نقطة الرياضيات )/ 3</p> 
            </div>
        </div>
     );
}
 
export default Admissions;