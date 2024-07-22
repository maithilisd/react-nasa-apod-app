import { PropTypes } from 'prop-types';

export default function SideBar({
  handleToggleModal,
  data = {
    title: 'No Title Available',
    date: 'No Date Available',
    explanation: 'No Explanation Available',
  },
}) {
  return (
    <div className="sideBar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div onClick={handleToggleModal} className="sideBarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionDate">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    explanation: PropTypes.string,
  }),
};
