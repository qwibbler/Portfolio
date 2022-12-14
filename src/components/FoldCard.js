import Foldable from './Foldable';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';

const FoldCard = ({ index, project }) => {
  const [fold, setFold] = useState(false);
  // const [ratio, setRatio] = useState(0);
  // const [coming, setComing] = useState(true);
  const [time, setTime] = useState(0);


  // TODO: Change this to animation pause. animation time set.
  const { ref, inView } = useInView({
    threshold: buildThreshold(100),
    onChange: (inView, entry) => {
      setFold(inView);
      // setComing(ratio < entry.intersectionRatio);
      // setRatio(entry.intersectionRatio);
      setTime(entry.intersectionRatio);
      // console.log(fold, ratio, entry.intersectionRatio, coming);
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
  };

  return (
    <div ref={ref} className={'card-space'}>
      {inView && (
        <>
          <Foldable
            folding={fold}
            // coming={coming}
            time={time}
            front={
              <ProjectCard
                key={index}
                index={index}
                project={project}
                onclick={() => {}}
              />
            }
            back={<h1>{project.title}</h1>}
            duration={1000}
            onCompleteFolding={() => {
              console.log('Folded!');
            }}
          />
          <div className="btn">
            <button onClick={onclick}>See Project</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FoldCard;
