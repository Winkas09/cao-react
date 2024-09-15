import "./FooterSection.css";

const FooterSection = ({ footerData }) => {
  const { navLinksColumn1, navLinksColumn2, socialLinks } = footerData;

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-white.svg"
          alt="Logo"
        />
      </div>
      <div className="footer-nav">
        <div className="footer-nav-column">
          {navLinksColumn1.map((link, index) => (
            <a key={index} href="#" className="footer-nav-link">
              {link}
            </a>
          ))}
        </div>
        <div className="footer-nav-column-two">
          {navLinksColumn2.map((link, index) => (
            <span key={index} className="footer-nav-link-two">
              {link}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-socials">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer">
            <img src={social.icon} alt={`Icon for ${social.href}`} className="social-icon" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default FooterSection;
