import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import '../Styles/TextShpere.css'

const TextShpere = () => (

    <div className="cloud">
            <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(800, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            'HTML',
            'CSS',
        ]}
    </TagCloud>
    </div>

);

export default TextShpere
          
        
