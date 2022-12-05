import Foldable from "./Foldable";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { buildThreshold } from "../helpers/helper";

const FoldCard = ({ index, project }) => {
  const [fold, setFold] = useState(false);
  const [ratio, setRatio] = useState(0);
  const [coming, setComing] = useState(false);

  const { ref } = useInView({
    threshold: buildThreshold(10),
    onChange: (inView, entry) => {
      setFold(entry.intersectionRatio > 0.9);
      setComing(ratio < entry.intersectionRatio);
      setRatio(entry.intersectionRatio);
    },
  });

  // const finishAction = () => {
  //   setFolding(false);
  // };

  const onclick = () => {
    setFold(true);
    setTimeout(() => {
      setFold(false);
    }, 6000);
  }

  return (
    <div ref={ref} className={'card-space'}>
      <Foldable
        toFold={fold}
        coming={coming}
        front={<ProjectCard key={index} index={index} project={project} onclick={() => {}} />}
        back={<h1>{project.title}</h1>}
        duration={4000}
        onCompleteFolding={() => {
          console.log("Folded!");
        }}
      />
      <div className="btn">
        <button onClick={onclick}>See Project</button>
      </div>
    </div>
  );
}

export default FoldCard;