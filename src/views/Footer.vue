<template>


  <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo" >
            <a class="footer-logo-link" href="/">
              <img class="img-logo" src="../assets/imgs/logo.png" alt="APGMU" />
            </a>
          </div>
          <div class="footer-menu">
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <p>Главное медицинское управление при Администрации Президента Республики Узбекистан </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/">Главная</a></h2>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/malumot">О нас</a></h2>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/dokument">Документация</a></h2>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/kontakt">Контакты</a></h2>
          </div>

        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/about">
              Руководство
            </a></h2>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/tashkilot">
              Подведомственные организации </a></h2>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/danniy">Открытые данные</a></h2>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"><a href="/yangiliklarone">Новости</a></h2>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title">
              <font-awesome-icon icon="fa-solid fa-location-dot"/>
              Местоположение
            </h2>
            <p class="footer-call-to-action-description"> Узбекистан
              г. Ташкент, Яшнабадский район
              ул. С. Азимова-65</p>
          </div>
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title">
              <font-awesome-icon icon="fa-solid fa-phone"/>
              телефон
            </h2>
            <p class="footer-call-to-action-link-wrapper"><a class="footer-call-to-action-link" href="tel:+998555030300"
                                                             target="_self"> +998 555 03 03 00 </a></p>
          </div>
        </div>

      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            Copyright © 2020 - 2023 Главное медицинское
              управление при Администрации Президента Республики Узбекистан
          </p>
        </div>
      </div>
    </footer>
  </div>


</template>
<script>


export default {}
</script>

<style>

.img-logo{
  width: 35%;
  height: 35%;
}


a {
  color: #fff;
  text-decoration: none;
}

.pg-footer {
  font-family: 'Roboto', sans-serif;
}


.footer {
  background-color: #004658;
  color: #fff;
}

.footer-wave-svg {
  background-color: transparent;
  display: block;
  height: 20px;
  position: relative;
  top: -1px;
  width: 100%;
}

.footer-wave-path {
  fill: #fffff2;
}

.footer-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 1230px;
  padding: 40px 15px 300px;
  position: relative;

}

.footer-content-column {
  box-sizing: border-box;
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  color: #fff;
}

.footer-content-column ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-logo-link {
  display: inline-block;
}

.footer-menu {
  margin-top: 30px;
}

.footer-menu-name {
  color: #fffff2;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: .1em;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
}

.footer-menu-list {
  list-style: none;
  margin-bottom: 0;
  margin-top: 10px;
  padding-left: 0;
}

.footer-menu-list li {
  margin-top: 5px;
}

.footer-call-to-action-description {
  color: #fffff2;
  margin-top: 10px;
  margin-bottom: 20px;
}




.footer-call-to-action {
  margin-top: 30px;
}

.footer-call-to-action-title {
  color: #fffff2;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: .1em;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
}

.footer-call-to-action-link-wrapper {
  margin-bottom: 0;
  margin-top: 10px;
  color: #fff;
  text-decoration: none;
}

.footer-call-to-action-link-wrapper a {
  color: #fff;
  text-decoration: none;
}


.footer-copyright {
  background-color: #027b9a;
  color: #fff;
  padding: 15px 30px;
  text-align: center;
}

.footer-copyright-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

.footer-copyright-text {
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
}



/* Media Query For different screens */
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 850px;
    position: relative;
  }
}

@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 850px;
    position: relative;
  }
}

@media (min-width: 600px) and (max-width: 800px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 850px;
    position: relative;
  }
}

@media (min-width: 801px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */

}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */

}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */

}


@media (min-width: 760px) {
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 300px;
    position: relative;
  }

  .footer-wave-svg {
    height: 50px;
  }

  .footer-content-column {
    width: 24.99%;
  }
}

@media (min-width: 568px) {
  /* .footer-content-column {
      width: 49.99%;
  } */
}


</style>