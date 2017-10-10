<template>
  <div class="index-content">
    <scroll class="ic-scroll">
      <div class="bag-title" style="position: relative" ref="headPics">
        <div ref="headPic1">
          <img src="./images/unlight.png" class="img-light1" v-show="leftMen === 5">
          <img src="./images/+1@2x.png" class="img-photo1" v-show=" helpRecords.length >= 1">
          <img :src="helpRecords[0]? helpRecords[0].headImageUrl : ''" class="img-users1" v-show=" helpRecords.length >= 1">
        </div>

        <div>
          <img src="./images/unlight.png" class="img-light2" v-show="leftMen >=4 ">
          <img src="./images/+1@2x.png" class="img-photo2" v-show=" helpRecords.length >= 2">
          <img :src="helpRecords[1]? helpRecords[1].headImageUrl : '' " class="img-users2" v-show=" helpRecords.length >= 2">
        </div>
        <div>
          <img src="./images/unlight.png" class="img-light3" v-show="leftMen>=3">
          <img src="./images/+1@2x.png" class="img-photo3" v-show=" helpRecords.length >= 3">
          <img :src="helpRecords[2]? helpRecords[2].headImageUrl : ''" class="img-users3" v-show=" helpRecords.length >= 3">
        </div>

        <div>
          <img src="./images/unlight.png" class="img-light4" v-show="leftMen>= 2 ">
          <img src="./images/+1@2x.png" class="img-photo4" v-show=" helpRecords.length >= 4">
          <img :src="helpRecords[3]? helpRecords[3].headImageUrl : '' " class="img-users4" v-show=" helpRecords.length >= 4">
        </div>

        <div>
          <img src="./images/unlight.png" class="img-light5" v-show=" leftMen >= 1">
          <img src="./images/+1@2x.png" class="img-photo5" v-show=" helpRecords.length >= 5">
          <img :src="helpRecords[4]? helpRecords[4].headImageUrl : '' " class="img-users5" v-show=" helpRecords.length >= 5">
        </div>
      </div>
      <div class="bag-content">
        <div>
          <img :src="userInfo.headImageUrl" :alt="userInfo.headImageUrl" class="user-photo">
        </div>
        <div class="user-info">
          <div class="user-name">{{userInfo.nickname}}</div>
          <!--助力完成-->
          <div class="user-text" v-show="helpOpenIdArr.length >= 5">助力完成，赶快去APP内使用吧</div>
          <!--助力未完成-->
          <div v-show="helpOpenIdArr.length < 5" class="user-text">还差
            <span v-show="leftMen === 5">1</span>
            <span v-show="leftMen === 4">1</span>
            <span v-show="leftMen === 3">3</span>
            <span v-show="leftMen===2">2</span>
            <span v-show="leftMen===1">1</span> 人助力，凭券“冰点”特价
            <strong v-show="leftMen === 5">88.8</strong>
            <strong v-show="leftMen === 4">38.8</strong>
            <strong v-show="4 > leftMen> 0">18.8</strong>元</div>
          <div v-show="helpOpenIdArr.length < 5" class="user-text">享原价 388 元奢侈品护理</div>
        </div>
      </div>
      <button class="receive-button receive-button-on" @click="receiveNow()" v-show="helpOpenIdArr.length > 0" :disabled="helpOpenIdArr.length===0 || helpOpenIdArr.length>5">{{receiveText}}</button>
      <button class="invite-button receive-button" @click="goShare()" v-show="helpOpenIdArr.length < 5">邀请助力</button>
      <button class="invite-button receive-button" @click="goShare()" v-show="helpOpenIdArr.length >= 5">分享活动</button>
      <div class="reveive-record" @click="goToRecords()">
        <a>领取记录</a>
      </div>
      <div class="help-content">
        <div class="rule-line-left"></div>
        <div class="helpu-text">看看哪些小伙伴来助力过</div>
        <div class="rule-line-right"></div>
      </div>

      <!--没有人助力start-->
      <div class="helpu-none" v-show="helpOpenIdArr.length === 0">还没有小伙伴来助力过~</div>

      <!--助力人-->
      <div class="friend-content" v-for="item in helpRecords" v-show="helpOpenIdArr.length > 0">
        <img :src="item.headImageUrl" class="user-photo">
        <div class="friend-info">
          <div class="user-name">{{item.nickname}}</div>
          <div>
            <div class="user-text line-heigh15">{{item.updatedDate}}来助力过</div>
            <span class="add-one">+1</span>
          </div>
        </div>
      </div>

      <!--rules-->
      <div class="help-content">
        <div class="rule-line-left right2"></div>
        <div class="helpu-text">活动规则</div>
        <div class="rule-line-right left2"></div>
      </div>
      <div class="rule-content">
        <div class="number-left">1.</div>
        <div class="text-block">本次活动适用于赛维官方奢侈品护理类目：手袋护理原价
          <strong>388</strong>元；</div>
        <div class="number-left">2.</div>
        <div class="text-block">每位用户分享活动最多可领取三张券：凭券可分别以88.8元，38.8元，18.8元的价格享受原价388元的奢侈品手袋洗护套餐（非品牌包也适用）</div>
        <div class="number-left">3.</div>
        <div class="text-block">专业护理包含污渍处理、专业清洗、磨损修复、划痕修复、皮边油修复、小范围补色、缝补、除菌；</div>
        <div class="number-left">4.</div>
        <div class="text-block">活动周期：9月1日-9月30日；</div>
        <div class="number-left">5.</div>
        <div class="text-block">取送范围：上海市外环内免费上门取送；</div>
        <div class="number-left">6.</div>
        <div class="text-block">护理周期：纯工匠手工完成，护理时间15天；</div>
        <div class="number-left">7.</div>
        <div class="text-block">兑换券不兑现，不找零，不与其他优惠同享；</div>
        <div class="number-left">8.</div>
        <div class="text-block">换件、维修、遇水变形、染色改色等项目需要单独收费，以及鳄鱼皮、鸵鸟皮等特殊材质的包包因工艺复杂需要加收服务费，详询客服：400-921-0682。</div>
      </div>
    </scroll>
    <mobile-modal></mobile-modal>
    <goShare-modal></goShare-modal>
  </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
