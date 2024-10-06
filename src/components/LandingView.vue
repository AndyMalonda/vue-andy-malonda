<script setup>
import Header from "./Header.vue";
import HeaderNav from "./HeaderNav.vue";
</script>

<template>
  <div id="landingView" class="section-view">
    <header class="bg-primary rounded-left">
      <img
        alt="Portrait"
        class="logo rounded-circle"
        src="../assets/profile.jpeg"
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
</template>

<style scoped>
.section-view {
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
}

#landingView {
  height: 100vh;
}

header {
  line-height: 1.5;
  padding-top: 1rem;
}

.logo {
  display: block;
  margin: 20px auto;
  border: 5px solid var(--color-tertiary);
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.3);
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
