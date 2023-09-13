import logoGmail from "../../assets/logogmail.png";
import logoFacebook from "../../assets/Ellipse 18.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="main-footer-item" style={{ alignItems: "unset" }}>
          <div className="title-footer">ShopCart</div>
          <div className="desc-footer">
            Amazing products, Authentic and unique digital creation.
          </div>
          <div className="logo-social-network">
            <a href="https://www.facebook.com/thutrang.5631">
              <img src={logoGmail} alt="logo-facebook" />
            </a>
            <a href="https://mail.google.com/">
              <img src={logoFacebook} alt="logo-gmail" />
            </a>
          </div>
          <div className="extra-footer-item">
            Copyright 2022 ShopCart, All right reserved.
          </div>
        </div>
        <div className="main-footer-item">
          <div className="policy-title">Customer Care</div>
          <span>Contact Us</span>
          <span>Payment & Tax</span>
          <span>Bonus Point</span>
          <span>Policy</span>
        </div>
        <div className="main-footer-item">
          <div className="policy-title">Resources</div>
          <span>Help Center</span>
          <span>Partners</span>
          <span>Blog</span>
          <span>Newsletter</span>
        </div>
        <div className="main-footer-item">
          <div className="policy-title">Company</div>
          <span>About Us</span>
          <span>Careers</span>
          <span>Support</span>
          <span>Supply Chain</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
