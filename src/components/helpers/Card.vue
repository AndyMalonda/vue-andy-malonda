<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkDescription: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <a
        v-if="link"
        :href="link"
        class="card-link"
        target="_blank"
        rel="noopener"
        >{{ linkDescription }}</a
      >
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

.card-description {
  font-size: 1rem;
  color: var(--color-text);
}

.card-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

@media (min-width: 1024px) {
  .card {
    margin-top: 0;
    padding: 1rem;
  }
}
</style>
