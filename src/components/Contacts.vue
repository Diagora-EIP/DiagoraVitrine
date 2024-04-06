<template>
  <div class="container-fluid" id="contact">
    <span class="big-circle"></span>
    <img src="img/shape.png" class="square" alt="" />
    <div class="form">
      <div class="contact-info">
        <h3 class="title">Contactez-nous</h3>
        <p class="text">
          Diagora est la solution de Livraison dont vous avez besoin. Nous
          développons actuellement notre version bêta et recherchons des
          testeurs pour nous rejoindre.
        </p>

        <div class="info">
          <div class="information">
            <i class="fas fa-map-marker-alt"></i>
            <p>3 Pl. Paul Bec, 34000 Montpellier</p>
          </div>
          <div class="information">
            <i class="fas fa-envelope"></i>
            <p>diagora.contact@gmail.com</p>
          </div>
          <div class="information">
            <i class="fas fa-phone"></i>
            <p>+33 7 81 03 40 62</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form id="contact-form" @submit.prevent="submitForm" autocomplete="off">
          <h3 class="title">Contactez-nous</h3>
          <div class="input-container">
            <div class="input-container">
              <input
                type="text"
                name="user_name"
                v-model="formData.name"
                class="input"
                placeholder="Nom"
                required
              />
            </div>
          </div>
          <div class="input-container">
            <input
              type="email"
              name="user_email"
              v-model="formData.email"
              class="input"
              placeholder="E mail"
              required
            />
          </div>

          <div class="input-container">
            <input
              type="tel"
              name="user_phone"
              v-model="formData.phone"
              class="input"
              placeholder="Téléphone"
              v-mask="'(##) ## ## ## ##'"
              required
            />
          </div>
          <div class="input-container textarea">
            <textarea
              v-model="formData.message"
              class="input"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <input type="submit" value="Envoyer" class="btn" />
        </form>
      </div>
    </div>
  </div>
  <Notification
    v-if="showNotification"
    :message="notificationMessage"
    :isSuccess="isSuccess"
    :isError="isError"
    @close="closeNotification"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Notification from "@/components/Notification.vue"; // Adjust the path as needed

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default defineComponent({
  name: "Contact",
  components: {
    Notification,
  },
  setup() {
    const formData = ref<FormData>({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const showNotification = ref(false);
    const notificationMessage = ref("");
    const isSuccess = ref(false);
    const isError = ref(false);

    const submitForm = () => {
      const sendformData = {
        user_name: formData.value.name,
        user_email: formData.value.email,
        user_phone: formData.value.phone,
        message: formData.value.message,
      };

      const data = {
        service_id: "service_tje3upt",
        template_id: "template_ac1o5lj",
        user_id: "vpbB8q_8js4zvHSnT",
        template_params: sendformData,
      };

      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            showNotification.value = true;
            isSuccess.value = true;
            notificationMessage.value = "Votre e-mail est envoyé !";
            formData.value = {
              name: "",
              email: "",
              phone: "",
              message: "",
            };
          } else {
            return response.json().then((error) => {
              showNotification.value = true;
              isError.value = true;
              notificationMessage.value = "Oops... " + JSON.stringify(error);
              throw new Error(JSON.stringify(error));
            });
          }
        })
        .catch((error) => {
          console.error("Oops... ", error);
        });
    };

    const closeNotification = () => {
      showNotification.value = false;
    };

    return {
      formData,
      submitForm,
      showNotification,
      notificationMessage,
      isSuccess,
      isError,
      closeNotification,
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input,
textarea {
  font-family: "Poppins", sans-serif;
}

.container-fluid {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 2;
  background-color: white;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

.form {
  width: 100%;
  max-width: 820px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  background-color: #01aba8;
  position: relative;
}

.circle {
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #01aba8);
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.big-circle {
  opacity: 0.5;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: #01aba8;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

form {
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 5px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 5px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  /* Position the label initially */
  position: absolute;
  bottom: 10px; /* Adjust this value as needed */
  left: 15px;
  transform: translateY(0);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.btn {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #01aba8;
  line-height: 1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Added transitions */
  margin: 0;
  width: 100%;
}

.btn:hover {
  background-color: #fafafa; /* Adjusted background color on hover */
  border-color: #01aba8; /* Adjusted border color on hover */
  color: #333; /* Adjusted text color on hover */
}

.input-container span {
  /* Position the animated placeholder initially */
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container textarea label {
  /* Adjust styles for the textarea label */
  top: 1rem;
  transform: translateY(0);
}

input::placeholder {
  color: #fafafa;
}

textarea::placeholder {
  color: #fafafa;
}

.input-container.focus span {
  top: -12px; /* Adjust this value as needed */
  left: 10px; /* Adjust left position as needed */
  font-size: 0.8rem; /* Adjust font size as needed */
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #01aba8;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  bottom: 30px; /* Adjust this value as needed */
  transform: translateY(-100%);
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: #01aba8;
}

.text {
  color: #333;
  margin: 1.5rem 0 2rem 0;
}

.information {
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

.information i {
  color: #01aba8;
  padding: 30px;
}

.information p {
  padding-left: 10px;
}

.icon {
  width: 28px;
  margin-right: 0.7rem;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: #333;
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, #01aba8, rgb(6, 134, 151));
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}

.social-icons a:hover {
  transform: scale(1.05);
}

.contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid #01aba8;
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
}

.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #01aba8, rgb(6, 134, 151));
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: #fafafa;
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}

.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 850px) {
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }

  .big-circle {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .contact-info:before {
    display: none;
  }

  .square,
  .big-circle {
    display: none;
  }

  form,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btn {
    padding: 0.45rem 1.2rem;
  }
}
</style>
