import { useState } from 'react';
import useNasaAPODData from './hooks/useNasaAPODData';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

function App() {
  // Use the custom hook to fetch NASA APOD data
  const { data, error, loading } = useNasaAPODData();
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the visibility of the modal
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  // Render a loading state while data is being fetched
  if (loading) {
    return (
      <div className="loadingState">
        <i className="fa-solid fa-spinner"></i>
      </div>
    );
  }

  // Render an error state if there was an error fetching data
  if (error) {
    return (
      <div className="errorState">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <p>Error fetching data: {error}</p>
      </div>
    );
  }

  return (
    <>
      {data && <Main data={data} />}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
