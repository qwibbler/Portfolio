import Foldable from "./Foldable";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const FoldCard = ({ index, project }) => {
  const [folding, setFolding] = useState(false);

  // const finishAction = () => {
  //   setFolding(false);
  // };

  const onclick = () => {
    setFolding(true);
    setTimeout(() => {
      setFolding(false);
    }, 5000);
  }

  return (
      <Foldable
        isFolded={folding}
        front={<ProjectCard key={index} index={index} project={project} onclick={onclick} />}
        back={<div className="back">Back</div>}
        duration={2000}
        onCompleteFolding={() => {
          console.log("Folded!");
        }}
      />
  );
}

export default FoldCard;