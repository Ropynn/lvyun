<template>
  <div>
    <router-view :code="code"></router-view>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      user: {},
      code: this.$route.query.code
    };
  },
  created() {
    // this.axios.get(this.api + "/wx/getUser?code=" + this.code).then(res => {
    //   console.log("------------------------");
    //   console.log(res);
    //   return;
    //   console.log("------------------------");
      // if (res.data.statu == 1) {
      //   // this.investor = res.data.investor;
      //   // console.log(this.investor);
      //   this.user = res.data.user;
      //   //判断是否首单
      //   this.isFirst = this.user.firstpay;

      // } else {
      //   window.location = this.api + "/wx/login?goback=home?code=" + this.code;
      // }
    // });  
    // console.log(this.code)

    // console.log(this.$route.query);
    // console.log(this.code);
    // this.axios.get(this.api + "/wx/getUser").then(res => {
    //   console.log("------------------------------------");
    //   console.log(JSON.stringify(res));

    //   console.log(res.data.statu);
    //   console.log(typeof res.data.statu);

    //   if (res.data.statu == 1) {
    //     console.log("获取成功");
    //     this.user = res.data.user;
    //     this.$router.push("home");
    //   } else {
    //     window.location = this.api + "/wx/login?goback=home";
    //     console.log("获取失败");
    //   }
    // });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixins.styl';
</style>
<style lang="less">
@import "~vux/src/styles/reset.less";
</style>
