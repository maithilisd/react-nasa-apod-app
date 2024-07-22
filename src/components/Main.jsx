import { PropTypes } from 'prop-types';

export default function Main({ data = { title: 'Background Image' } }) {
  if (!data) {
    return null;
  }

  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title} className="bgImage" />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
