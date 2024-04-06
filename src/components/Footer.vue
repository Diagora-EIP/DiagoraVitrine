<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Entreprise</h3>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/portfolio">Portefeuille</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Nous suivre</h3>
        <ul class="social-links">
          <li>
            <a :href="'https://www.linkedin.com/in/diagora-epitech-949997258/'">
              <i class="fab fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Tous droits réservés par Diagora.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  z-index: 2;
  position: relative;
  background-color: #364f6b;
  color: white;
  padding: 10px 10px; /* Ajustement de la hauteur du footer */

  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .footer-section {
      flex: 1;
      margin: 0 20px;
      h3 {
        margin-bottom: 20px;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          margin-bottom: 10px;
        }
        a {
          color: white;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .social-links {
        display: flex;
        li {
          margin-right: 10px;
          a {
            color: white;
            font-size: 20px;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 10px; /* Ajustement de la marge supérieure */
  }
}
</style>
