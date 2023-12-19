const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts_inner">
          <h1 className="contacts_title">Contacts</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.046692920081!2d30.383269863895123!3d59.83175581231956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469625731d0eaf7b%3A0x5a0cbf4e66f8c49a!2z0YPQuy4g0K_RgNC-0YHQu9Cw0LLQsCDQk9Cw0YjQtdC60LAsIDQg0LrQvtGA0L_Rg9GBIDEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTIyODE!5e0!3m2!1sru!2sru!4v1691392789246!5m2!1sru!2sru"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="display on Google map"
          ></iframe>
          <h3 className="contacts_text contacts_text_1">Telegram / WhatsApp</h3>
          <p className="contacts_text_description">+7 (921) 322-15-00</p>
          <h3 className="contacts_text contacts_text_2">Email</h3>
          <p className="contacts_text_description contacts_text_description_2">
            tsengel01@bk.ru
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
