<template>
  <button style="margin-right: 2rem;">PUSH(FAKE)</button>
  <button v-bind="$attrs">PUSH</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  setup() {}
});
</script>
