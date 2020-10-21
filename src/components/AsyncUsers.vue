<template>
  <ul>
    <li v-for="(user, i) in users" :key="i">{{ user }}</li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    // APIリクエストのモック 2000ms後にユーザー名の配列を返す
    const fetchUsers = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(["💂‍♀️ John", "💂‍♀️ Paul", "💂‍♀️ George", "💂‍♀️ Ringo"]);
        }, 2000);
      });
    }; // ユーザー名を取得

    // setup()内で読んでいるのでVue.js 2系で言うonCreated()と同じライフサイクルで実施される。
    const users = await fetchUsers();

    return {
      users
    };
  }
});
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
}
</style>
