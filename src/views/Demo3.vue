<template>
  <div class="home">
    <h2>Fragment</h2>
    <p>
      FragmentsはVue2系では実現できなかったmulti-root
      nodeのコンポーネントを可能にするものです。
    </p>
    <p>
      注意点としてコンポーネントに直接Class指定をしていると、今まで自動的にroot要素にClassを当てられたのですが、それがfragmentsの場合は明示的にコンポーネントの属性を適用したい要素に対して直接
      <strong>v-bind="$attrs"</strong>
      を設定する必要があります。
    </p>
    <FragmentDemo class="test1" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FragmentDemo from "@/components/FragmentDemo.vue";

export default defineComponent({
  name: "Demo3",
  components: {
    FragmentDemo
  }
});
</script>
