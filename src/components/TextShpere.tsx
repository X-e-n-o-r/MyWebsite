import { useEffect } from "react";
import "../Styles/TextShpere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    return () => {
      const container: any = ".tagcloud";
      const texts: string[] = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "TypeScript",
        "Angular",
        "Redux",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options: object = {
        radius: 400,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
          
        
