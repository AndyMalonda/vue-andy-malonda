<script setup>
import ChevronUpIcon from "../icons/IconChevronUp.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isTop = ref(true);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isTop.value = window.pageYOffset === 0;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    isTop.value = window.pageYOffset === 0;
  });
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="back-to-top" v-show="!isTop">
    <button id="back-to-top-button" @click="scrollToTop">
      <ChevronUpIcon />
    </button>
  </div>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

#back-to-top-button {
  background-color: var(--primary);
  border: none;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  font-size: 1.5rem;
  height: 50px;
  width: 50px;
  outline: none;
  transition: background-color 0.3s;
}

#back-to-top-button:hover {
  color: white;
  background: var(--color-tertiary);
}

#back-to-top-button:focus {
  box-shadow: 0 0 0 3px var(--color-primary);
}

#back-to-top-button:active {
  transform: scale(0.9);
  color: var(--color-secondary);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 10px;
    right: 10px;
  }

  #back-to-top-button {
    font-size: 1.25rem;
    height: 40px;
    width: 40px;
  }
}

@media (max-width: 480px) {
  .back-to-top {
    bottom: 5px;
    right: 5px;
  }

  #back-to-top-button {
    font-size: 1rem;
    height: 30px;
    width: 30px;
  }
}

@media (max-width: 320px) {
  #back-to-top-button {
    font-size: 0.75rem;
    height: 25px;
    width: 25px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #back-to-top-button {
    transition: none;
  }
}
</style>
