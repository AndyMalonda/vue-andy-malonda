<script setup>
import Header from "./components/Header.vue";
import HeaderNav from "./components/HeaderNav.vue";
import Presentation from "./components/Presentation.vue";
import Parcours from "./components/Parcours.vue";
</script>

<template>
  <div id="landingView">
    <header class="bg-primary rounded-left">
      <img
        alt="Portrait"
        class="logo rounded-circle"
        src="./assets/profile.jpeg"
        width="175"
        height="175"
      />

      <div class="wrapper">
        <Header name="Andy Malonda" />
      </div>
    </header>

    <main class="my-auto">
      <HeaderNav />
    </main>
  </div>

  <div id="aboutMe">
    <Presentation />
  </div>

  <div id="cursus">
    <Parcours />
  </div>
</template>

<style scoped>
#landingView,
#aboutMe,
#cursus {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  height: 100vh;
}

header {
  line-height: 1.5;
  padding-top: 1rem;
}

.logo {
  display: block;
  margin: 20px auto;
}

.rounded-circle {
  border-radius: 50% !important;
}

@media (min-width: 1024px) {
  #landingView {
    flex-direction: row;
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    margin-top: 0;
    margin-bottom: 0;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem;
  }

  .rounded-left {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>