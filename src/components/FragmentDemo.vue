<template>
  <header class="border">要素1</header>
  <main v-bind="$attrs" class="border">要素2</main>
  <footer class="border">要素3</footer>
</template>
<style scoped>
.test1 {
  color: #f00;
}
.border {
  border: solid 1px #ccc;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  width: 400px;
}
</style>
