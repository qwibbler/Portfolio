const Skills = ({ skills }) => (
  <ul>
    {skills.map(skill => (<li>{skill}</li>))}
  </ul>
);

export default Skills;