
import React from "react";
import "./App.css";

import logo from "../public/logoDM.png";
import pointIcon from "../public/PointDM.png";
import peopleIcon from "../public/PeopleDM.png";
import cardIcon from "../public/CardDM.png";
import favoriteIcon from "../public/FavoriteDM.png";
import product1 from "../public/product1DM.png";
import product2 from "../public/product2DM.png";
import product3 from "../public/product3DM.png";
import product4 from "../public/product4DM.png";
import product5 from "../public/product5DM.png";
import instagramIcon from "../public/instagramDM.png";
import twitterIcon from "../public/twitterDM.png";
import facebookIcon from "../public/facebookDM.png";
import visaIcon from "../public/VisaDM.png";
import mastercardIcon from "../public/MasterCardDM.png";
import applepayIcon from "../public/ApplePayDM.png";
import paypalIcon from "../public/PayPalDM.png";
import product11 from "../public/product11DM.jpg";
import product22 from "../public/product22DM.jpg";
import product33 from "../public/product33DM.jpg";

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
        <a href="/products">Товари</a>
        <a href="/rooms">Кімнати</a> 
        <a href="/design">Дизайн</a>
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

const ProductSlider = () => {
  const products = [
    { id: 1, title: "Шафа", desc: "Дерево, білий", img: product1 },
    { id: 2, title: "Стілець", desc: "Метал, сірий", img: product2 },
    { id: 3, title: "Диван", desc: "Тканина, синій", img: product3 },
    { id: 4, title: "Комод", desc: "Дерево, коричневий", img: product4 },
    { id: 5, title: "Крісло", desc: "Шкіра, чорне", img: product5 }
  ];

  return (
    <div className="DM-product-slider">
      {products.map((item) => (
        <div className="DM-product-card" key={item.id}>
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const footerColumns = Array(4).fill({
    title: "Заголовок підрозділу",
    items: Array(8).fill("Зміст підтеми"),
  });

  return (
    <footer>
      <div className="DM-footer-columns">
        {footerColumns.map((col, index) => (
          <div className="DM-footer-column" key={index}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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
    </footer>
  );
};

function App() {
  return (
    <div className="DM-app-container" style={{ fontFamily: "sans-serif" }}>
      <TopBar />
      <NavBar />

      <section style={{ padding: "0 40px" }}>
        <h2>ТОВАРИ</h2>
        <ProductSlider />
      </section>

      <section>
        <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
        <p style={{ maxWidth: "700px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisci velit. Et tempora molestiae est.
        </p>

        <div className="DM-combo-section">
          <div className="DM-combo-left DM-image-wrapper DM-large">
            <img src={productLeftImg} alt="Основний товар" />
          </div>

          <div className="DM-combo-right">
            <div className="DM-combo-right-item DM-image-wrapper DM-small">
              <img src={productLeftImg} alt="Товар 1" />
            </div>
            <div className="DM-combo-right-item DM-image-wrapper DM-small">
              <img src={productLeftImg} alt="Товар 2" />
            </div>
          </div>
        </div>
        <div className="DM-combo-footer DM-image-wrapper DM-wide">
          <img src={productLeftImg} alt="Комбо підвал" />
        </div>
      </section>

      <div style={{ padding: "40px" }}>
        <section>
          <h2>НОВИНКИ</h2>
          <div className="DM-cozy-sets">
            {[product11, product22, product33].map((img, i) => (
              <div key={i}>
                <div className="DM-cozy-card">
                  <img src={img} alt={`Новинка ${i + 1}`} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>ЗАТИШНІ НАБОРИ</h2>
          <div className="DM-cozy-sets">
            {[product11, product22, product33].map((img, i) => (
              <div key={i}>
                <div className="DM-cozy-card">
                  <img src={img} alt={`Новинка ${i + 1}`} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
          <p style={{ maxWidth: "700px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisci velit. Et tempora molestiae est.
          </p>
          <div className="DM-combo-section">
            <div className="DM-combo-left DM-image-wrapper DM-large">
              <img src={productLeftImg} alt="Головний товар" />
            </div>
            <div className="DM-combo-right">
              <div className="DM-combo-right-item DM-image-wrapper DM-small">
                <img src={product11} alt="Супутній товар 1" />
              </div>
              <div className="DM-combo-right-item DM-image-wrapper DM-small">
                <img src={product22} alt="Супутній товар 2" />
              </div>
            </div>
          </div>
          <div className="DM-combo-footer DM-image-wrapper DM-wide">
            <img src={product33} alt="Комбо підвал" />
          </div>
        </section>

        <section className="DM-icons-section">
          {["Доставка🚚", "Оплата💳", "Оформлення📝", "Повернення↩️"].map((title, i) => (
            <div className="DM-icon-card" key={i}>
              <div className="DM-icon-placeholder">📦</div>
              <strong>{title}</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </section>

        {[1, 2, 3].map((_, i) => (
          <section key={i}>
            <h2>НАЗВА РОЗДІЛУ</h2>
            <p className="DM-text-block">
                Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed.
 Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed.
 Pellentesque odio feugiat volutpat amet 
sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
 ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. 
Commodo risus dolor turpis suspendisse convallis.
sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
 ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. 
Commodo risus dolor turpis suspendisse convallis..
            </p>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
