(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shizhutousu/add-or-update"],{"64ed":function(t,e,n){"use strict";n.r(e);var i=n("6944"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},6944:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,u,r,o){try{var a=t[r](o),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(i,u)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(i,u){var o=t.apply(e,n);function a(t){r(o,i,u,a,s,"next",t)}function s(t){r(o,i,u,a,s,"throw",t)}a(void 0)}))}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("460f"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{tousubiaoti:"",yonghuming:"",shizhuxingming:"",tupian:"",tousuriqi:"",tousuneirong:"",sfsh:"",shhf:"",userid:""},user:{},ro:{tousubiaoti:!1,yonghuming:!1,shizhuxingming:!1,tupian:!1,tousuriqi:!1,tousuneirong:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:a},computed:{},onLoad:function(){var e=o(i.default.mark((function e(n){var u,r,o,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=t.getStorageSync("nowTable"),e.next=3,this.$api.session(u);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.shizhuxingming=this.user.shizhuxingming,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=15;break}return this.ruleForm.id=n.id,e.next=13,this.$api.info("shizhutousu",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(!n.cross){e.next=50;break}o=t.getStorageSync("crossObj"),e.t0=i.default.keys(o);case 18:if((e.t1=e.t0()).done){e.next=50;break}if(a=e.t1.value,"tousubiaoti"!=a){e.next=24;break}return this.ruleForm.tousubiaoti=o[a],this.ro.tousubiaoti=!0,e.abrupt("continue",18);case 24:if("yonghuming"!=a){e.next=28;break}return this.ruleForm.yonghuming=o[a],this.ro.yonghuming=!0,e.abrupt("continue",18);case 28:if("shizhuxingming"!=a){e.next=32;break}return this.ruleForm.shizhuxingming=o[a],this.ro.shizhuxingming=!0,e.abrupt("continue",18);case 32:if("tupian"!=a){e.next=36;break}return this.ruleForm.tupian=o[a],this.ro.tupian=!0,e.abrupt("continue",18);case 36:if("tousuriqi"!=a){e.next=40;break}return this.ruleForm.tousuriqi=o[a],this.ro.tousuriqi=!0,e.abrupt("continue",18);case 40:if("tousuneirong"!=a){e.next=44;break}return this.ruleForm.tousuneirong=o[a],this.ro.tousuneirong=!0,e.abrupt("continue",18);case 44:if("userid"!=a){e.next=48;break}return this.ruleForm.userid=o[a],this.ro.userid=!0,e.abrupt("continue",18);case 48:e.next=18;break;case 50:this.styleChange();case 51:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tousuriqiChange:function(t){this.ruleForm.tousuriqi=t.target.value,this.$forceUpdate()},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=o(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.id){t.next=5;break}return t.next=3,this.$api.update("shizhutousu",this.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,this.$api.add("shizhutousu",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),i=e.getMonth()+1,u=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),i=i>9?i:"0"+i,u=u>9?u:"0"+u,"".concat(n,"-").concat(i,"-").concat(u)},toggleTab:function(t){this.$refs[t].show()}}};e.default=s}).call(this,n("543d")["default"])},"74e7":function(t,e,n){},afae:function(t,e,n){"use strict";var i,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},b1a5:function(t,e,n){"use strict";(function(t){n("4bde"),n("921b");i(n("66fd"));var e=i(n("d1d4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d1d4:function(t,e,n){"use strict";n.r(e);var i=n("afae"),u=n("64ed");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("db06");var o,a=n("f0c5"),s=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"359ec1e9",null,!1,i["a"],o);e["default"]=s.exports},db06:function(t,e,n){"use strict";var i=n("74e7"),u=n.n(i);u.a}},[["b1a5","common/runtime","common/vendor"]]]);