@import "main.scss";
</style>

<script lang="ts">
import Vue from 'vue';
import Component from '../../public/classComponent/index';
import { EventBus } from '../../public/utils/eventBus';
//  import {isLogon} from '../../utils/common';
import wxApi from '../../public/utils/wxApi';
import { getOpenId, getNewUrl, getWechatInfo, getLinkedMobile, saveShare, searchHelpRecords, getRedPackets } from '../backend/cleanBagSetLike';
import { showError, showSuccess } from '../../public/components/toast/toast';
import { getArgs } from '../../public/utils/common';
import Scroll from '../../public/components/scroll/Scroll.vue';
import storage from '../../public/utils/storage';
import mobileModal from '../../market/cleanBagSetLike/component/mobileModal.vue';
import goShareModel from '../../market/cleanBagSetLike/component/shareModal.vue';

declare var MtaH5: {
  clickStat: (params: string) => any,
}
@Component({
  components: {
    scroll: Scroll,
    'mobile-modal': mobileModal,
    'goShare-modal': goShareModel,
  },
})
export default class cBMain extends Vue {
  $modal: any = Object.getPrototypeOf(this).$modal;
  newUrl: any;
  openId: string;
  code: string;
  shareInfo: any;
  receiveButtonOn: boolean = false;
  helpOpenIdArr: any[] = [];
  leftMen: number = 0;
  index: any;
  mobile: string;
  helpRecords: any[] = [];
  order: any;
  receiveText: string = '立即领取';
  userInfo: any = {
    nickname: '',
    headImageUrl: '',
    updatedDate: '',
  };
  created() {
    EventBus.$on('receiveNow', () => {
      this.$modal.show('mobile-modal');
    });
    EventBus.$on('receiveNowClose', () => {
      this.$modal.hide('mobile-modal');
    });
    EventBus.$on('goShareClose', () => {
      this.$modal.hide('goShare-modal');
    });
    EventBus.$on('goShare', () => {
      this.$modal.show('goShare-modal');
    });
    const args: any = getArgs();
    this.code = args.code;
    if (this.code) {
      getOpenId(this.code).then((res: any) => {
        if (res && res.responseCode === 1) {
          this.openId = storage.get('mainOpenId');
        } else if (res && res.responseCode === 0) {
          this.openId = res.data.openid;
          storage.set('mainOpenId', this.openId);
        }
        this.getUserInfos([this.openId]);
        this.queryHelpRecords();
        this.registerShareInfo();
        EventBus.$on('wechatReady', () => {
          console.log('wechatReady notified');
          this.registerShareInfo();
        });
      });
    } else {
      const url = location.href;
      getNewUrl(url).then((res: any) => {
        if (res && res.responseCode === 0) {
          location.href = res.data;
        }
      });
    }
  }

