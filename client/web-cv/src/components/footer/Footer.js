import "./Footer.css";
import vk from "./../../images/icons/vk.png";
import twitter from "./../../images/icons/twitter.png";
import github from "./../../images/icons/gitHub.png";
import linkedin from "./../../images/icons/linkedIn.png";

const socialIcons = [
  { name: "VK", url: "https://vk.com/bair__ts", icon: vk },
  { name: "Twitter", url: "https://twitter.com", icon: twitter },
  { name: "GitHub", url: "https://github.com/TsengelBair", icon: github },
  { name: "LinkedIn", url: "https://ru.linkedin.com", icon: linkedin },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_icons">
            {socialIcons.map((social, index) => (
              <a
                className="footer_icon"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
          <h3 className="footer_text">
            Copyright © 2023, TsengelBair. All rights reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
