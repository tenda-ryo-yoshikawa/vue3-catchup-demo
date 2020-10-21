<template>
  <form>
    <input
      type="text"
      placeholder="Name"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    /><br />
    <input
      type="text"
      placeholder="E-Mail"
      :value="email"
      @input="$emit('update:email', $event.target.value)"
    /><br />
  </form>
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
input {
  font-size: 1.2rem;
  padding: 0.7rem;
  color: #434343;
  border: solid 1px #ccc;
  border-radius: 3px;
  margin-bottom: 0.4rem;
  width: 500px;
}
</style>
