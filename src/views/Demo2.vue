<template>
  <div class="home">
    <h2>Teleport</h2>
    <p>
      Teleportは定義したコンポーネントが属するDOMツリーとは別の場所に、内部のコンポーネントをテレポート（移動）できる機能です。Vue2系ではサードパーティのプラグインLinusBorg/portal-vueで実現されていました。
    </p>
    <p>
      Teleportを利用すると、いままでz-indexで調整していたDOMの重なり順を宣言的に制御できるようになります。scoped指定のstyleもそのまま適用されます。
    </p>
    <div class="container">
      <teleport to="#teleport-target">
        <div class="teleport-dom">テレポートしたDOM</div>
      </teleport>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Demo2",
  setup() {
    const isVisible = ref(false);

    const toggleModal = () => {
      isVisible.value = !isVisible.value;
    };
    return {
      isVisible,
      toggleModal
    };
  }
});
</script>
<style scoped>
.teleport-dom {
  height: 100px;
  width: 200px;
  margin: 0 auto;
  background-color: darkslategray;
  color: aliceblue;
  line-height: 100px;
}
</style>
