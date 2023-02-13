import Foldable from './Foldable';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';

const FoldCard = ({ index, project }) => {
  const [unfolded, setUnfolded] = useState(false);
  const [time, setTime] = useState(0);

  const { ref, inView } = useInView({
    threshold: buildThreshold(100),
    onChange: (_inView, entry) => {
      // setFold(true);
      setUnfolded(entry.intersectionRatio > 0.6);
      setTime(entry.intersectionRatio);
    },
  });

  return (
    <div ref={ref} className={'card-space'}>
      {inView && (
        <>
          <Foldable
            unfolded={unfolded}
            time={time}
            index={index}
            front={<ProjectCard key={index} project={project} />}
            back={<h1>{project.title}</h1>}
            duration={1000}
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
