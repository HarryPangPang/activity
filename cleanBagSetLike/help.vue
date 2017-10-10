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
          <!--帮TA助力-->
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

          <!--已助力&&来晚咯-->
          <div class="user-text" v-show="helpOpenIdArr.length >= 5">助力完成，分享活动我也要洗包包~</div>
          <div class="user-text" v-show="helpOpenIdArr.length >= 5">最低只需 18.8 元</div>
        </div>

      </div>
      <button class="receive-button" @click.once="supportTa()" :class="{'receive-button-on': supportOff}" v-show="helpOpenIdArr.length < 5 && !hasHelped ">帮TA助力</button>
      <button class="receive-button " @click.once="supportTa()" :class="{'receive-button-on': !hasHelped}" v-show="hasHelped">已助力</button>
      <button class="receive-button" v-show="helpTargetAchieved && !hasHelped">来晚咯</button>
      <button class="invite-button receive-button" @click="goShare()">我也要洗包</button>
      <div class="help-content">
        <div class="rule-line-left"></div>
        <div class="helpu-text">看看哪些小伙伴来助力过</div>
        <div class="rule-line-right"></div>
      </div>
      <!--没有人助力start-->
      <div class="helpu-none" v-show="helpOpenIdArr.length == 0">还没有小伙伴来助力过~</div>

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
    <goShare-modal></goShare-modal>
  </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
@import "main.scss";
</style>
<script lang="ts">
import Vue from 'vue';
import Component from '../../public/classComponent/index';
import { getWechatInfo, getNewUrl, addHelp, searchHelpRecords, getOpenId, saveShare } from '../backend/cleanBagSetLike';
import { showError, showSuccess } from '../../public/components/toast/toast';
import { getArgs } from '../../public/utils/common';
import Scroll from '../../public/components/scroll/Scroll.vue';
import storage from '../../public/utils/storage';
import { EventBus } from '../../public/utils/eventBus';
import goShareModel from '../../market/cleanBagSetLike/component/shareModal.vue';
import wxApi from '../../public/utils/wxApi';

@Component({
  components: {
    scroll: Scroll,
    'goShare-modal': goShareModel,
  },
})
export default class cBhelp extends Vue {
  $modal: any = Object.getPrototypeOf(this).$modal;
  supportOff: boolean = true;
  openId: string;
  helpRecords: any[] = [];
  helpOpenIdArr: string[] = [];
  leftMen: number = 0;
  index: any;
  shareList: any;
  helpTargetAchieved: boolean = false;
  hasHelped: boolean = false;
  sharedOpenId: string;
  userInfo: any = {
    nickname: '',
    headImageUrl: '',
    updatedDate: '',
  };
  code: any;
  supportStatus: string = '帮TA助力';

  created() {
    EventBus.$on('goShareClose', () => {
      this.$modal.hide('goShare-modal');
    });
    EventBus.$on('goShare', () => {
      this.$modal.show('goShare-modal');
    });
    const args: any = getArgs();
    this.sharedOpenId = args.shareid;
    storage.set('sharedOpenId', this.sharedOpenId);
    this.getUserInfo([this.sharedOpenId]);
    this.queryHelpRecords(() => {
      this.helpTargetAchieved = this.helpRecords.length >= 5;
    });
    this.code = args.code;
    if (this.code) {
      getOpenId(this.code).then((res: any) => {
        if (res && res.responseCode === 0) {
          this.openId = res.data.openid;
          storage.set('mainOpenId', this.openId);
        } else if (res && res.responseCode === 1) {
          this.openId = storage.get('mainOpenId');
        }
        this.changeRole();
        this.checkHelpRecords();
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

  // utils
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

  changeRole() {
    if (this.openId === this.sharedOpenId) {
      this.$router.push('/cB/Main');
    }
  }

  getUserInfo(openIds: any[]) {
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

  goShare() {
    EventBus.$emit('goShare');
  }
  checkHelpRecords() {
    if (this.helpOpenIdArr.some(p => p === this.openId)) {
      this.hasHelped = true;
    }
  }
  queryHelpRecords(onSuccess: Function) {
    searchHelpRecords(this.sharedOpenId).then((res: any) => {
      if (res.data) {
        this.helpRecords = res.data;
        for (let i = 0; i < this.helpRecords.length; i += 1) {
          if (this.helpRecords[i].openid === 'undefined' || this.helpRecords[i].openid === 'null') {
            this.helpRecords.splice(i, 1);
          }
        }
        this.helpOpenIdArr = [];
        for (let i = 0; i < this.helpRecords.length; i += 1) {
          const oid = this.helpRecords[i].openid;
          if (oid !== 'undefined') {
            this.helpOpenIdArr.push(oid);
          }
        }

        this.checkHelpRecords();

        this.leftMen = Math.max(5 - this.helpOpenIdArr.length, 0);
        if (onSuccess) {
          onSuccess();
        }
        if (this.helpOpenIdArr.length === 0) {
          return;
        }

        getWechatInfo(this.helpOpenIdArr).then((png: any) => {
          if (png && png.responseCode === 0) {
            const wechatInfos = png.data;
            this.helpRecords = this.helpRecords.map((r) => {
              const record = { ...r };
              const wechatInfo = wechatInfos.find((w: any) => w.openid === r.openid);
              if (wechatInfo) {
                record.nickname = wechatInfo.nickname;
                record.headImageUrl = wechatInfo.headImageUrl;
              }

              return record;
            });
          } else {
            showError(png.error);
          }
        });
      } else if (res && res.responseMsg) {
        showError(res.responseMsg);
      } else {
        showError('获取用戶信息失败');
      }
    });
  }
  supportTa() {
    if (this.sharedOpenId === this.openId) {
      showError('不能给自己助力哦');
      return;
    }
    if (this.sharedOpenId === null || this.sharedOpenId === undefined) {
      showError('sharedOpenId不能为空');
      return;
    }
    if (this.openId === null || this.openId === undefined) {
      showError('openId不能为空');
      return;
    }
    addHelp(this.openId, this.sharedOpenId).then((res: any) => {
      if (res && res.responseCode === 0) {
        this.supportOff = false;
        this.supportStatus = '已助力';
        this.queryHelpRecords(() => { });
        showSuccess('助力成功');
      } else if (this.helpOpenIdArr.some(p => p === this.openId)) {
        showError('您已助力');
      } else if (res && res.responseMsg) {
        showError('您来晚了');
        this.queryHelpRecords(() => {
          this.helpTargetAchieved = this.helpRecords.length >= 5;
          this.checkHelpRecords();
        });
      }
    });
  }
}
</script>
