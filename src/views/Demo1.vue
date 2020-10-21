<template>
  <div class="home">
    <h2>Composition API</h2>
    <p>
      Composition
      APIはコンポーネントのロジックの柔軟な再構成を可能にする関数ベースのAPI群です。
    </p>
    <CompositionAPIDemo :maxContentLength="10" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CompositionAPIDemo from "@/components/CompositionAPIDemo.vue";

export default defineComponent({
  name: "Demo1",
  components: {
    CompositionAPIDemo
  }
});
</script>
