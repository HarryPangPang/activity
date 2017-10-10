<template>
  <modal name="mobile-modal">
    <div class="modal-positoin">
    <div class="modal-wrapper">
      <div class="modal-title">验证手机号码</div>
      <img src="../images/关闭@2x.png" class="close-img" @click="receiveNowClose">
      <div class="text-center">
        <input id="phoneNumberInput" type="tel" name="phoneNumber" v-model="phoneNumber"  placeholder="请输入手机号码" class="mobile-in" >
        <span class="verification-code" @click="sendSms">{{smsBtnTxt}}</span>
      </div>
      <div class="text-center">
        <input id="validationCodeInput" type="text" name="validationCode" v-model="validationCode" class="mobile-in" placeholder="请输入验证码" >
      </div>
      <div class="getit-now" @click="login">立即领取</div>
    </div>
    </div>
  </modal>
</template>
<style lang="scss" scoped rel="stylesheet/scss">
  .getit-now{
    width: 12.6rem;
    height: 2.3rem;
    background: #FF6180;
    border-radius: 3px;
    color: #fff;
    font-family: PingFangSC-Medium;
    font-size:0.7rem ;
    line-height: 2.3rem;
    text-align: center;
    margin: 0 auto;
  }
  .verification-code{
    position: absolute;
    right: 1.15rem;
    top: 50%;
    background: #FF6180;
    border-radius: 3px;
    color: #fff;
    font-size: 0.65rem;
    width: 3.5rem;
    height: 1.5rem;
    margin-top: -.75rem;
    line-height: 1.5rem;
  }
  .text-center{
    text-align: center;
    position: relative;
    margin-bottom: .8rem;
  }
  .modal-positoin{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -7rem;
    margin-top: -6rem;
  }
  .close-img{
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    width: 0.625rem;
  }
.modal-wrapper{
  width:14.1rem ;
  height: 12.25rem;
  background-color: #f8f8f8;
  border-radius: 0.15rem;
  position: relative;
}
  .modal-title{
    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #656C88;
    text-align: center;
    padding: 1rem 0 1rem 0;
  }
  .mobile-in{
    width: 12.6rem;
    position: relative;
    height: 2.3rem;
    font-size: 0.7rem;
    color: #333;
    padding-left: 0.75rem;
  }
input::-webkit-input-placeholder{
  color: #ADB1C1;
}
</style>
<script lang="ts">
  import Vue from 'vue';
  import Component from '../../../public/classComponent/index';
  import {linkUserToMobile, getRedPackets} from '../../backend/cleanBagSetLike';
  import {showNotice, showError} from '../../../public/components/toast/toast';
  import {getSysCode} from '../../../backend/user';
  import * as Common from '../../../public/utils/common';
  import storage from '../../../public/utils/storage';
  import { EventBus } from '../../../public/utils/eventBus';

  @Component({
    name: 'login',
    data() {
      return {
        phoneNumber: '',
        validationCode: '',
        isSendingSms: false,
        smsBtnTxt: '输入验证码',
      };
    },
  })
  export default class MobileModal extends Vue {
    phoneNumber: string // 手机号
    validationCode: string // 验证码
    isSendingSms: boolean = false // 是否正在发送验证码
    timer: any = null // 定时器
    smsBtnTxt: string // 按钮显示
    totalSeconds: number = 60  // 总秒数
    smsCodeReg: RegExp = /^\d{6}$/ // 验证码 正则表达式
    openid:string;
    userInfo:any;
    receiveNowClose() {
      EventBus.$emit('receiveNowClose');
    }
    created() {
      this.openid = storage.get('mainOpenId');
    }
    sendSms() {
      if (!this.isSendingSms) {
        const isPhoneNumber: boolean = Common.isPhoneNumber(this.phoneNumber);
        if (isPhoneNumber) {
          const param = {
            mobile: this.phoneNumber,
          };
          getSysCode(param).then((res) => {
            if (res && res.responseCode === 0) {
              this.isSendingSms = true;
              // 开始计时
              this.timer = setInterval(() => {
                if (this.totalSeconds > 0 && this.isSendingSms) {
                  this.totalSeconds -= 1;
                  // this.smsBtnTxt = this.totalSeconds.toString() + "s";
                  this.smsBtnTxt = `${this.totalSeconds}s`;
                } else {
                  this.smsBtnTxt = '发送验证码';
                  this.totalSeconds = 60;
                  this.isSendingSms = false;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            } else if (res && res.responseMsg) {
              showError(res.responseMsg);
            } else {
              showError('发送验证码失败，请稍后再试');
            }
          }, () => {
            showError('发送验证码失败，请稍后再试');
          });
        } else {
          showNotice('请输入正确的手机号');
        }
      }
    }
    login() {
      if (!this.phoneNumber) {
        showNotice('请输入手机号');
      } else if (!Common.isPhoneNumber(this.phoneNumber)) {
        showNotice('手机号输入错误');
      } else if (!this.validationCode) {
        showNotice('请输入验证码');
      } else if (!this.smsCodeReg.test(this.validationCode)) {
        showNotice('验证码输入错误');
      } else {
        linkUserToMobile(this.openid, this.phoneNumber, this.validationCode).then((res: any) => {
          if (res && res.responseCode === 0) {
            // 登录成功
            getRedPackets(this.phoneNumber).then((mes: any) => {
              if (mes && mes.responseCode === 0) {
                EventBus.$emit('receiveNowClose');
                this.$router.push('/cB/revceived');
              } else if (mes && mes.responseMsg) {
                showError('该手机号已领取');
              } else {
                showError('领取失败');
              }
            });
          } else if (res && res.responseMsg) {
            showError(res.responseMsg);
          } else {
            showError('关联账号失败');
          }
        });
      }
    }
  }
</script>

