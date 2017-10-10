// export class DownloadApps {
//   // if (!$) {
//   //   $ = jQuery;
//   // }
//   constructor(){
//     this.init();
// }
//   private promoCode2Url:any = {
//     'test': {
//       android: 'https://at.umeng.com/jGPz4f'
//     },
//     'NOG6XN': {
//       android: 'https://at.umeng.com/jGPz4f',
//       ios: 'https://at.umeng.com/4rSXbm'
//     },
//     'TO5IHR': {
//       android: 'https://at.umeng.com/qeCamm ',
//       ios: 'https://at.umeng.com/yeiuuC '
//     },
//     'LOTZTF': {
//       android: 'https://at.umeng.com/OTbaSD',
//       ios: 'https://at.umeng.com/KnSHHn'
//     },
//     'YOPQ6Q': {
//       android: 'https://at.umeng.com/ST5Hfm',
//       ios: 'https://at.umeng.com/KfS9bi'
//     },
//     'VOY5DV': {
//       android: 'https://at.umeng.com/vCWPDe',
//       ios: 'https://at.umeng.com/neGfOn'
//     },
//     '4OECGY': {
//       android: 'https://at.umeng.com/iODWzC',
//       ios: 'https://at.umeng.com/iKHrya?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
//     },
//     'RONAC9': {
//       android: 'https://at.umeng.com/q8Duea',
//       ios: 'https://at.umeng.com/n4jaGj?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
//     },
//     'FODC7D': {
//       android: 'https://at.umeng.com/eW1LPb',
//       ios: 'https://at.umeng.com/vi8zCi?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
//     },
//     'UOFPGH': {
//       android: 'https://at.umeng.com/OzGXbi',
//       ios: 'https://at.umeng.com/Xj4vem?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
//     },
//     'JO9D8H': {
//       android: 'https://at.umeng.com/jC8DeC',
//       ios: 'https://at.umeng.com/8jy4zq?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
//     },
//     'MOB27X': {
//       android: 'https://at.umeng.com/zKzeKD',
//       ios: 'https://at.umeng.com/eeayyu?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
//     },
//     '3O99XF': {
//       android: 'https://at.umeng.com/Kfyu8D',
//       ios: 'https://at.umeng.com/Sf8TTD?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
//     },
//     'KO2MKZ': {
//       android: 'https://at.umeng.com/fqiSLD',
//       ios: 'https://at.umeng.com/ayC4Pf?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
//     },
//     'ION9QU': {
//       android: 'https://at.umeng.com/4zSzSv',
//       ios: 'https://at.umeng.com/TjyySr?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
//     },
//     '5O83IN': {
//       android: 'https://at.umeng.com/Kzy0DC',
//       ios: 'https://at.umeng.com/jiiWDa?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
//     },
//     'ZOFKXN': {
//       android: 'https://at.umeng.com/TbmCWz',
//       ios: 'https://at.umeng.com/yimOLz'
//     },
//     'WWOID2': {
//       android: 'https://at.umeng.com/OrW1Xf',
//       ios: ''
//     },
//     'WXOICX': {
//       android: 'https://at.umeng.com/z89jWj',
//       ios: 'https://at.umeng.com/nyWHnm'
//     },
//     'WCO8E9': {
//       android: 'https://at.umeng.com/XfWPzq',
//       ios: 'https://at.umeng.com/OzuKHf?cid=2056&md5=1&s2s=1'
//     },
//     'W7O5ZF': {
//       android: 'https://at.umeng.com/vKbOPn',
//       ios: 'https://at.umeng.com/jymqOr'
//     },
//     'WPOMCH': {
//       android: 'https://at.umeng.com/1vSbuu',
//       ios: 'https://at.umeng.com/eyea4j?cid=5337&md5=1&s2s=1ss'
//     },
//     'WQO353': {
//       android: '',
//       ios: 'https://at.umeng.com/T9jqGb'
//     },
//     'WVOAF8': {
//       android: 'https://at.umeng.com/51fuKn',
//       ios: 'https://at.umeng.com/Tf8Hbe'
//     },
//
//   };
//   private constants = {
//   isWeiXin: false,
//   isIphone: false,
//   promoCode: '',
// };
//     isWeiXinCheck() {
//       let ua = window.navigator.userAgent.toLowerCase();
//       let matchResults = ua.match(/MicroMessenger/i);
//       let matchResutl = matchResults == null ? '' : matchResults[0];
//       return matchResutl === 'micromessenger';
//     };
//     isIphoneCheck() {
//       let sUserAgent = navigator.userAgent.toLowerCase();
//       let sUsermatch = sUserAgent.match(/iphone os/i);
//       let sUsermatches = sUsermatch == null ? '': sUsermatch[0]
//       return sUsermatches === "iphone os";
//     };
//
//     openInIphone() {
//     let param = {
//       placeOrder: 1,
//       token: '',
//     };
//     let url = 'iOSDevTips://?placeOrder=' + JSON.stringify(param);
//     setTimeout(function() { location.href = url }, 50);
//     setTimeout(this.tryToDownloadApp(), 5000);
//   };
//   openInAndroid() {
//     try {
//       setTimeout(function() { location.href = 'androidapp://sunway' }, 50);
//       setTimeout(this.tryToDownloadApp(), 5000)
//     } catch (e) {}
//   };
//    tryToOpenApp() {
//     if (this.constants.isIphone) {
//       this.openInIphone();
//     } else {
//       this.openInAndroid();
//     }
//   };
//   downloadInIos() {
//     let Params = {
//       promocode:'NOG6XN',
//     };
//
//       let match,
//       pl = /\+/g,
//       search = /([^&=]+)=?([^&]*)/g,
//       decode = function(s:any) { return decodeURIComponent(s.replace(pl, " ")); },
//       query = window.location.search.substring(1);
//
//       while (match = search.exec(query))
//       {
//         Params[decode(match[1])] = decode(match[2]);
//       }
//
//       console.log(Params.promocode);
//       if (!!Params.promocode){
//         let url = this.promoCode2Url[Params.promocode]['ios'];
//         location.href = url;
//       }
//   };
//   downloadInAndroid() {
//     if (this.constants.isWeiXin) {
//       // popGoBrowser();
//       return;
//     }
//     let Params = {
//       promocode:'',
//     };
//       let match,
//         pl = /\+/g,
//         search = /([^&=]+)=?([^&]*)/g,
//         decode = function(s:any) { return decodeURIComponent(s.replace(pl, " ")); },
//         query = window.location.search.substring(1);
//
//       while (match = search.exec(query))
//         Params[decode(match[1])] = decode(match[2]);
//     let url = this.promoCode2Url[Params.promocode]["android"];
//     location.href = url;
//   };
//
//    tryToDownloadApp() {
//     if (this.constants.isIphone) {
//       this.downloadInIos();
//     } else {
//       this.downloadInAndroid();
//     }
//   }
//   init() {
//     this.constants.isWeiXin =this.isWeiXinCheck();
//     this.constants.isIphone = this.isIphoneCheck();
//   };
//   // $(document).ready(function() {
//   //   init();
//   // });
//   downloadOpenApp() {
//     this.tryToOpenApp();
//   }
// }
//
//
//
