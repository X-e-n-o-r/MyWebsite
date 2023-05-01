import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import '../Styles/TextShpere.css'

const TextShpere = () => (

    <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(900, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}
        onClick={(tag: string, _ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
    >
        {[
            "JavaScript",
            "TypeScript",
            "React",
            "Redux",
            "Vue",
            "Angular",
            "npm",
            "ES6",
            "git",
            "Github",
            "Sass",
        ]}
    </TagCloud>
);

export default TextShpere
          
        
