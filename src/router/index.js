import Vue from "vue";
import VueRouter from "vue-router";

import home from "../components/home.vue"; //首页组件
import member from "../components/member.vue"; //套餐组件
import detail from "../components/detail.vue"; //协议详情组件
import payment from "../components/payment.vue"; //支付组件
import mcMove from "../components/mcMove.vue"; //启动机器组件

import order from "../components/order/orderDetail.vue"; //订单列表组件
import finishOrder from "../components/order/finishOrder.vue"; //已完成订单列表组件
import finishOrder2 from "../components/order/finishOrder2.vue"; //已完成订单列表组件
import unfinishedOrder from "../components/order/unfinishedOrder.vue"; //未完成订单列表组件
import unfinishedOrder2 from "../components/order/unfinishedOrder2.vue"; //未完成订单列表组件

import video from "../components/video.vue";   // 视频组件
// import businessman from "../components/businessman.vue";  //商家中心组件
// import wallet from "../components/wallet.vue";  //钱包组件
// import walletDetail from "../components/walletDetail.vue";  //提现明细组件
// import walletDraw from "../components/walletDraw.vue";  //提现组件

// const home = () => import('../components/home.vue'); //首页组件
// const member = () => import('../components/member.vue'); //套餐组件
// const detail = () => import('../components/detail.vue'); //协议详情组件
// const payment = () => import('../components/payment.vue'); //支付组件
// const mcMove = () => import('../components/mcMove.vue');//启动机器组件
// const video = () => import('../components/video.vue');// 视频组件

const businessman = () => import('../components/businessman.vue'); //商家中心组件
const jurisdiction = () => import('../components/jurisdiction.vue');//权限组件

// const order = () => import('../components/order/orderDetail.vue');//订单列表组件
// const finishOrder = () => import('../components/order/finishOrder.vue');//已完成订单列表组件
// const finishOrder2 = () => import('../components/order/finishOrder2.vue');//已完成订单列表组件
// const unfinishedOrder = () => import('../components/order/unfinishedOrder.vue');//未完成订单列表组件
// const unfinishedOrder2 = () => import('../components/order/unfinishedOrder2.vue');//未完成订单列表组件
const refund = () => import('../components/order/refund.vue');//退款组件
const refund2 = () => import('../components/order/refund2.vue');//退款组件

const wallet = () => import('../components/wallet/wallet.vue');//钱包组件
const walletDetail = () => import('../components/wallet/walletDetail.vue'); //提现明细组件
const walletDetail2 = () => import('../components/wallet/walletDetail2.vue');//提现明细组件
const walletDraw = () => import('../components/wallet/walletDraw.vue');//提现组件
const test = () => import('../components/test.vue');//test  组件
const test2 = () => import('../components/test2.vue');//test  组件


Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: "active",
  // mode: 'history',
  routes: [
    //重定向为首页
    {
      path: "/",
      redirect: "/home"
    },
    //首页路由
    {
      path: "/home",
      component: home
    },
    //套餐路由
    {
      path: "/member/:price/:minutes",
      component: member
    },
    //用户协议详情页路由
    {
      path: "/detail",
      component: detail
    },
    //启动机器路由
    {
      path: "/mcMove/:price/:minutes/:orderId",
      component: mcMove
    },
    //支付完成路由
    {
      path: "/payment",
      component: payment
    },
    //视频路由
    {
      path: "/video",
      component: video
    },

    //商家中心
    {
      path: "/businessman",
      component: businessman
    },
    //没有权限的页面
    {
      path:"/jurisdiction",
      component:jurisdiction
    },


    //订单路由
    {
      path: "/order",
      component: order,
      children: [
        //已完成订单
        {
          path: '/finishOrder',
          component: finishOrder
        },
        {
          path: '/finishOrder2',
          component: finishOrder2
        },
        //未完成订单
        {
          path: '/unfinishedOrder',
          component: unfinishedOrder
        },
        //未完成订单
        {
          path: '/unfinishedOrder2',
          component: unfinishedOrder2
        }
      ]
    },
    //退款
    {
      path: "/refund",
      component: refund
    },
    {
      path: "/refund2",
      component: refund2
    },

    //我的钱包
    {
      path: "/wallet",
      component: wallet
    },
    //提现明细
    {
      path: "/walletDetail",
      component: walletDetail
    },
    //提现明细
    {
      path: "/walletDetail2",
      component: walletDetail2
    },
    //提现
    {
      path: "/walletDraw/:money",
      component: walletDraw
    },
    {
      path: "/test",
      component: test
    },
    {
      path: "/test2",
      component: test2
    }
  ]
});