  registerShareInfo() {
    const host = location.host;
    const protocol = location.protocol;
    const shareInfo = {
      desc: '388元专业洗护套餐包含：污渍处理、专业清洗、磨损修复、划痕修复、皮边油修复、（小范围）补色、缝补、除菌；纯工匠手工完成。',
      imgUrl: `${protocol}//${host}/static/market/banner@2x.png`,
      title: '我18.8元拼了原价388元的包包洗护套餐，包包享受奢侈品待遇！',
      link: `${protocol}//${host}/?shareid=${this.openId}#/cB/help`,
    };
    wxApi.share(shareInfo, () => {
      saveShare(this.openId).then((call: any) => {
        if (call && call.responseCode === 0) {
          showSuccess('分享成功');
        } else if (call && call.responseMsg) {
          showError(call.responseMsg);
        } else {
          showError('创建分享失败');
        }
      });
    });
  }

  downloadNow() {
    MtaH5.clickStat('downloadsetlike');
    location.href = '/market/download/index.html?promocode=JZQSBS';
  }
  getUserInfos(openIds: any[]) {
    getWechatInfo(openIds).then((res: any) => {
      if (res && res.responseCode === 0) {
        this.userInfo = res.data[0];
      } else if (res && res.responseMsg) {
        showError(res.responseMsg);
      } else {
        showError('获取用戶信息失败');
      }
    });
  }
  receiveNow() {
    getLinkedMobile(this.openId).then((res: any) => {
      if (res.data) {
        this.mobile = res.data;
        getRedPackets(this.mobile).then((mes: any) => {
          if (mes && mes.responseCode === 0) {
            if (this.helpOpenIdArr.length === 5) {
              this.receiveText = '立即下单';
            }
            this.$router.push('/cB/revceived');
          } else if (mes && mes.responseMsg) {
            showError(mes.responseMsg);
          } else {
            showError('领取失败');
          }
        });
      } else {
        EventBus.$emit('receiveNow');
      }
    });
  }
  queryHelpRecords() {
    searchHelpRecords(this.openId).then((res: any) => {
      if (res.data) {
        this.helpRecords = res.data;
        for (let i = 0; i < this.helpRecords.length; i += 1) {
          if (this.helpRecords[i].openid === 'undefined' || this.helpRecords[i].openid === 'null') {
            this.helpRecords.splice(i, 1);
            console.log(this.helpRecords);
          }
        }
        this.helpOpenIdArr = [];
        for (let i = 0; i < this.helpRecords.length; i += 1) {
          const oid = this.helpRecords[i].openid;
          this.helpOpenIdArr.push(oid);
        }
        this.leftMen = 5 - this.helpOpenIdArr.length;
        if (this.helpOpenIdArr.length === 0) {
          return;
        }
        getWechatInfo(this.helpOpenIdArr).then((png: any) => {
          if (png && png.responseCode === 0) {
            const wechatInfos = png.data;
            this.helpRecords = this.helpRecords.map((r) => {
              const record = { ...r };
              wechatInfos.forEach((w: any) => {
                if (w.openid === r.openid) {
                  record.nickname = w.nickname;
                  record.headImageUrl = w.headImageUrl;
                }
              });
              return record;
            });
          }
        });
      }
    });
  }
  goShare() {
    EventBus.$emit('goShare');
  }
  goToRecords() {
    this.$router.push('/cB/records');
  }
}
</script>
