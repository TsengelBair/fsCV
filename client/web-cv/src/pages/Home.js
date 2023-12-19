import { useState } from "react";
import Modal from "../components/Modal.js";
import Main from "./../components/Main.js";
import Services from "./../components/Services.js";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalActive(true);
  };

  return (
    <>
      <Main />
      <Services openModal={openModal} />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        selectedService={selectedService}
      />
    </>
  );
};

export default Home;
