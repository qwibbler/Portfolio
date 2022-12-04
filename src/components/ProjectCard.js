import { useInView } from 'react-intersection-observer';
import $ from 'jquery';
import OriDomi from '../helpers/oridomi';
import { oridomiOptions, buildThreshold } from '../helpers/helper';

const ProjectCard = ({ index, project }) => {

  // var $folded = $('.to-fold').OriDomi(oridomiOptions);
  // var folded = new OriDomi('.to-fold', {
  //   vPanels:          5,     // number of panels when folding left or right (vertically oriented)
  //   hPanels:          3,     // number of panels when folding top or bottom
  //   speed:            1200,  // folding duration in ms
  //   ripple:           2,     // backwards ripple effect when animating
  //   shadingIntensity: .5,    // lessen the shading effect
  //   perspective:      800,   // smaller values exaggerate 3D distortion
  //   maxAngle:         40,    // keep the user's folds within a range of -40 to 40 degrees
  //   shading:          'soft',// change the shading type
  //   touchEnabled: false,
  // });
  // folded.accordion(30, 'bottom');
// when using jQuery, iterate OriDomi methods over multiple elements like this:
  // $folded.OriDomi.oridomi('accordion', 20);
  // to access the OriDomi instance at the top of the jQuery selection directly:
  // var folded = new OriDomi(document.getElementsByClassName('paper')[0]);
  // folded.foldUp();
  // const $folded = oridomiOptions();

  return (
    <div className={'card-space ' + (index % 2)}>
      {/* {inView && (
        <> */}
          <div className="card-pos-fixed">
            <div className="card to-fold">
              <div className="card-content">
                <img src="images/project_img/Gmail.png" alt="projimg" />
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <ul className="project-list">{project.list}</ul>
              </div>
            </div>
            <div className="btn">
              <button>See Project</button>
            </div>
          </div>
        {/* </>
      )} */}
    </div>
  );
};

export default ProjectCard;
