import PropTypes from 'prop-types';

// Data to be displayed in the component
// This data is passed as props to the ExportFile component
const ExportFile = props => {
  const { title, description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

// Validate prop types
ExportFile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExportFile;