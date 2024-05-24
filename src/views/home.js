import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import Gallery7 from '../components/gallery7'
import Features7 from '../components/features7'
import Client from '../components/client'
import './home.css'

const Home = (props) => {
  return (
    <div id="home" className="home-container">
      <Helmet>
        <title>Agency modern template</title>
        <meta property="og:title" content="Agency modern template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <a href="#Quote" className="home-link">
              <img alt="image" src="/subject-200w.png" className="home-logo" />
            </a>
            <span className="home-company">
              <span>АЛИНА ТАТУ</span>
              <br></br>
            </span>
          </div>
          <div className="home-items">
            <div className="home-links">
              <a href="#prices" className="home-link1 nav-link">
                <span>Услуги</span>
                <br></br>
              </a>
              <a href="#About" className="home-link2 nav-link">
                Отзывы
              </a>
              <a href="#Footer" className="home-link3 nav-link">
                <span>Контакты</span>
                <br></br>
              </a>
            </div>
            <button className="start-button button home-button">
              <a
                href="https://vk.com/im?media=&amp;sel=-211823548"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <span className="home-text06">Записаться</span>
                <br></br>
              </a>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button1 button">
              <img alt="image" src="/hamburger.svg" className="home-image" />
              <span className="home-text08">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img alt="image" src="/logo.svg" className="home-logo1" />
                  <span className="home-company1">SPYRL</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button2">
                  <span className="home-text13">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header id="Quote" className="home-hero">
        <div className="home-header">
          <h1 className="home-title">
            &quot;Все, что ты можешь вообразить - реально!&quot;
          </h1>
          <p className="home-description">-Пабло Пикассо</p>
        </div>
      </header>
      <div className="home-container1">
        <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
        <div className="home-container2">
          <div className="home-container3"></div>
        </div>
      </div>
      <div className="home-video"></div>
      <Gallery7
        content1=" "
        heading1="Мои работы"
        image1Src="/image%202427-1500w.jpeg"
        image2Src="/image%201205-1500w.jpeg"
        image3Src="/image%200146-1500w.jpg"
        image4Src="/image%202495-1500w.jpeg"
        image5Src="/telegram%20web%20photo%20y%20(3)-1500w.jpg"
        image6Src="/telegram%20web%20photo%20y%20(2)%20(1)-1500w.jpg"
        image7Src="/image%206722%20(1)-1500w.jpeg"
        rootClassName="gallery7-root-class-name"
      ></Gallery7>
      <div id="prices" className="home-client">
        <Features7
          feature1Title="Тату и перманетный макияж"
          feature2Title="Картины под заказ"
          feature3Title="Роспись одежды"
          feature1Slogan="От 5000 рублей"
          feature2Slogan="От 10000 рублей"
          feature3Slogan="От 3000 рублей"
          feature1Description="Эскизы рисую, татушки бью, губки с бровями крашу"
          feature2Description="Живописю за ваши деньги"
          feature3Description="Футболочки, курточки, худи, кроссовки"
        ></Features7>
        <p className="home-text14">
          Свяжитесь со мной, и я помогу вам превратить ваши идеи в уникальные
          татуировки и произведения искусства, которые будут радовать вас каждый
          день.
        </p>
        <a
          href="https://vk.com/im?media=&amp;sel=-211823548"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link5 start-button button"
        >
          <span className="home-text15">
            <span className="home-text16">Записаться</span>
            <br></br>
          </span>
        </a>
      </div>
      <div id="About" className="home-about">
        <div className="home-clients">
          <div className="home-header1">
            <h2 className="home-title1 heading">
              <span>Отзывы клиентов</span>
              <br></br>
            </h2>
          </div>
          <div className="home-grid">
            <div className="home-column">
              <Client
                quote='"Как молодой художник, я всегда в поиске вдохновения, и татуировки от Алины – это источник непрерывного восторга. Каждый раз, когда я решаю сделать новую татуировку, я доверяю только ей. Её мастерство и внимание к деталям потрясают. Алина точно понимает мои идеи и превращает их в уникальные произведения искусства на моей коже. Её работы всегда превосходят мои ожидания, и я с гордостью ношу каждую татуировку, сделанную ею."'
                author="Алиса"
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@zeng"
                rootClassName="client-root-class-name"
              ></Client>
            </div>
            <div className="home-column1">
              <Client
                quote='"Алина – великолепный тату-мастер! Ее работы всегда превосходят мои ожидания. Талант и внимание к деталям делают каждую татуировку настоящим произведением искусства."'
                author="Ольга"
                avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@motech"
              ></Client>
              <Client
                quote='"Алина – талантливый художник, и её картины всегда впечатляют! Я люблю заказывать у неё работы, потому что каждый штрих наполнен эмоциями и глубиной. Её мастерство вдохновляет и оставляет незабываемые впечатления."'
                author="Игорь"
                avatar="/image%202495-1500w.jpeg"
                mention="@yorgu.official"
              ></Client>
            </div>
          </div>
        </div>
      </div>
      <footer id="Footer" className="home-footer">
        <div className="home-information">
          <div className="home-details">
            <div className="home-header2">
              <div className="home-branding2">
                <a href="#Quote" className="home-link6">
                  <img
                    alt="image"
                    src="/subject-200w.png"
                    className="home-logo2"
                  />
                </a>
                <span className="home-company2">
                  <span>АЛИНА ТАТУ</span>
                  <br></br>
                </span>
              </div>
              <div className="home-location">
                <span className="home-caption">Где студия?</span>
                <a
                  href="https://yandex.ru/maps/org/family_ink_tattoo/3729869066/?ll=37.514377%2C55.806165&amp;z=13"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-value"
                >
                  <span className="home-text22">Возле метро Сокол</span>
                  <br></br>
                </a>
              </div>
            </div>
            <div className="home-location1"></div>
          </div>
          <div className="home-links2">
            <a
              href="https://www.instagram.com/alina_evdik/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social social"
            >
              Instagram
            </a>
            <a
              href="https://t.me/alina_evdik"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social1 social"
            >
              <span>Telegram</span>
              <br></br>
            </a>
            <a
              href="https://vk.com/portakotalina"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social2 social"
            >
              <span>VK</span>
              <br></br>
            </a>
          </div>
          <a
            href="https://vk.com/im?media=&amp;sel=-211823548"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link7 start-button button"
          >
            <span className="home-text28">
              <span>Записаться</span>
              <br></br>
            </span>
          </a>
        </div>
        <img
          alt="image"
          src="/image%208436-1500w.jpg"
          className="home-image1"
        />
      </footer>
    </div>
  )
}

export default Home
