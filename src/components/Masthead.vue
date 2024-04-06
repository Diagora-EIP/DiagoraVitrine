<template>
  <body class="masthead" id="home">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="masthead-content">
            <p class="masthead-subheading">
              Révolutionnez la livraison urbaine, pour des trajets finaux plus
              rapides, plus efficaces et plus durables
            </p>
            <h1 class="masthead-heading">DIAGORA</h1>
            <button @click="scrollToNextSection" class="scroll-button">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Masthead",
  methods: {
    scrollToNextSection() {
      const nextSection = document.querySelector(".services");
      if (nextSection) {
        const offset = nextSection.offsetTop - 90; // Adjust this value as needed
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.masthead {
  z-index: 2;
  position: relative;
  height: 100vh;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0);
  background-size: cover;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1; /* Ensure overlay is behind other elements */
}

.masthead-content {
  z-index: 2; /* Ensure content is above overlay */
  padding-top: 100px;
  padding-bottom: 100px;
  color: #f0f0f0;
}

.masthead-heading {
  z-index: 2; /* Ensure heading is above overlay */
  font-size: 75px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f0f0f0;
  position: relative;
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
}

.masthead-subheading {
  z-index: 2; /* Ensure subheading is above overlay */
  position: relative;
  font-size: 24px;
  margin-bottom: 20px;
  color: #f0f0f0;
  font-weight: 600;
  font-family: "Livvic", serif !important;
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
}

.scroll-button {
  box-shadow: 0px 2px 8px 0px rgb(255 255 255 / 16%);
  border-radius: 6px;
  background-color: #01aba8;
  border: 2px solid #01aba8;
  color: white;
  font-size: 30px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  position: relative; /* Ensure button is above overlay */
  z-index: 2; /* Ensure button is above overlay */
  font-family: "Livvic", serif !important;
}

.scroll-button:hover {
  border-color: #028b89;
  background-color: #028b89;
  color: #fff;
}
</style>
