import PropTypes from 'prop-types';

const Skills = ({ skills, children }) => (
  <ul>
    {skills.map(skill => <li key={skill}>{skill}</li>)}
    {children}
  </ul>
);

Skills.defaultProps = {
  skills: [],
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

export default Skills;