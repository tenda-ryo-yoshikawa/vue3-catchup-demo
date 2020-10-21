<template>
  <h2>Suspense</h2>
  <p>
    Suspenseは非同期処理が解決されるまでフォールバックコンテンツ（例えばLoading中アイコン）を表示してくれる特別なコンポーネントです。いままで
    v-if="loading === true"
    などの状態変数を使って制御していたものを、状態変数を使わずに簡潔に書くことができます。
  </p>
  <p><span class="muted">正式リリースはv3.1</span></p>
  <Suspense>
    <template #default>
      <AsyncUsers />
    </template>
    <template #fallback>
      <span class="fallback">loading...</span>
    </template>
  </Suspense>
</template>

<script>
import { defineComponent } from "vue";
import AsyncUsers from "@/components/AsyncUsers.vue";

export default defineComponent({
  name: "Demo4",
  components: {
    AsyncUsers
  }
});
</script>
<style>
.fallback {
  font-weight: bolder;
  font-size: 1.5em;
}
.muted {
  color: #555;
  font-size: 0.8em;
}
</style>
