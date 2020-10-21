<template>
  <div class="u-info">{{ name }}</div>
  <div class="u-info">{{ email }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.u-info {
  margin-top: 0.4em;
  font-size: 1.5rem;
  color: #434388;
}
</style>
