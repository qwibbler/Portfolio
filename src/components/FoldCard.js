import Foldable from './Foldable';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';

const FoldCard = ({ index, project }) => {
  const [fold, setFold] = useState(false);
  const [unfolded, setUnfolded] = useState(false);
  const [time, setTime] = useState(0);

  const { ref, inView } = useInView({
    threshold: buildThreshold(100),
    onChange: (inView, entry) => {
      setFold(inView);
      setUnfolded(entry.intersectionRatio > 0.9)
      setTime(entry.intersectionRatio);
    },
  });

  // const finishAction = () => {
  //   setFolding(false);
  // };

  return (
    <div ref={ref} className={'card-space'}>
      {inView && (
        <>
          <Foldable
            folding={fold}
            unfolded={unfolded}
            time={time}
            front={<ProjectCard key={index} index={index} project={project} />}
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
