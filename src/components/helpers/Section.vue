<!-- make a section component which can contain several <p> -->
<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<style scoped>
.section {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
}
</style>
