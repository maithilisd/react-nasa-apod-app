import { PropTypes } from 'prop-types';

export default function Footer({
  handleToggleModal,
  data = { title: 'No Title Available' },
}) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>Astronomy Picture Of The Day </h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
};
