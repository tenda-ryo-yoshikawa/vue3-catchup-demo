<template>
  <form>
    <input type="text" v-model="formState.name" />
    <p
      :class="{
        'is-over': isOverLength
      }"
    >
      {{ contentLength }}
    </p>
    <button @click="submit" type="button" :disabled="isOverLength">
      Submit
    </button>
  </form>
</template>

<script>
import { defineComponent, computed, onMounted, reactive } from "vue";

export default defineComponent({
  props: {
    maxContentLength: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    // reactive data
    const formState = reactive({
      name: ""
    });

    // computed
    const contentLength = computed(
      () => `${formState.name.length} / ${props.maxContentLength}`
    );
    const isOverLength = computed(
      () => formState.name.length > props.maxContentLength
    );

    // emit
    const submit = () => context.emit("submit", formState);

    // lifecycle hook
    onMounted(() => {
      // ....
    });

    return {
      formState,
      contentLength,
      isOverLength,
      submit
    };
  }
});
</script>

<style scoped>
.is-over {
  color: #f00;
  font-weight: bold;
}
input {
  font-size: 2rem;
  padding: 0.7rem;
  color: #434343;
  border: solid 1px #ccc;
  border-radius: 3px;
}
button {
  padding: 0.7rem 1rem;
  color: #434343;
  border: solid 1px #ccc;
  border-radius: 3px;
}
</style>
