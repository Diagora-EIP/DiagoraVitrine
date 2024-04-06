<template>
  <div class="About" id="about">
    <section style="background-color: #fffff">
      <div class="container py-5">
        <div class="main-timeline-2">
          <div
            v-for="(event, index) in projectEvents"
            :key="index"
            :class="['timeline-2', index % 2 !== 0 ? 'left-2' : 'right-2']"
          >
            <div class="card">
              <!-- Conditional rendering based on the presence of video and image -->
              <template v-if="event.video">
                <video
                  autoplay
                  muted
                  loop
                  :src="require(`@/assets/${event.video}`)"
                ></video>
              </template>
              <template v-else-if="event.image">
                <img :src="require(`@/assets/${event.image}`)" />
              </template>
              <template v-else>
                <p>No media available</p>
                <!-- Display a message if neither image nor video is provided -->
              </template>

              <div class="card-body p-4">
                <h4 class="fw-bold mb-4">{{ event.title }}</h4>
                <p class="text-muted mb-4">
                  <i class="far fa-clock" aria-hidden="true"></i>
                  {{ event.timestamp }}
                </p>
                <p class="mb-0">{{ event.description }}</p>
                <a :href="event.link">{{ event.linkText }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import about_data from "@/data/about.json";

export default {
  name: "About",
  data() {
    return {
      projectEvents: about_data,
    };
  },
};
</script>

<style scoped>
.About {
  width: 100%;
  height: 100%;
  z-index: 2 !important;
  background-color: #ffffff;
  padding: 40px 0;
  position: relative;
}

.card {
  z-index: 2;
}

.main-timeline-2 {
  z-index: 2;
  position: relative;
  width: 70%;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.main-timeline-2::after {
  content: "";
  position: absolute;
  width: 3px;
  background-color: #26c6da;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.timeline-2 {
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.timeline-2::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -11px;
  background-color: #01aba8;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left-2 {
  padding: 0px 40px 20px 0px;
  left: 0;
}

/* Place the container to the right */
.right-2 {
  padding: 0px 0px 20px 40px;
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left-2::before {
  content: " ";
  position: absolute;
  top: 18px;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right-2::before {
  content: " ";
  position: absolute;
  top: 18px;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right-2::after {
  left: -14px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .main-timeline-2::after {
    left: 31px;
  }

  /* Full-width containers */
  .timeline-2 {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .timeline-2::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left-2::after,
  .right-2::after {
    left: 18px;
  }

  .left-2::before {
    right: auto;
  }

  /* Make all right containers behave like the left ones */
  .right-2 {
    left: 0%;
  }
}
</style>
