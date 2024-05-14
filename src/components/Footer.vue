<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <a href="/" class="logo">
            <img
              src="@/assets/diagora_logo.png"
              alt="Logo Diagora"
              class="logo-image"
            />
            <strong class="logo-text">Diagora</strong>
          </a>
        </div>
        <div class="footer-section">
          <div class="footer-title">CONTACT</div>
          <ul class="contact-list">
            <li>
              <i class="fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/diagora-epitech-949997258/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link"
                >Linkedin</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <div class="footer-title">MENTIONS LÉGALES</div>
          <ul class="legal-list">
            <li><a href="/tos">Conditions d'utilisation</a></li>
            <li><a href="/privacy-policy">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <div class="footer-title">PLUS</div>
          <ul class="more-list">
            <li>
              <a class="link" @click="smoothScroll('#team')"
                >À propos de nous</a
              >
            </li>
            <li>
              <a class="link" @click="smoothScroll('#services')"
                >Nos services</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
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

<style>
.footer-container {
  z-index: 100;
  position: relative;
  background-color: rgb(30, 38, 68);
  color: #fff;
  padding: 40px 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  max-width: 300px;
  margin-right: 20px; /* Add spacing between sections */
}

.footer-section:last-child {
  margin-right: 0; /* Remove margin for the last section */
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}

.logo-image {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-weight: bold;
}

.description {
  margin-top: 10px;
}

.footer-title {
  font-weight: bold;
  margin-bottom: 10px; /* Add space below title */
}

.contact-list,
.legal-list,
.more-list {
  list-style-type: none;
  padding: 0;
}

.contact-link,
.legal-list a,
.more-list a {
  color: #fff;
  text-decoration: none;
}

.contact-link:hover,
.legal-list a:hover,
.more-list a:hover {
  text-decoration: underline;
}

.contact-link {
  margin-left: 5px; /* Add margin between LinkedIn logo and text */
}
</style>
