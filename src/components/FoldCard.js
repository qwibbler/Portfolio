import Foldable from "./Foldable";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { buildThreshold } from "../helpers/helper";

const FoldCard = ({ index, project }) => {
  const [folding, setFolding] = useState(false);
  const [ratio, setRatio] = useState(0);

  const { ref } = useInView({
    threshold: buildThreshold(10),
    onChange: (inView, entry) => {
      let coming = ratio < entry.intersectionRatio;
      setFolding(entry.intersectionRatio > 0.5);
      setRatio(entry.intersectionRatio);
    },
  });

  // const finishAction = () => {
  //   setFolding(false);
  // };

  const onclick = () => {
    setFolding(true);
    setTimeout(() => {
      setFolding(false);
    }, 6000);
  }

  return (
    <div ref={ref} className={'card-space'}>
      <Foldable
        isFolded={folding}
        front={<ProjectCard key={index} index={index} project={project} onclick={() => {}} />}
        back={<div className="back">Back</div>}
        duration={4000}
        onCompleteFolding={() => {
          console.log("Folded!");
        }}
      />
    </div>
  );
}

export default FoldCard;