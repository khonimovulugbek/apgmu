<template>
  <div class="container">
    <div class="nav" v-if="poisk">
      <div class="nav__left">
        <img src="../assets/imgs/gerb.png" alt=""/>
        <div class="nav__left-info">
          <h1 class="nav__left-info-title">
            Главное медицинское управление при Администрации Президента Республики Узбекистан
          </h1>
        </div>
        <img src="../assets/imgs/logo.png" alt=""/>
      </div>

      <div class="nav__right">
        <button class="nav__burger" @click="burger=true">
          <img src="../assets/imgs/burger.svg" alt="">
        </button>
        <div class="nav__right-list" :class="{active:burger}">
          <button class="nav__close" @click="burger=false">
            <img src="../assets/imgs/close.svg" alt="">
          </button>
          <div class="nav__right-lang">
            <button @click="grid = !grid">
              <div class="div" v-if="grid">
                <img class="img" src="../assets/imgs/uzb.png" alt=""/>
              </div>
              <div class="div" v-else>
                <img class="img" src="../assets/imgs/rus.png" alt=""/>
              </div>
              <span v-if="grid">uzb</span>
              <span v-else>rus</span>
            </button>

          </div>


          <button @click="moonAndsun=!moonAndsun,addBody">
            <div class="nav__right-animation" v-if="moonAndsun" @click="addBody">
              <img src="../assets/imgs/moon.svg" alt="">
            </div>
            <div class="nav__right-animation" v-else @click="addBody">
              <img src="../assets/imgs/sun.svg" alt="">
            </div>
          </button>

        </div>

      </div>
    </div>


  </div>
  
  <div class="home__nav">
    <div class="container">
      <button class="home__burger" @click="nav=true">
        <img src="../assets/imgs/burger.svg" alt="">
      </button>
      <ul class="home__nav-list" :class="{active:nav}">

        <button class="home__close" @click="nav=false">
          <img src="../assets/imgs/close.svg" alt="">
        </button>
        <router-link class="home__nav-list-li" to="/">Главная</router-link>
        <router-link class="home__nav-list-li" to="/about"
        >Руководство
        </router-link
        >
        <router-link class="home__nav-list-li" to="/malumot">О нас</router-link>
        <router-link class="home__nav-list-li" to="/tashkilot"
        >Подведомственные организации
        </router-link
        >
        <router-link class="home__nav-list-li" to="/dokument"
        >Документация
        </router-link
        >
        <router-link class="home__nav-list-li" to="/tendir"
        >Тендирь
        </router-link
        >
        <router-link class="home__nav-list-li" to="/danniy"
        >Открытые данные
        </router-link
        >
        <router-link class="home__nav-list-li" to="/kontakt"
        >Контакты
        </router-link
        >
        <router-link class="home__nav-list-li" to="/yangiliklarone"
        >Новости
        </router-link>

      </ul>

    </div>
  </div>
</template>
<script>
let body = document.querySelector("body");
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      grid: true,
      poisk: true,
      search: false,
      back: false,
      moonAndsun: true,
      burger: false,
      nav: false,
    };
  },
  methods: {
    ...mapActions(["getUsers"]),
    addBody() {
      body.classList.toggle('active')
    }
  },

  mounted() {
    this.getUsers()
  },
};
</script>

<style lang="scss">
.home__nav-list-li.router-link-exact-active {
  color: red;
  padding: 0 5px;
  border-radius: 5px;
  transition: 0.5s;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
  0 2px 0 1px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.home__nav {
  animation: color 2s linear infinite;
  transition: 0.5s;
  @keyframes color {
    from {

    }
    to {

    }
  }
}

button {
  display: flex;
  align-items: center;
  gap: 5px;
  color: red;
  font-size: 18px;
  font-weight: 600;
}

.div {
  width: 40px;
  height: 40px;
  background: rgb(218, 216, 216);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 5px 0 0 grey;

  img {
    width: 30px;
    background: white;
    height: 30px;
    border-radius: 50%;
  }
}

.nav {
  margin-top: 50px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  &__close {
    display: none;
  }

  &__burger {
    display: none;

    img {
      width: 30px;
    }
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 5px 15px;
    border-radius: 10px;
    background: unset;
    font-size: 16px;
    font-weight: 600;
    border: none;
    outline: none
  }

  &__back,
  &__close {
    img {
      width: 40px;
      height: 40px;

    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 30px;

    img {
      width: 85px;
      height: 85px;

    }

    &-info {
      &-title {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 600;
        max-width: 400px;
        width: 100%;
        color: darkblue;
      }

      &-text {
        font-size: 18px;
        font-weight: 700;
        color: red;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 20px;

    &-list {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    &-animation {
      img {
        width: 25px;
        height: 25px;
      }
    }

    &-lang {
      display: flex;
      gap: 20px;
      align-items: center;

      button {
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .nav {
    &__left {
      gap: 20px;

      img {
        width: 70px;
        height: 70px;
      }

      &-info {
        &-title {
          font-size: 17px;
        }
      }
    }

    &__right {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}

@media (max-width: 850px) {
  .nav {
    &__left {
      gap: 15px;

      img {
        width: 60px;
        height: 60px;
      }

      &-info {
        &-title {
          font-size: 16px;
          max-width: 300px;
          width: 100%;
        }
      }
    }

    &__right {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}

@media (max-width: 750px) {
  .nav {
    &__left {
      gap: 15px;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 30px;

      img {
        width: 60px;
        height: 60px;
      }

      &-info {
        &-title {
          font-size: 16px;
          max-width: 300px;
          width: 100%;
        }
      }
    }

    &__right {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}

@media (max-width: 550px) {
  .nav {
    &__burger {
      display: block;
    }

    &__cnopca {
      gap: 150px;

    }

    &__close {
      display: block;
      position: absolute;
      right: 50px;
      top: 50px;
    }

    &__right {
      &-list {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: black;
        left: 0;
        top: -100%;
        transition: 0.5s;
        z-index: 99;

        &.active {
          top: 0;

        }

      }

    }
  }
  .home {
    z-index: -1;
    scroll-timeline: none;
  }
}

@media (max-width: 500px) {
  .nav {
    &__left {
      img {
        width: 50px;
        height: 50px;
      }

      &-info {
        &-title {
          font-size: 15px;
          max-width: 250px;

        }
      }
    }

    &__burger {
      display: block;
    }

    &__cnopca {
      gap: 150px;

    }

    &__close {
      display: block;
      position: absolute;
      right: 50px;
      top: 50px;
    }

  }
}

@media (max-width: 400px) {
  .nav {
    flex-direction: column-reverse;
    margin-top: 150px;

    &__left {
      img {
        width: 45px;
        height: 45px;
      }

      &-info {
        &-title {
          font-size: 14px;
          max-width: 250px;

        }
      }
    }

    &__burger {
      display: block;

      img {
        width: 20px;
        position: absolute;
        right: 30px;
        top: 30px;
      }
    }

  }
}

</style>



