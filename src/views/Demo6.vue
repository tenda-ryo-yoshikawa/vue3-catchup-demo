<template>
  <h2>$attrs</h2>
  <p>
    $attrsの機能が拡張され、$listeners、class、styleが$attrsから取得できるようになりました。
  </p>
  <AttrButton @click="handleClick" class="peekaboo-btn" />
  <div v-show="isActive" class="peekaboo">Peekaboo!!</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import AttrButton from "@/components/AttrButton.vue";

export default defineComponent({
  name: "Demo6",
  components: {
    AttrButton
  },
  setup() {
    const isActive = ref(false);

    const handleClick = () => {
      isActive.value = true;
    };

    return {
      handleClick,
      isActive
    };
  }
});
</script>
<style scoped>
.peekaboo {
  color: #ff801b;
  font-size: 4rem;
  margin-top: 3rem;
}

::v-global(.peekaboo-btn) {
  background-color: #ff801b;
}
</style>
