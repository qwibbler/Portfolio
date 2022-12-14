import PropTypes from 'prop-types';

const Skills = ({ skills, classes, children }) => (
  <ul className={classes}>
    {skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
    {children}
  </ul>
);

Skills.defaultProps = {
  skills: [],
  classes: '',
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.string,
  children: PropTypes.node,
};

export default Skills;
