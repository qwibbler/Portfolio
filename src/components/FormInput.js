import PropTypes from 'prop-types';

const FormInput = ({ label, id, children }) => (
  <fieldset>
    <legend>{label}</legend>
    <label htmlFor={id} />
    {children}
  </fieldset>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FormInput;