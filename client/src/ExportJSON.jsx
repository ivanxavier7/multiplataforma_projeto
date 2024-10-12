import PropTypes from 'prop-types';
import './ExportJSON.module.css';

const ExportJSON = props => {
  const { title, description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

ExportJSON.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExportJSON;