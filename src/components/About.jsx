import AboutGrid from "./AboutGrid";
import { about } from '../data/conten'
import "./about.css"

export default function About() {
  return (
    <div>
        <div className="about-title-container">
            <h1 className="title">essential informations about <span>Estin ?</span></h1>
        </div>
      {about.map(item => <AboutGrid content={item.content} sContent={item.sContent} title={item.title} sTitle={item.sTitle} key={item.id} />)}
    </div>
  )
}
