/* 协议详情组件 */
<template>
  <div class="agreement">
    <!-- 引入mint-ui的header -->
    <header class="title">
      <p>使用协议</p>
    </header>

    <article class="desc">
      <!-- <h1>用户服务声明</h1> -->
      <p> 为保障您的安全以及本司的合法权益，请您在使用仪器前认真阅读以下“使用条例”:</p>
      <p>一、本产品属于理疗小家电，
        <span class="red">只做理疗，不做治疗！</span>
      </p>
      <p>二、如身患重大疾病，请第一时间就医治疗。</p>
      <p>三、本产品适用亚健康理疗症状：炎症、淤堵、皮肤病、微循环障碍等亚健康问题。</p>
      <p>四、以下情况禁止使用本产品</p>
      <p>1. 患出血性疾病、严重感染者禁用。</p>
      <p>2. 经期、妊娠期女性禁用</p>
      <p>3. 体内装有心脏起博器、胰岛素泵、支架、钢板等金属物体及硅胶、注射产品者禁用。</p>
      <p>4. 严重心、肝、肾功能衰退不全者、严重心衰、冠心病者、严重糖尿病患者禁用 。</p>
      <p>6、孕妇或正处于经期者</p>
      <p>5. 病症高烧期、结核活动期患者、急性肝炎等急性病患者禁用。</p>
      <p>6. 癌症晚期患者，医生已宣判死刑的所有疑难杂症禁用。</p>
      <p>7. 外力伤害造成的骨折开放性创口者禁用。</p>
      <p>8. 精神病患者禁用。</p>
      <p>五、本协议最终解释权、修改权均归长沙绿韵汇成健康科技有限公司所有。</p>
      <p>使用者视为已阅读并完全理解上述条例，如使用后发生任何意外，皆属使用者个人行为，本公司概不负责。</p>
    </article>
  </div>
  </div>

</template>

<script>
export default {};
</script>


<style lang="stylus" scoped>
@import '../common/stylus/mixins.styl';

.agreement {
  position: relative;
  z-index: 100;
  height: 100vh;
  background-color: #fff;

  .title {
    height: px2rem(60px);
    background-color: #ddd;
    text-align: center;
    line-height: px2rem(60px);
    font-size: 18px;
  }

  .desc {
    padding: px2rem(20px) px2rem(40px) 0 px2rem(40px);

    h1 {
      text-align: center;
      font-size: 16px;
    }

    .red {
      color: red;
    }

    p {
      text-indent: 2em;
      font-size: 14px;
      line-height: 1.5em;
    }
  }
}
</style>

