<template>
  <div class="services" id="services">
    <div class="container">
      <!-- Title section -->
      <div class="row">
        <div class="col-md-12">
          <div class="card shadow-none p-3 border-0 rounded-0">
            <h2 class="text-center service-title">
              Une plateforme sur mesure pour répondre à vos besoins de livraison
              spécifiques
            </h2>
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-md-3 mb-4">
          <div
            class="card shadow-none service-card p-3 border-0 rounded-0"
            v-for="(service, index) in services"
            :key="index"
            @click="selectedService = service"
            :class="{ selected: selectedService === service }"
          >
            <h5 class="card-title">
              <span v-if="selectedService === service" class="arrow-icon">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              {{ service.title }}
            </h5>
          </div>
        </div>
        <div class="col-md-9">
          <div class="content-container">
            <transition name="fade">
              <div
                class="card shadow-none p-5 border-0 rounded-0 card-content"
                v-if="selectedService"
              >
                <ul class="list-unstyled">
                  <li v-for="(point, i) in selectedService.points" :key="i">
                    <i class="point-icon far fa-circle-check"></i> {{ point }}
                  </li>
                </ul>
              </div>
              <div class="alert alert-info" v-else>
                Cliquez sur un service pour voir ses détails.
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/data/services.json";

export default {
  name: "Service",
  data() {
    return {
      services: services,
      selectedService: null,
    };
  },
  created() {
    this.selectedService = this.services[0];
  },
};
</script>

<style scoped>
.services {
  height: 100%;
  z-index: 2;
  position: relative;
  background-color: #ffffff;
  padding: 20px 0;
}

.container {
  background-color: #f1f1f1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service-title {
  font-size: 24px;
  color: #364f6b;
  font-weight: 400;
  font-family: "Oswald", "Arial Narrow", Arial, sans-serif;
}

.service-card {
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  padding-bottom: 10px;
  font-family: "Oswald", "Arial Narrow", Arial, sans-serif;
}

.point-icon {
  color: #01aba8;
}

.service-card:hover {
  color: #01aba8;
  border-bottom: 2px solid #01aba8;
  font-family: "Oswald", "Arial Narrow", Arial, sans-serif;
}

.selected {
  color: #01aba8 !important;
  border-bottom: 2px solid #01aba8 !important;
}

.section {
  background-color: inherit;
}

.card {
  background-color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Oswald", "Arial Narrow", Arial, sans-serif;
}

.card-title {
  font-size: 23px;
  font-weight: 600;
  font-family: "Oswald", "Arial Narrow", Arial, sans-serif;
}

.alert-info {
  margin-top: 20px;
  animation: fadeIn 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active,
.fade-enter-active .card-content,
.fade-leave-active .card-content {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.arrow-icon {
  margin-right: 10px;
}

.card-content {
  font-weight: 900px;
  font-size: 18px;
  animation: slideInRight 0.5s ease-in-out;
  height: 400px; /* Set a fixed height */
  overflow-y: auto; /* Enable vertical scrolling */
}

.card-content ul.list-unstyled li {
  padding-bottom: 20px; /* Add padding between each text */
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .col-md-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-md-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
