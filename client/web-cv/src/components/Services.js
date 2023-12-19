import "./Services.css";
import servicesIcon from "./../images/icons/icon.svg";

const servicesData = [
  { id: "primary", text: "Primary school", distantStep: 700, liveStep: 1000 },
  { id: "middle", text: "Middle school", distantStep: 800, liveStep: 1200 },
  { id: "adult", text: "Adult school", distantStep: 1000, liveStep: 1500 },
];

const Services = ({ openModal }) => {
  const handleEnterClick = (service) => {
    // Проверяем ширину экрана
    const screenWidth = window.innerWidth;
    if (screenWidth < 630) {
      // Если ширина экрана меньше 630px, выполняем редирект в Telegram
      window.location.href = "tg://resolve?domain=StudentAssistantBotBot";
    } else {
      // В противном случае открываем модальное окно
      openModal(service);
    }
  };

  return (
    <section className="services">
      <div className="container">
        <div className="services_inner">
          <h2 className="services_inner_title">Services</h2>
          <p className="services_inner_subtitle">
            You need a good result? I know how to achieve it!
          </p>
          <ul className="services_inner_offers">
            {servicesData.map((service) => (
              <li className="services_inner_offer" key={service.id}>
                <img
                  className="services_inner_offer_img"
                  src={servicesIcon}
                  alt="icon"
                />
                <p className="services_inner_offer_text">{service.text}</p>
                <button
                  className="services_inner_offer_btn"
                  id={service.id}
                  onClick={() => handleEnterClick(service)}
                >
                  Enter
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
