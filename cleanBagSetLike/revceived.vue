<template>
  <div class="index-content" >
    <scroll class="ic-scroll">
    <div class="received-head">
      <div class="received-title"><img src="./images/订单已完成@2x.png"/><span class="received-title-text">领取成功</span></div>
      <!--领取成功还差x人-->
      <div class="h1-text" v-show="0 < coupons.length && coupons.length < 3">还差
        <span v-show="leftMen === 5">1</span>
        <span v-show="leftMen === 4">1</span>
        <span v-show="leftMen === 3">3</span>
        <span v-show="leftMen===2">2</span>
        <span v-show="leftMen===1">1</span> 人助力，凭券“冰点”特价
        <strong v-show="leftMen === 5">88.8</strong>
        <strong v-show="leftMen === 4">38.8</strong>
        <strong v-show="4 > leftMen> 0">18.8</strong>元</div>
      <div class="h1-text" v-show="0 < coupons.length && coupons.length < 3">享原价 388 元奢侈品护理</div>

      <!--助力完成-->
      <div class="h1-text" v-show="coupons === 3">助力完成，赶快去APP内使用吧</div>
    </div>
      <!--优惠券-->
      <div class="received-content" v-for="item in coupons" v-show="coupons.length > 0">
        <div class="h2-text">包包洗护套餐券</div>
        <div class="h3-text">原价388元奢侈品护理</div>
        <div class="h3-text">仅限APP使用</div>
        <div class="h4-text">￥<span class="h6-text">{{item.amount}}</span></div>
        <div class="h5-text">使用期限：{{item.validDate}}-{{item.expireDate}}</div>
      </div>

    </scroll>
    <!--立即使用按钮-->
    <div class="use-button" @click="downloadNow()">立即使用</div>
  </div>

</template>
<style scoped lang="scss" rel="stylesheet/scss">
  .ic-scroll {
    width: 100%;
    height: 100%;
  }
  .use-button{
    width: 14.75rem;
    height: 2.5rem;
    background-color: #FF6180;
    color: #fff;
    font-family: PingFangSC-Medium;
    font-size: .8rem;
    text-align: center;
    left: 50%;
    margin-left: -7.35rem;
    border-radius: 3px;
    line-height: 2.5rem;
    position: fixed;
    bottom: 1rem;
    box-shadow: 0 .35rem .45rem #FCB0C5;
  }
  .h2-text{
    font-family: PingFangSC-Medium;
    font-size: .8rem;
    color: #111D2D;
    font-weight: bold;
    margin-left: 1.2rem;
    padding-top: 1rem;
    padding-bottom: .3rem;
  }
  .h3-text{
    font-family: PingFangSC-Regular;
    font-size: .6rem;
    color: #111D2D;
    margin-left: 1.2rem;
  }
  .h4-text{
    font-family: OpenSans-Semibold;
    font-size: .93rem;
    color: #FF6180;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .h5-text{
    font-family: PingFangSC-Regular;
    font-size: .65rem;
    color: #A0B1B7;
    margin-left: 1.2rem;
    padding-top: 1.3rem;

  }
  .h6-text{
    font-family: OpenSans;
    font-size: 1.7rem;
    color: #FF6180;
  }
  .received-content{
    width:17rem ;
    height: 7rem;
    background-image: url("./images/优惠券@2x.png");
    background-size: 17rem 7rem;
    margin: 0 auto;
    position: relative;
  }
  .h1-text{
    font-family: PingFangSC-Regular;
    font-size: 0.65rem;
    color: #656C88;
    line-height: 0.65rem;
    margin-bottom: 0.25rem;
  }
  .received-head{
    height: 5.75rem;
    background-color: #fff;
    box-shadow: 0 3px 9px rgba(255,97,128,0.3) ;
    text-align: center;
    margin-bottom: .85rem;
    img{
      width: 0.95rem;
      height: 0.75rem;
  }
    .received-title-text{
      font-family: PingFangSC-Semibold;
      font-size: 0.8rem;
      color: #FF6180;
      margin-left: .6rem;
    }
    .received-title{
      padding: 1.275rem 0 .6rem 0;
    }
  }
  .index-content {
    width: 100%;
    height: 100%;
    background-color: #FFE3E8;
  }
</style>
<script lang="ts">
  import Vue from 'vue';
  import Component from '../../public/classComponent/index';
  import {showError} from '../../public/components/toast/toast';
  import {getAllRecords, searchHelpRecords} from '../backend/cleanBagSetLike';
  import Scroll from '../../public/components/scroll/Scroll.vue';
  import storage from '../../public/utils/storage';

  @Component({
    components: {
      scroll: Scroll,
    },
  })
  export default class cBrevceived extends Vue {
    order: any;
    newUrl: any;
    openId: string;
    code: string;
    records: any;
    coupons:any[]=[];
    leftMen:number = 0;
    helpRecords:any[];
    helpOpenIdArr:any[] = [];
    created() {
      this.openId = storage.get('mainOpenId');
      this.queryHelpRecords();
      this.getCoupons();
    }
    queryHelpRecords() {
      searchHelpRecords(this.openId).then((res:any) => {
        if (res.data) {
          this.helpRecords = res.data;
          for (let i = 0; i < this.helpRecords.length; i += 1) {
            const oid = this.helpRecords[i].openid;
            this.helpOpenIdArr.push(oid);
          }
          this.leftMen = 5 - this.helpOpenIdArr.length;
        }
      });
    }
    getCoupons() {
      // get coupon records
      getAllRecords(this.openId).then((res: any) => {
        if (res && res.responseCode === 0) {
          this.coupons = res.data;
          // eslint-disable-next-line
          // alert(this.coupons);
          for (let recordIndex = 0; recordIndex < this.coupons.length; recordIndex += 1) {
            const coupon = this.coupons[recordIndex];
            coupon.expireDate = coupon.expireDate.slice(0, 10).replace(/-/g, '.');
            coupon.validDate = coupon.validDate.slice(0, 10).replace(/-/g, '.');
            console.log(coupon);
          }
        } else if (res && res.responseMsg) {
          showError('暂无领取记录');
        } else {
          showError('获取领取记录失败');
        }
      });
    }
    downloadNow() {
      console.log(location.href);
      location.href = '/market/download/index.html?promocode=JZQSBS';
    }
  }
</script>
