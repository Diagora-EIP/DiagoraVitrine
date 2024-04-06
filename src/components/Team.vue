<template>
  <section id="team" class="py-5">
    <div class="container">
      <div class="background-container"></div>
      <h2
        class="team-title text-center mb-4 position-relative font-weight-bold"
      >
        Notre Équipe
      </h2>
      <div class="row justify-content-center">
        <!-- First line of team members -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <div class="team-member card h-100 text-center p-4">
            <!-- Use require to dynamically load image paths -->
            <img
              :src="require(`@/assets/${member.image}`)"
              :alt="member.name"
              class="card-img-top rounded-circle team-member-image img-fluid"
            />
            <div class="card-body">
              <h3 class="card-title">{{ member.name }}</h3>
              <p class="card-text">{{ member.role }}</p>
              <div class="social-links">
                <!-- Iterate over social links for each member -->
                <a
                  v-for="link in member.social"
                  :key="link.name"
                  :href="
                    link.name === 'Email' ? 'mailto:' + link.url : link.url
                  "
                  class="social-link me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <!-- Use link.icon for displaying social icons -->
                  <i :class="link.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamMembersData from "@/data/team-members.json";

export default {
  name: "Team",
  data() {
    return {
      teamMembers: teamMembersData,
    };
  },
};
</script>

<style scoped>
#team {
  position: relative;
  z-index: 2;
  background: linear-gradient(
    135deg,
    #ffffff,
    #ffffff
  ); /* Dark blue gradient background */
  padding-bottom: 50px; /* Increased padding at the bottom */
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://plus.unsplash.com/premium_photo-1663045627496-441affafddf1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); /* Background image */
  background-size: cover;
  opacity: 0.1; /* Adjust opacity for subtlety */
  z-index: -1;
}

.team-title {
  font-family: "Livvic", serif !important;
  color: x#364f6b; /* White title text color */
  text-align: center; /* Center align the title */
  padding-top: 50px; /* Increased padding at the top */
}

.team-member {
  padding: 20px; /* Increased padding */
  max-width: 250px; /* Adjusted max-width */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: transform 0.3s ease; /* Smooth transition on hover */
}

.team-member:hover {
  transform: translateY(-5px); /* Hover effect */
}

.team-member-image {
  align-self: center;
  width: 100px; /* Adjust as needed */
  height: 100px; /* Adjust as needed */
  border: 4px solid #fff; /* White border around image */
  border-radius: 50%; /* Rounded image */
}

.social-links .social-link {
  color: #000000; /* White social link color */
}
</style>
