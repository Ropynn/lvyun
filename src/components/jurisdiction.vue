<template>
  <div class="jurisdiction">
    <p>无权限</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../common/stylus/mixins.styl';

.jurisdiction {
  p {
    position absolute
    font-size: 18px;
    // text-align: center;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
</style>
