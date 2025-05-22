import React from "react";
import "./App.css";
import logo from "../public/logo.png";
import pointIcon from "../public/Point.png";
import peopleIcon from "../public/People.png";
import cardIcon from "../public/Card.png";
import favoriteIcon from "../public/Favorite.png";
import instagramIcon from "../public/instagram.png";
import twitterIcon from "../public/twitter.png";
import facebookIcon from "../public/facebook.png";
import visaIcon from "../public/Visa.png";
import mastercardIcon from "../public/MasterCard.png";
import applepayIcon from "../public/ApplePay.png";
import paypalIcon from "../public/PayPal.png";
import sadIcon from "../public/sad.png";

const TopBar = () => {
  const texts = [
    "#buy now", "#вседлядому", "#швидкотазручно",
    "#buy now", "#вседлядому", "#buy now",
    "#вседлядому", "#швидкотазручно", "#buy now", "#вседлядому"
  ];

  return (
    <div id="DM-up">
      <div className="DM-scroll-content">
        {texts.map((text, index) => (
          <p className="DM-textLine" key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => (
  <nav>
    <div id="DM-navLeft">
      <div id="DM-divForBurgerMenu">
        <div id="DM-burgerMenu">
          <hr className="DM-lineInBurgerMenu" />
          <hr className="DM-lineInBurgerMenu" />
          <hr className="DM-lineInBurgerMenu" />
        </div>
        <h3 id="DM-h3ForBurgerMenu">Menu</h3>
      </div>
      <img src={logo} alt="logo" id="DM-logoInNav" />
      <div id="DM-divForTegA">
        <a href="#">Товари</a>
        <a href="#">Кімнати</a>
        <a href="#">Дизайн</a>
      </div>
    </div>
    <div className="DM-search-bar">
      <input type="text" placeholder="Пошук" />
    </div>
    <div id="DM-navRight">
      <div id="DM-kiev">
        <img src={pointIcon} alt="Location" />
        <p>Київ</p>
      </div>
      <div id="DM-login-pass">
        <img src={peopleIcon} alt="User" />
        <p>Привіт! Увійдіть в систему</p>
      </div>
      <div id="DM-card">
        <img src={cardIcon} alt="Card" />
      </div>
      <div id="DM-favorite">
        <img src={favoriteIcon} alt="Favorite" />
      </div>
    </div>
  </nav>
);

const EmptyCart = () => (
  <div className="DM-main">
    <h1>ВАШ СПИСОК БАЖАНЬ ПУСТИЙ...</h1>
    <img src={sadIcon} alt="Sad face" className="DM-sadIcon" />
  </div>
);

const Footer = () => {
  const footerCols = Array(4).fill(0).map((_, i) => (
    <div className="DM-footer-col" key={i}>
      <h4>Заголовок підрозділу</h4>
      {Array(8).fill(0).map((_, j) => (
        <p key={j}>Зміст підтеми</p>
      ))}
    </div>
  ));

  return (
    <footer>
      <div className="DM-footer-columns">
        {footerCols}
      </div>
      <div className="DM-footer-icons-row">
        <div className="DM-footer-icons-row">
          <div className="DM-social-icons">
            <img src={instagramIcon} alt="Instagram" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
          <div className="DM-payment-icons">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="MasterCard" />
            <img src={applepayIcon} alt="ApplePay" />
            <img src={paypalIcon} alt="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="DM-app-container">
      <TopBar />
      <div id="DM-mainDiv">
        <NavBar />
      </div>
      <div className="DM-wrapper">
        <EmptyCart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
