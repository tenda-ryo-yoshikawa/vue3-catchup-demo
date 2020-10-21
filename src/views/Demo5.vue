<template>
  <h2>v-model</h2>
  <p>
    v-modelが拡張され、コンポーネントに対して複数のv-modelが設定できるようになります。
    この機能によってv-bind.syncは代替されるので利用できなくなります。
  </p>
  <VmFrom v-model:name="name" v-model:email="email" />
  <VmTo v-model:name="name" v-model:email="email" />
</template>

<script>
import { defineComponent, ref } from "vue";
import VmFrom from "@/components/VmFrom.vue";
import VmTo from "@/components/VmTo.vue";

export default defineComponent({
  components: {
    VmFrom,
    VmTo
  },
  setup() {
    const name = ref("三宅 陽一");
    const email = ref("kana.yoshimoto@nagisa.com");

    return {
      name,
      email
    };
  }
});
</script>
