<template>
  <div
    class="notification"
    :class="{ success: isSuccess, error: isError, show: isVisible }"
    v-if="isVisible"
  >
    <span class="message">{{ message }}</span>
    <button class="close-btn" @click="closeNotification">&times;</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    isSuccess: Boolean,
    isError: Boolean,
  },
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = false;
      this.$emit("close");
    }, 5000);
  },
  methods: {
    closeNotification() {
      this.isVisible = false;
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.notification {
  z-index: 2;
  position: fixed;
  top: 90px; /* Adjust this value based on the height of your navbar */
  right: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.notification.success {
  background-color: #2ecc71;
}

.notification.error {
  background-color: #e74c3c;
}

.show {
  opacity: 1;
}

.message {
  margin-right: 10px;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
</style>
