
import { TypeAnimation } from "react-type-animation";
import "../Styles/Skills.css";
import TextShpere from "./TextShpere";

export default function Skills() {

  return (
    <div className="skills">
      <section className="text-zone">
        <h2 className="skills-header">
        <TypeAnimation
      sequence={[
        'My skills', 
        3000, 
        'Technology',
        3000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
        </h2>
        <p>
        As a junior front-end developer,<br/>
        I am passionate about creating dynamic and visually appealing websites that engage users.<br/>
        I am dedicated to staying up-to-date with the latest web development trends and technologies.<br/>
        In addition to my technical skills, I am a collaborative team player who is always eager to learn and grow as a developer.
        </p>
      </section>
      <TextShpere />
    </div>
  )
}
