<template>
  <div class="home">
    <div class="hero"></div>
    <Masthead />
    <Services />
    <About />
    <Team />
    <Contacts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Team from "../components/Team.vue";
import Masthead from "../components/Masthead.vue";
import Services from "../components/Services.vue";
import About from "../components/About.vue";
import Contacts from "../components/Contacts.vue";
export default defineComponent({
  name: "Home",
  components: {
    Team,
    Masthead,
    Services,
    About,
    Contacts,
  },
});
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/truck.jpg");
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
