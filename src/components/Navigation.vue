<template>
  <header :class="{ scrolled_nav: scrollPosition }">
    <nav>
      <div class="branding">
        <img src="@/assets/Logo.png" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><a class="link" @click="smoothScroll('#home')">Accueil</a></li>
        <li><a class="link" @click="smoothScroll('#services')">Solution</a></li>
        <li><a class="link" @click="smoothScroll('#about')">Évolution</a></li>
        <li><a class="link" @click="smoothScroll('#team')">Equipe</a></li>
        <li><a class="link" @click="smoothScroll('#contact')">Contact</a></li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa-solid fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a class="link" @click="smoothScroll('#home')">Accueil</a></li>
          <li>
            <a class="link" @click="smoothScroll('#services')">Solution</a>
          </li>
          <li><a class="link" @click="smoothScroll('#about')">Évolution</a></li>
          <li><a class="link" @click="smoothScroll('#team')">Equipe</a></li>
          <li><a class="link" @click="smoothScroll('#contact')">Contact</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      scrollPosition: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 90,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140%;
    }

    ul,
    .link {
      font-weight: 700;
      color: white;
      list-style: none;
      text-decoration: none;
      margin-bottom: 0;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #42a7be;
        border-color: #278ea5;
      }
    }

    .branding {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    .navigation:hover {
      cursor: pointer;
    }
    .icon {
      z-index: 3;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      color: #ffffff;
      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: white;
      top: 0;
      left: 0;
      li {
        margin-left: 0;
        .link {
          color: white;
        }
      }
    }
  }
}
</style>
