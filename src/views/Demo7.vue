<template>
  <h2>Others</h2>
  <dl>
    <dt>Global APIの初期化仕様変更</dt>
    <dd>複数のインスタンス毎にuseやmixinなどを設定できるようになります。</dd>
    <dt>filterの廃止</dt>
    <dd>
      filterはJavaScriptにはない独自構文で学習コストが増加する、構文解析を複雑にするという理由で廃止されます。<br />
      filterの処理は通常の関数適用で代替できます。
    </dd>
    <dt>Event Emitter系のAPIの廃止</dt>
    <dd>
      Event Emitter系のAPI（$on, $off, $once）が削除されます。<br />
      Event管理の代替はMittなどの別のEvent Emitterライブラリが推奨されています。
    </dd>
    <dt>Functional Componentの廃止</dt>
    <dd>
      Functional
      Componentはdata等の状態を持たない代わりにレンダリングパフォーマンスが大幅に改善するコンポーネント属性です。<br />
      Vue3では、通常のコンポーネントとFunctional
      Componentの性能差は大幅に縮小され、ほとんどのユースケースでは取るに足らないものとなったそうなので削除されます。
    </dd>
  </dl>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Demo7"
});
</script>
<style scoped>
dt {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.3em;
}
dd {
  margin-bottom: 2rem;
}
</style>
