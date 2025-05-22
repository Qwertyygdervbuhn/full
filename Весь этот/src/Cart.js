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
    <div id="up-DM">
      <div className="scroll-content-DM">
        {texts.map((text, index) => (
          <p className="textLine-DM" key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => (
  <nav className="nav-DM">
    <div id="navLeft-DM">
      <div id="divForBurgerMenu-DM">
        <div id="burgerMenu-DM">
          <hr className="lineInBurgerMenu-DM" />
          <hr className="lineInBurgerMenu-DM" />
          <hr className="lineInBurgerMenu-DM" />
        </div>
        <h3 id="h3ForBurgerMenu-DM">Menu</h3>
      </div>
      <img src={logo} alt="logo" id="logoInNav-DM" />
      <div id="divForTegA-DM">
        <a href="#">Товари</a>
        <a href="#">Кімнати</a>
        <a href="#">Дизайн</a>
      </div>
    </div>
    <div className="search-bar-DM">
      <input type="text" placeholder="Пошук" />
    </div>
    <div id="navRight-DM">
      <div id="kiev-DM">
        <img src={pointIcon} alt="Location" />
        <p>Київ</p>
      </div>
      <div id="login-pass-DM">
        <img src={peopleIcon} alt="User" />
        <p>Привіт! Увійдіть в систему</p>
      </div>
      <div id="card-DM">
        <img src={cardIcon} alt="Card" />
      </div>
      <div id="favorite-DM">
        <img src={favoriteIcon} alt="Favorite" />
      </div>
    </div>
  </nav>
);

const EmptyCart = () => (
  <div className="main-DM">
    <h1>ВАША КОРЗИНА ПУСТА...</h1>
    <img src={sadIcon} alt="Sad face" className="sadIcon-DM" />
  </div>
);

const Footer = () => {
  const footerCols = Array(4).fill(0).map((_, i) => (
    <div className="footer-col-DM" key={i}>
      <h4>Заголовок підрозділу</h4>
      {Array(8).fill(0).map((_, j) => (
        <p key={j}>Зміст підтеми</p>
      ))}
    </div>
  ));

  return (
    <footer className="footer-DM">
      <div className="footer-columns-DM">
        {footerCols}
      </div>
      <div className="footer-icons-row-DM">
        <div className="social-icons-DM">
          <img src={instagramIcon} alt="Instagram" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={facebookIcon} alt="Facebook" />
        </div>
        <div className="payment-icons-DM">
          <img src={visaIcon} alt="Visa" />
          <img src={mastercardIcon} alt="MasterCard" />
          <img src={applepayIcon} alt="ApplePay" />
          <img src={paypalIcon} alt="PayPal" />
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-container-DM">
      <TopBar />
      <div id="mainDiv-DM">
        <NavBar />
      </div>
      <div className="wrapper-DM">
        <EmptyCart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
