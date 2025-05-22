import React from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import ideaImg1 from "../public/idea1.jpg";
import ideaImg2 from "../public/idea2.jpg";
import ideaImg3 from "../public/idea3.jpg";
import masonryImg1 from "../public/masonry1.jpg";
import masonryImg2 from "../public/masonry2.jpg";
import masonryImg3 from "../public/masonry3.jpg";
import masonryImg4 from "../public/masonry4.jpg";
import masonryImg5 from "../public/masonry5.jpg";
import masonryImg6 from "../public/masonry6.jpg";
import masonryImg7 from "../public/masonry7.jpg";
import masonryImg8 from "../public/masonry8.jpg";
import masonryImg9 from "../public/masonry9.jpg";
import masonryImg10 from "../public/masonry10.jpg";

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
        <a href="/products">Товари</a>
        <a href="/rooms">Кімнати</a>
        <a href="/design">Дизайн</a>
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

const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1.5 } },
    ],
  };

  const slides = Array(7).fill("Назва набору");

  return (
    <div className="slider-wrapper-DM">
      <Slider {...settings}>
        {slides.map((title, index) => (
          <div key={index} className="slider-card-DM">
            <div className="slider-card-box-DM">{title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const IdeasCardsSection = () => {
  const cards = [
    { image: ideaImg1, label: "НОВА КОЛЕКЦІЯ 1" },
    { image: ideaImg2, label: "НОВА КОЛЕКЦІЯ 2" },
    { image: ideaImg3, label: "НОВА КОЛЕКЦІЯ 3" },
  ];

  return (
    <section className="ideas-cards-section-DM">
      <h2 className="ideas-cards-title-DM">НАША НОВА КОЛЕКЦІЯ</h2>
      <div className="ideas-cards-container-DM">
        {cards.map((card, index) => (
          <div className="ideas-card-DM" key={index}>
            <div className="ideas-card-image-DM">
              <img src={card.image} alt={`Card ${index + 1}`} />
            </div>
            <div className="ideas-card-label-DM">{card.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const IdeasMasonrySection = () => {
  const images = [
    masonryImg1, masonryImg2, masonryImg3, masonryImg4, masonryImg5,
    masonryImg1, masonryImg2, masonryImg3, masonryImg4, masonryImg5,
    masonryImg6, masonryImg7, masonryImg8, masonryImg9, masonryImg10
  ];

  return (
    <section className="ideas-masonry-section-DM">
      <h2 className="ideas-masonry-title-DM">ІДЕЇ</h2>
      <div className="ideas-masonry-grid-DM">
        {images.map((img, index) => (
          <div key={index} className="ideas-masonry-card-DM">
            <img src={img} alt={`Ідея ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const footerColumns = Array(4).fill({
    title: "Заголовок підрозділу",
    items: Array(8).fill("Зміст підтеми"),
  });

  return (
    <footer className="footer-DM">
      <div className="footer-columns-DM">
        {footerColumns.map((col, index) => (
          <div className="footer-column-DM" key={index}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
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

const App = () => {
  const ideas = [
    {
      title: "Оформлення гостинної",
      text: "Як підібрати меблі, щоб було стильно та зручно...",
      image: ideaImg1,
    },
    {
      title: "Затишна спальня",
      text: "Поради щодо текстилю, кольорів і світла для спальні.",
      image: ideaImg2,
    },
  ];

  return (
    <div className="app-container-DM">
      <TopBar />
      <NavBar />
      <section className="ideas-wrapper-DM">
        <h2 className="ideas-title-DM">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</h2>
        <p className="ideas-description-DM">
          Lorem ipsum dolor sit amet consectetur. Habitasse convallis gravida lectus blandit
          convallis a sed. Egestas sapien amet scelerisque mauris tincidunt. Massa est pellentesque
          facilisis vel...
        </p>
        {ideas.map((idea, index) => (
          <div className="idea-block-DM" key={index}>
            <div className="idea-image-DM">
              <img src={idea.image} alt={idea.title} />
            </div>
            <div className="idea-text-DM">
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
            </div>
          </div>
        ))}
      </section>
      <SliderSection />
      <IdeasCardsSection />
      <IdeasMasonrySection />
      <SliderSection />
      <Footer />
    </div>
  );
};

export default App;
