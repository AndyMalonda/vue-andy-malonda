<template>
  <div class="card">
    <component :is="icon" v-bind="iconProps" class="card-icon" />
    <div class="card-content">
      <h3 class="card-title">{{ name }}</h3>
      <div class="card-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    iconProps: {
      type: Object,
      default: () => ({}),
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.15);
}

.card-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
}

.card-content {
  text-align: center;
}

.card-title {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.card-description {
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card:hover .card-description {
  opacity: 1;
}

/* Styles for medium screens */
@media (max-width: 1024px) {
  .card-description {
    font-size: 0.7rem;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
}

/* Styles for small screens */
@media (max-width: 768px) {
  .card {
    transition: none; /* Remove transition for small screens */
  }

  .card:hover {
    transform: none; /* Remove transform effect for small screens */
  }

  .card-description {
    opacity: 1; /* Always display text on small screens */
    transition: none; /* Remove transition for small screens */
  }
}
</style>