 var promoCode2Url = {
     'test': {
         android: 'https://at.umeng.com/jGPz4f'
     },
     'NOG6XN': {
         android: 'https://at.umeng.com/jGPz4f',
         ios: 'https://at.umeng.com/4rSXbm'
     },
     'TO5IHR': {
         android: 'https://at.umeng.com/qeCamm ',
         ios: 'https://at.umeng.com/yeiuuC '
     },
     'LOTZTF': {
         android: 'https://at.umeng.com/OTbaSD',
         ios: 'https://at.umeng.com/KnSHHn'
     },
     'YOPQ6Q': {
         android: 'https://at.umeng.com/ST5Hfm',
         ios: 'https://at.umeng.com/KfS9bi'
     },
     'VOY5DV': {
         android: 'https://at.umeng.com/vCWPDe',
         ios: 'https://at.umeng.com/neGfOn'
     },
     '4OECGY': {
         android: 'https://at.umeng.com/iODWz',
         ios: 'https://at.umeng.com/iKHrya?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
     },
     'RONAC9': {
         android: 'https://at.umeng.com/q8Duea',
         ios: 'https://at.umeng.com/n4jaGj?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
     },
     'FODC7D': {
         android: 'https://at.umeng.com/eW1LPb',
         ios: 'https://at.umeng.com/vi8zCi?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
     },
     'UOFPGH': {
         android: 'https://at.umeng.com/OzGXbi',
         ios: 'https://at.umeng.com/Xj4vem?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
     },
     'JO9D8H': {
         android: 'https://at.umeng.com/jC8DeC',
         ios: 'https://at.umeng.com/8jy4zq?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
     },
     'MOB27X': {
         android: 'https://at.umeng.com/zKzeKD',
         ios: 'https://at.umeng.com/eeayyu?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
     },
     '3O99XF': {
         android: 'https://at.umeng.com/Kfyu8D',
         ios: 'https://at.umeng.com/Sf8TTD?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
     },
     'KO2MKZ': {
         android: 'https://at.umeng.com/fqiSLD',
         ios: 'https://at.umeng.com/ayC4Pf?cid=2056&clickid=__CALLBACK_PARAM__&idfa='
     },
     'ION9QU': {
         android: 'https://at.umeng.com/4zSzSv',
         ios: 'https://at.umeng.com/TjyySr?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
     },
     '5O83IN': {
         android: 'https://at.umeng.com/Kzy0DC',
         ios: 'https://at.umeng.com/jiiWDa?cid=1474&idfa=[IDFA]&mac=[MAC]&lbs=[LBS]&os=[OS]'
     },
     'ZOFKXN': {
         android: 'https://at.umeng.com/TbmCWz',
         ios: 'https://at.umeng.com/yimOLz'
     },
     'WWOID2': {
         android: 'https://at.umeng.com/OrW1Xf',
         ios: ''
     },
     'WXOICX': {
         android: 'https://at.umeng.com/z89jWj',
         ios: 'https://at.umeng.com/nyWHnm'
     },
     'WCO8E9': {
         android: 'https://at.umeng.com/XfWPzq',
         ios: 'https://at.umeng.com/OzuKHf?cid=2056&md5=1&s2s=1'
     },
     'W7O5ZF': {
         android: 'https://at.umeng.com/vKbOPn',
         ios: 'https://at.umeng.com/jymqOr'
     },
     'WPOMCH': {
         android: 'https://at.umeng.com/1vSbuu',
         ios: 'https://at.umeng.com/eyea4j?cid=5337&md5=1&s2s=1ss'
     },
     'WQO353': {
         android: '',
         ios: 'https://at.umeng.com/T9jqGb'
     },

 };
 var constants = {
     isWeiXin: '',
     isIphone: '',
     promoCode: ''
 };
 var util = {
     isWeiXinCheck: function() {
         var ua = window.navigator.userAgent.toLowerCase();
         return ua.match(/MicroMessenger/i) == 'micromessenger';
     },
     checkDevicePlat: function() {
         //var sUserAgent = navigator.userAgent.toLowerCase();
         //bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
         //bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
         //bIsAndroid = sUserAgent.match(/android/i) == "android";
         //var bIsMidp = sUserAgent.match(/midp/i) == "midp";
         //var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
         //var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
         //var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
         //var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
         //var marketingKey = location.href.indexOf('yiyuanxi');
     },
     isIphoneCheck: function() {
         var sUserAgent = navigator.userAgent.toLowerCase();
         return sUserAgent.match(/iphone os/i) == "iphone os";
     },
 };
 var constants = {
     isWeiXin: '',
     isIphone: '',
     promoCode: ''
 };

 var popGoBrowser = function() {
     $('.goBrowser-div>img').show();
     $('.goBrowser-div').animate({
         height: '100%'
     }, 100);
 };
 $('#goBrowser-div').on('click', function() {
     $('.goBrowser-div>img').hide();
     $('.goBrowser-div').animate({
         height: '0'
     }, 100);
 });
 var openInIphone = function() {
     var param = {
         placeOrder: 1,
         token: ''
     };
     url = 'iOScnsunway://?placeOrder=' + JSON.stringify(param);
     setTimeout(function() { location.href = url }, 50);
     setTimeout(tryToDownloadApp(), 5000);
 };
 var openInAndroid = function() {
     try {
         setTimeout(function() { location.href = 'androidapp://sunway' }, 50);
         setTimeout(tryToDownloadApp(), 5000)
     } catch (e) {}
 };
 var tryToOpenApp = function() {
     if (constants.isIphone) {
         openInIphone();
     } else {
         openInAndroid();
     }
 };
 var downloadInIos = function() {
     var Params = {};
     (function() {
         var match,
             pl = /\+/g,
             search = /([^&=]+)=?([^&]*)/g,
             decode = function(s) { return decodeURIComponent(s.replace(pl, " ")); },
             query = window.location.search.substring(1);

         while (match = search.exec(query))
             Params[decode(match[1])] = decode(match[2]);
     })();
     var url = promoCode2Url[Params.promocode]['ios'];
     location.href = url;
 };
 var downloadInAndroid = function() {
     if (constants.isWeiXin) {
         popGoBrowser();
         return;
     }
     var Params = {};
     (function() {
         var match,
             pl = /\+/g,
             search = /([^&=]+)=?([^&]*)/g,
             decode = function(s) { return decodeURIComponent(s.replace(pl, " ")); },
             query = window.location.search.substring(1);

         while (match = search.exec(query))
             Params[decode(match[1])] = decode(match[2]);
     })();
     var url = promoCode2Url[Params.promocode]['android'];
     location.href = url;
 };

 function tryToDownloadApp() {
     if (constants.isIphone) {
         downloadInIos();
     } else {
         downloadInAndroid();
     }
 }
 var init = function() {
     constants.isWeiXin = util.isWeiXinCheck();
     constants.isIphone = util.isIphoneCheck();
 };
 $(document).ready(function() {
     init();
 });

 function downloadApp() {
     tryToOpenApp();
 };
