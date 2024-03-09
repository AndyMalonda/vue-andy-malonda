<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link :to="{ path: '/', hash: item.sectionId }">
    <div class="item bg-secondary">
      <div class="row">
        <i class="icon">
          <slot name="icon"></slot>
        </i>
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  cursor: pointer;
}

.item {
  position: relative;
  transition: all 0.5s ease;
}

.item:hover {
  background: var(--color-tertiary);
  color: white;
}

.item:hover .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-tertiary);
  color: white;
  border: none;
}

.item:hover h3 {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.icon {
  padding: 0.6rem;
  transition: all 0.5s ease;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: var(--nav-icon-size);
  height: var(--nav-icon-size);

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-tertiary);
}

@media (min-width: 1024px) {
  .item {
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    padding-right: 10px !important;
    height: var(--nav-item-height);
  }

  .details {
    margin-left: 1.5rem;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: var(--nav-item-height);
    height: var(--nav-item-height);
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
