define("biz_wap/safe/mutation_observer_report.js",[],function(){
"use strict";
window.addEventListener&&window.addEventListener("load",function(){
window.__moonsafe_mutation_report_keys||(window.__moonsafe_mutation_report_keys={});
var e=window.moon&&moon.moonsafe_id||29715,o=window.moon&&moon.moonsafe_key||0,t=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},s=function(e,o,s){
s=s||1,n[e]||(n[e]=0),n[e]+=s,o&&(r(o)?t=t.concat(o):t.push(o)),setTimeout(function(){
a();
},1500);
},a=function(){
var r=[],s=t.length,i=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*o)+"_"+n[c]);
for(var c=0;s>c&&!(c>=10);++c)i.push("log"+c+"="+encodeURIComponent(t[c]));
if(!(0==r.length&&i.length<=1)){
var _,d="idkey="+r.join(";")+"&lc="+(i.length-1)+"&"+i.join("&");
if(window.ActiveXObject)try{
_=new ActiveXObject("Msxml2.XMLHTTP");
}catch(w){
try{
_=new ActiveXObject("Microsoft.XMLHTTP");
}catch(f){
_=!1;
}
}else window.XMLHttpRequest&&(_=new XMLHttpRequest);
_&&(_.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),_.setRequestHeader("cache-control","no-cache"),
_.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
_.setRequestHeader("X-Requested-With","XMLHttpRequest"),_.onreadystatechange=function(){
4===_.readyState&&(t.length>10?(t=t.slice(10),a()):(t=[],n={}));
},t=[],n={},_.send(d));
}
};
try{
if(!window.__observer)return;
var i=window.__observer_data;
if(window.__observer.takeRecords){
var c=window.__observer.takeRecords();
if(c&&c.length){
i.count++;
var _=new Date;
c.forEach(function(e){
for(var o=e.addedNodes,t=0;t<o.length;t++){
var n=o[t];
if("SCRIPT"===n.tagName){
var r=n.src;
!r||/qq\.com/.test(r)||/weishi\.com/.test(r)||i.list.push(r);
}
}
}),i.exec_time+=new Date-_;
}
}
window.__observer.disconnect();
for(var d=window.__moonsafe_mutation_report_keys.observer||2,w=window.__moonsafe_mutation_report_keys.script_src||8,f=window.__moonsafe_mutation_report_keys.setattribute||9,u=window.__moonsafe_mutation_report_keys.ajax||10,m=25,v=0;v<i.list.length;v++){
var l=i.list[v],h=["[moonsafe][observer][url]:"+location.href,"[moonsafe][observer][src]:"+l,"[moonsafe][observer][ua]:"+navigator.userAgent];
i.list.length==v+1&&(h.push("[moonsafe][observer][count]:"+i.count),h.push("[moonsafe][observer][exec_time]:"+i.exec_time+"ms")),
s(d,h),"inlinescript_without_nonce"==l&&s(m,h);
}
var p=window.__danger_src;
if(p)for(var y=[{
key:"xmlhttprequest",
idkey:u
},{
key:"script_src",
idkey:w
},{
key:"script_setAttribute",
idkey:f
}],v=0;v<y.length;v++){
var b=y[v].key,g=p[b];
if(g&&g.length)for(var k=0;k<g.length;k++){
var h=["[moonsafe]["+b+"][url]:"+location.href,"[moonsafe]["+b+"][src]:"+g[k],"[moonsafe]["+b+"][ua]:"+navigator.userAgent];
s(y[v].idkey,h);
}
}
}catch(q){
var R=3,h=["[moonsafe][observer][exception]:"+q];
s(R,h);
}
},!1);
});define("appmsg/fereport.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,n=e.timing,o=0,r=0,u=window.location.protocol,p=Math.random(),_=1>2*p,c=1>25*p,l=1>100*p,g=1>250*p,f=1>1e3*p,v=1>1e4*p,S=!0;
"https:"==u?(o=18,r=27,S=!1):"http:"==u&&(o=9,r=19);
var B=window.__wxgspeeds||{};
if(B&&B.moonloadtime&&B.moonloadedtime){
var h=B.moonloadedtime-B.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
s.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:h
},
user_define:m
});
}
B&&B.mod_downloadtime&&s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:24,
time:B.mod_downloadtime
},
user_define:m
});
var b=n.domContentLoadedEventStart-n.navigationStart;
if(b>3e3&&(s.setBasicTime({
sample:l&&S||c&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:r
}),w.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:window.encodeURIComponent(location.href)
})),0==window.optimizing_flag?s.setBasicTime({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:467
}):1==window.optimizing_flag?s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:468
}):2==window.optimizing_flag&&s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:469
}),s.setBasicTime({
sample:g&&S||l&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o
}),t.htmlSize){
var I=t.htmlSize/(n.responseEnd-n.connectStart);
s.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:25,
time:Math.round(I)
},
user_define:m
});
}
if(B&&B.combo_times)for(var R=1;R<B.combo_times.length;R++)s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:26,
time:B.combo_times[R]-B.combo_times[R-1]
},
user_define:m
});
if(B&&B.mod_num){
var C=B.hit_num/B.mod_num;
s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:[{
sid:27,
time:Math.round(100*C)
},{
sid:28,
time:Math.round(1e3*C)
}],
user_define:m
});
}
var U=window.logs.pagetime.jsapi_ready_time-n.navigationStart;
s.saveSpeeds(156==o||155==o?{
sample:_,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}:{
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}),s.send(),window.setTimeout(function(){
window.__moonclientlog&&d("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
s.saveSpeeds({
sample:v,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:window.onBridgeReadyTime-n.navigationStart
},
user_define:m
}),s.send());
},5e3);
}
}
function n(e){
for(var i=[],n=new DataView(e),o=0;o<n.byteLength;o+=4){
var s=n.getUint32(o),t=s.toString(16),d="00000000",a=(d+t).slice(-d.length);
i.push(a);
}
return i.join("");
}
function o(e,i){
var o=new TextEncoder("utf-8").encode(e),s=crypto.subtle||crypto.webkitSubtle;
return s.digest(i,o).then(function(e){
return n(e);
});
}
var s=e("biz_wap/utils/wapsdk.js"),t=e("biz_common/utils/http.js"),d=e("appmsg/log.js"),a=e("biz_common/base64.js"),w=e("biz_wap/utils/jsmonitor_report.js"),m=a.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i(),function(){
try{
var e=Math.random(),i=window.localStorage,n=[],t=[];
for(var d in i)-1!=d.indexOf("__MOON__")&&window.moon_map[d.substr(8)]&&n.push(i[d]);
if(window.crypto){
var w="";
w=.5>e?"SHA-256":"SHA-1";
for(var r=(new Date).getTime(),u=0;u<n.length;u++)t.push(o(n[u],w));
Promise.all(t).then(function(){
var i=(new Date).getTime(),n=i-r;
s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:.5>e?21:23,
time:n
},
user_define:m
}),s.send();
});
}else s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:24,
time:1
},
user_define:m
}),s.send();
}catch(p){}
}();
});define("appmsg/fereport_without_localstorage.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,m=e.timing,w=0,p=0,u=window.location.protocol,r=Math.random(),_=1>2*r,l=1>25*r,c=1>100*r,g=1>250*r,f=1>1e3*r,S=1>1e4*r,B=!0;
"https:"==u?(w=462,p=464,B=!1):"http:"==u&&(w=417,p=463);
var v=window.__wxgspeeds||{};
if(v&&v.moonloadtime&&v.moonloadedtime){
var I=v.moonloadedtime-v.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
o.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:i,
time:I
},
user_define:a
});
}
v&&v.mod_downloadtime&&o.saveSpeeds({
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:24,
time:v.mod_downloadtime
},
user_define:a
});
var R=m.domContentLoadedEventStart-m.navigationStart;
if(R>3e3&&(o.setBasicTime({
sample:c&&B||l&&!B?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:p
}),t.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:encodeURIComponent(location.href)
})),0==window.optimizing_flag?o.setBasicTime({
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:473
}):1==window.optimizing_flag?o.setBasicTime({
sample:c,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:474
}):2==window.optimizing_flag&&o.setBasicTime({
sample:c,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:475
}),o.setBasicTime({
sample:g&&B||c&&!B?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w
}),n.htmlSize){
var b=n.htmlSize/(m.responseEnd-m.connectStart);
o.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:25,
time:Math.round(b)
},
user_define:a
});
}
if(v&&v.combo_times)for(var h=1;h<v.combo_times.length;h++)o.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:26,
time:v.combo_times[h]-v.combo_times[h-1]
},
user_define:a
});
if(v&&v.mod_num){
var j=v.hit_num/v.mod_num;
o.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:[{
sid:27,
time:Math.round(100*j)
},{
sid:28,
time:Math.round(1e3*j)
}],
user_define:a
});
}
var C=window.logs.pagetime.jsapi_ready_time-m.navigationStart;
o.saveSpeeds(156==w||155==w?{
sample:_,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:31,
time:C
},
user_define:a
}:{
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:31,
time:C
},
user_define:a
}),o.send(),window.setTimeout(function(){
window.__moonclientlog&&s("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
o.saveSpeeds({
sample:S,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:i,
time:window.onBridgeReadyTime-m.navigationStart
},
user_define:a
}),o.send());
},5e3);
}
}
var o=e("biz_wap/utils/wapsdk.js"),n=e("biz_common/utils/http.js"),s=e("appmsg/log.js"),d=e("biz_common/base64.js"),t=e("biz_wap/utils/jsmonitor_report.js"),a=d.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i();
});define("appmsg/report.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","common/utils.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_wap/utils/jsmonitor_report.js")),r=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(r=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=window.performance&&window.performance.timing,a=write_sceen_time-r,s=first_sceen__time-r,d=page_endtime-r,g=(window.onload_endtime||+new Date)-r;
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(a=real_show_page_time-r,s=real_show_page_time-r);
var m=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-r:void 0,p=window.logs.a8key_ready_time?window.logs.a8key_ready_time-r:void 0,w=i&&i.connectEnd-i.connectStart,c=i&&i.secureConnectionStart&&i.connectEnd-i.secureConnectionStart,u=i&&i.domainLookupEnd&&i.domainLookupStart&&i.domainLookupEnd-i.domainLookupStart;
if(window.logs.pagetime.wtime=a,window.logs.pagetime.ftime=s,window.logs.pagetime.ptime=d,
window.logs.pagetime.onload_time=g,window.logs.pagetime.jsapi_ready_time=m,window.logs.pagetime.a8key_ready_time=p,
need_report_cost?o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1|1|"+d,"1|2|"+s,"1|3|"+g,"1|4|"+m,"1|5|"+p,"1|6|"+w,"1|7|"+c,"1|8|"+u].join(";")
}
}):Math.random()<.01&&o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["#1|1|"+d,"1|2|"+s,"1|3|"+g,"1|4|"+m,"1|5|"+p,"1|6|"+w,"1|7|"+c,"1|8|"+u].join(";")
}
}),need_report_cost&&s>3e3){
var _=new Image,l=(new Date).getTime();
_.onload=function(){
var e=(new Date).getTime()-l,t=(new Date).getTime(),i=new Image;
i.onload=function(){
var i=(new Date).getTime()-t;
o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["^2|1|"+e,"2|2|"+i].join(";")
}
});
},i.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
},_.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
}
if(!(Math.random()>.2||0>g||0>a||0>s||0>d)){
if(m&&t.setAvg(27822,15,m),p&&t.setAvg(27822,17,p),d>=15e3)return void t.setAvg(27822,29,d);
t.setAvg(27822,1,d).setAvg(27822,3,g).setAvg(27822,5,s),window.isWeixinCached&&t.setAvg(27822,19,d),
e()?(t.setAvg(27822,9,d),window.isWeixinCached&&t.setAvg(27822,23,d)):"wifi"==networkType?(t.setAvg(27822,7,d),
window.isWeixinCached&&t.setAvg(27822,21,d)):"2g/3g"==networkType?(t.setAvg(27822,11,d),
window.isWeixinCached&&t.setAvg(27822,25,d)):"4g"==networkType?(t.setAvg(27822,14,d),
window.isWeixinCached&&t.setAvg(27822,26,d)):(t.setAvg(27822,13,d),window.isWeixinCached&&t.setAvg(27822,28,d)),
window.moon&&moon.clearSample&&(t.setAvg(27822,71,d),e()?t.setAvg(27822,73,d):"wifi"==networkType?t.setAvg(27822,75,d):"2g/3g"==networkType?t.setAvg(27822,77,d):"4g"==networkType?t.setAvg(27822,78,d):t.setAvg(27822,79,d)),
w&&t.setAvg(27822,65,w),c&&t.setAvg(27822,67,c),u&&t.setAvg(27822,69,u);
}
}(),function(){
window.logs.jsapi_ready_fail&&t.setSum(24729,55,window.logs.jsapi_ready_fail);
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content");
if(t&&!(Math.random()>.1)){
var n=function o(){
var n=window.pageYOffset||document.documentElement.scrollTop,r=e.offsetTop;
if(n+a.getInnerHeight()>=r){
for(var d,g,m=t.getElementsByTagName("img"),p={},w=[],c=0,u=0,_=0,l=0,f=m.length;f>l;++l){
var v=m[l];
d=v.getAttribute("data-src")||v.getAttribute("src"),g=v.getAttribute("src"),d&&(d.isCDN()?u++:_++,
c++,p[g]={});
}
if(w.push("1="+1e3*c),w.push("2="+1e3*u),w.push("3="+1e3*_),s.getEntries){
var y=s.getEntries(),h=window.logs.img.download,k=[0,0,0],A=[0,0,0];
c=u=0;
for(var l=0,j=y.length;j>l;++l){
var T=y[l],b=T.name;
b&&"img"==T.initiatorType&&p[b]&&(b.isCDN()&&(A[0]+=T.duration,u++),k[0]+=T.duration,
c++,p[b]={
startTime:T.startTime,
responseEnd:T.responseEnd
});
}
k[0]>0&&c>0&&(k[2]=k[0]/c),A[0]>0&&u>0&&(A[2]=A[0]/u);
for(var l in h)if(h.hasOwnProperty(l)){
for(var M=h[l],x=0,E=0,C=0,z=0,S=0,f=M.length;f>S;++S){
var d=M[S];
if(p[d]&&p[d].startTime&&p[d].responseEnd){
var D=p[d].startTime,I=p[d].responseEnd;
x=Math.max(x,I),E=E?Math.min(E,D):D,d.isCDN()&&(C=Math.max(x,I),z=E?Math.min(E,D):D);
}
}
k[1]+=Math.round(x-E),A[1]+=Math.round(C-z);
}
for(var W=4,N=7,l=0;3>l;l++)k[l]=Math.round(k[l]),A[l]=Math.round(A[l]),k[l]>0&&(w.push(W+l+"="+k[l]),
"wifi"==networkType?w.push(W+l+6+"="+k[l]):("2g/3g"==networkType||"4g"==networkType)&&w.push(W+l+12+"="+k[l])),
A[l]>0&&(w.push(N+l+"="+A[l]),"wifi"==networkType?w.push(N+l+6+"="+A[l]):("2g/3g"==networkType||"4g"==networkType)&&w.push(N+l+12+"="+A[l]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",n,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_wap/utils/ajax.js"),a=e("common/utils.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],("network_type:edge"==i.err_msg||"network_type:wwan"==i.err_msg)&&(i.detailtype&&"4g"==i.detailtype||i.subtype&&"4g"==i.subtype)&&(networkType="4g"),
t();
});
}else t();
},!1);
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/articleReport.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","appmsg/log.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js"],function(e,i,o,t){
"use strict";
function n(){
var e=window.location.protocol+"//",i=_.indexOf("://")<0?e+_:_;
if(-1!=i.indexOf("mp.weixin.qq.com/s")||-1!=i.indexOf("mp.weixin.qq.com/mp/appmsg/show")||-1!=i.indexOf("mp.weixin.qq.com/mp/homepage")){
var o=i.split("#");
i=r.addParam(o[0],"scene",25,!0)+(o[1]?"#"+o[1]:""),i=i.replace(/#rd$/g,"#wechat_redirect");
}else i=e+"mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(_);
try{
if("mp.weixin.qq.com"!=top.window.location.host)return window.top.open(i,"_blank"),
!1;
}catch(t){}
var n=location.search.replace("wx_header","del_wx_header"),s={
url:"/mp/advertisement_report"+n+"&report_type=3&action_type=0&url="+encodeURIComponent(_)+"&ascene="+encodeURIComponent(window.ascene||-1)+"&__biz="+biz+"&r="+Math.random()+"&exptype="+window.exptype+"&expsessionid="+window.expsessionid,
type:"GET",
mayAbort:!0,
async:!1
},p=c.isInMiniProgram?0:1;
return s.timeout=2e3,s.complete=function(){
d(i,{
sample:p,
scene:60,
user_name:user_name,
reject:function(){
location.href=i;
}
});
},m(s),!1;
}
e("biz_common/utils/string/html.js");
var s=e("biz_common/dom/event.js"),r=e("biz_common/utils/url/parse.js"),p=e("appmsg/articleReport.js"),m=e("biz_wap/utils/ajax.js"),c=e("biz_wap/utils/mmversion.js"),a=e("appmsg/log.js"),l=msg_title.htmlDecode(),_=msg_source_url.htmlDecode(),d=e("appmsg/open_url_with_webview.js"),w=e("biz_wap/jsapi/core.js");
p.init({
dom:document.getElementById("js_report_article3"),
title:l,
link:window.msg_link
});
var u=document.getElementById("js_view_source");
s.on(u,"click",function(e){
var i=u.getBoundingClientRect();
return a("[Appmsg viewsource location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
a("[Appmsg viewsource click] clientX: "+e.clientX+" clientY: "+e.clientY),n(),!1;
});
});define("appmsg/appmsg_copy_report.js",["biz_wap/utils/ajax.js","biz_common/dom/event.js"],function(t){
"use strict";
var e=t("biz_wap/utils/ajax.js"),n=t("biz_common/dom/event.js"),o=function(t,e){
var n=!1,o=t;
if(t===e)n=!0;else for(;o.parentNode&&(o=o.parentNode,1!==o.nodeType||"body"!==o.tagName.toLowerCase());)if(o===e){
n=!0;
break;
}
return n;
},i=function(t){
this.biz=t.biz,this.logid=t.logid,this.baseData=t.baseData,this.isPaySubscribe=t.isPaySubscribe,
this.container=t.container,this.totalLength=this.container.innerText.length,this.initEvent();
};
return i.prototype.initEvent=function(){
var t=this;
n.on(document,"copy",function(){
console.log(t.getContentData());
var e=[].concat(t.baseData),n=t.getContentData().trim();
n.length&&(e.push(t.totalLength),e.push(n),e.push(n.length),e.push(t.isPaySubscribe),
t.report(e.join(",")));
});
},i.prototype.getContentData=function(){
var t=document.getSelection(),e=this.container,n="";
if(t&&t.rangeCount){
var i=t.getRangeAt(0);
if(!i.collapsed){
var a=i.startContainer,r=i.startOffset,s=i.endContainer,c=i.endOffset,p=o(a,e),u=o(s,e);
if(p&&u)n=i.toString();else if(p||u){
var f=document.createRange();
f.setStart(a,r),f.setEnd(s,c),!u&&f.setEndAfter(e),!p&&f.setStartBefore(e),n=f.toString();
}else if(t.containsNode&&t.containsNode(e,!0)){
var f=document.createRange();
f.setEndAfter(e),f.setStartBefore(e),n=f.toString();
}
}
}
return n;
},i.prototype.report=function(t){
var n=this.biz,o=this.logid;
e({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+n,
type:"POST",
data:{
logid:o,
buffer:t
},
async:!1,
timeout:2e3
});
},i;
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function t(){
function e(e){
var t=[];
for(var n in e)t.push(n+"="+encodeURIComponent(e[n]||""));
return t.join("&");
}
if(networkType){
var t=window.performance||window.msPerformance||window.webkitPerformance;
if(t&&"undefined"!=typeof t.getEntries){
var n,i,a=100,o=document.getElementsByTagName("img"),p=o.length,s=navigator.userAgent,g=!1;
/micromessenger\/(\d+\.\d+)/i.test(s),i=RegExp.$1;
for(var w=0,m=o.length;m>w;w++)if(n=parseInt(100*Math.random()),!(n>a)){
var d=o[w].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,_=t.getEntries(),u=0;u<_.length;u++)if(f=_[u],f.name==d){
var c=o[w].getAttribute("data-fail");
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:i,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:o[w].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:p>100?100:p,
delay_time:parseInt(f.duration),
from:window.isSg?"sougou":"",
fail:c
})
}),g=!0;
break;
}
if(g)break;
}
}
}
}
}
var n=e("biz_common/dom/event.js"),i=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),a={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
i.invoke("getNetworkType",{},function(e){
networkType=a[e.err_msg],("network_type:edge"==e.err_msg||"network_type:wwan"==e.err_msg)&&(e.detailtype&&"4g"==e.detailtype||e.subtype&&"4g"==e.subtype)&&(networkType="4g"),
t();
}),n.on(window,"load",t,!1);
});define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(t,e){
var i=c;
e.img_url||(e.img_url=topic_default_img);
for(var o in e){
var a=new RegExp("{"+o+"}","g");
i=i.replace(a,e[o]);
}
var p=document.createElement("span");
p.className="db topic_area",p.innerHTML=i,t.parentNode.insertBefore(p,t),t.parentNode.removeChild(t),
r.tap(p,function(){
var e=location.protocol+"//mp.weixin.qq.com/mp/topic?action=topic_detail_page&topic_id="+t.getAttribute("data-topic-id")+"&topic_type="+t.getAttribute("data-topic-type")+"&sn="+t.getAttribute("data-topic-sn")+"&scene=101#wechat_redirect";
n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t&&-1!==t.err_msg.indexOf(":ok")||(location.href=e);
});
});
}
function o(t){
var o={
topic_id:t.getAttribute("data-topic-id"),
topic_type:t.getAttribute("data-topic-type"),
sn:t.getAttribute("data-topic-sn"),
biz:biz
};
p({
url:"/mp/topic?action=get_topic_info",
type:"post",
data:o,
success:function(o){
if(console.log(o),o=JSON.parse(o),0!=o.base_resp.ret)return void e(t);
var a={
title:o.title,
author:o.author||(o.leading_actor?o.leading_actor.replace(/\$\$/g," / "):"-"),
img_url:o.img_url,
msg_num:o.msg_num
};
i(t,a);
},
error:function(){
e(t);
}
});
}
function a(){
var t=document.getElementsByTagName("wxtopic");
t[0]&&o(t[0]);
}
var p=t("biz_wap/utils/ajax.js"),n=t("biz_wap/jsapi/core.js"),r=t("biz_common/dom/event.js"),c=t("appmsg/topic_tpl.html.js");
a();
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var o=arguments[t];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);
}
return e;
};
define("appmsg/live.js",["biz_common/dom/event.js","appmsg/weapp_common.js","biz_common/moment.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","appmsg/appmsg_live_tpl.html.js","biz_wap/utils/wapsdk.js","common/utils.js","biz_common/dom/offset.js","common/comm_report.js"],function(e){
"use strict";
function t(e,t){
g.jsmonitor({
id:223326,
key:e,
value:t
});
}
function o(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.report(21032,_extends({
MsgId:1*z.mid,
ItemIdx:1*z.idx,
BizUin:z.biz,
PreScene:1*z.scene,
ActionType:1e4
},e));
}
function n(e){
var t=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
return e=Number(e),null===e?0:isNaN(e)?"-":((isNaN(t)||null===t)&&(t=1),e>9999e8?"9990%s".replace("%s","亿+"):e>99999499?Number((e/1e8).toFixed(t))+"00M":e>=1e4?Number((e/1e4).toFixed(t))+"0K":e);
}
function s(){
function e(){
if(h.length)for(var e=0;e<h.length;e++){
var n=h[e];
if(!n.cardExposed){
var s=_.getOffset(n).offsetTop,i=v.getScrollTop();
i+v.getInnerHeight()>=s&&i<=s+n.offsetHeight&&(t(9),o({
SubActionType:1,
RoomId:n.liveInfo.room_id
}),n.cardExposed=!0);
}
}
}
m.on(document.body,"tap","."+j,function(e){
var n=e.delegatedTarget.liveInfo,s=encodeURIComponent(location.href);
t(10),o({
SubActionType:2,
RoomId:n.room_id
}),107!==n.status&&r.jumpUrl({
options:{
userName:"gh_9dcc2ce385c1",
appId:"wx60422b707e49ff2e",
relativeURL:"pages/player/player?roomId="+n.room_id+"&roomAppId="+n.room_appid+"&sceneNote="+s+"&preScene="+z.scene,
openType:2
}
});
}),v.bindDebounceScrollEvent(e),e();
}
function i(){
for(var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=0;t<e.length;t++){
var o="",i="",a="",m="",r=e[t],d=r.status;
if(104!==d){
var c=101===d||105===d||106===d,g=103===d||107===d;
if(c)o="直播中",i="正在直播: ",a="进入直播";else if(0===d||102===d){
o="直播",i="即将直播: ",a="开播提醒";
var v=z.svrTime?new Date(1e3*z.svrTime):new Date,_=v.getFullYear(),f=v.getMonth(),j=v.getDate(),h=new Date(_,f,j,0,0,0).getTime(),w=h+864e5,y=1e3*r.begin_time,I=new Date(y).getFullYear()!==_,T=y>=h&&w>y,x=y>=w&&w+864e5>y,N=void 0;
N=T?"Today":x?"明天":I?"YYYY年M月D日":"M月D日";
var S=l(y).format(N+" HH:MM");
m=S+" 开播";
}else g&&(o="直播结束",i="直播已结束: ",a="查看直播");
(c||g)&&(m=n(r.view_count)+" Watch");
var D=document.getElementsByClassName(""+b+r.room_id)[0];
D&&(D.liveInfo=r,D.innerHTML=p.tmpl(u,{
tagStatusWord:o,
liveStatusWord:i,
btnStatusWord:a,
statusInfoWord:m,
showEntryBtn:107!==d,
title:""+i+r.room_name,
desc:r.nickname+"的直播",
cover:r.cover,
isInLive:c,
isEnd:g,
likeCount:n(r.like_count),
liveDeleted:1===r.room_status
}));
}
}
s();
}
function a(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(h.length){
_extends(z,e);
for(var t=[],o=0;o<h.length;o++)t.push(h[o].dataset.id),d.addClass(h[o],j),d.addClass(h[o],""+b+h[o].dataset.id);
c({
url:"/mp/getappmsglive",
type:"POST",
dataType:"json",
data:{
__biz:e.biz,
mid:e.mid,
idx:e.idx,
scene:e.scene,
live_id:t.join(",")
},
success:function(e){
e&&e.live_info&&e.live_info.length&&i(e.live_info);
}
});
}
}
var m=e("biz_common/dom/event.js"),r=e("appmsg/weapp_common.js"),l=e("biz_common/moment.js"),d=e("biz_common/dom/class.js"),c=e("biz_wap/utils/ajax.js"),p=e("biz_common/tmpl.js"),u=e("appmsg/appmsg_live_tpl.html.js"),g=e("biz_wap/utils/wapsdk.js"),v=e("common/utils.js"),_=e("biz_common/dom/offset.js"),f=e("common/comm_report.js"),j="js_live_card",b="js_live_card_",h=document.getElementsByTagName("mplive"),z={};
return{
init:a
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
};
define("appmsg/channel/channels.js",["biz_common/tmpl.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","appmsg/appmsg_card.js","appmsg/channel/video_snap_tpl.html.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","pages/utils.js","common/utils.js","common/comm_report.js","appmsg/channel/time_format.js","appmsg/channel/report_live.js","biz_common/dom/class.js"],function(e,t,n,i){
"use strict";
function a(){
return!F.isWechat||U.os.pc||F.is_wxwork?!1:F.isIOS&&F.ltVersion("7.0.15",!1)?!1:F.isAndroid&&window.clientversion<="27001337"?!1:F.isAndroid&&window.clientversion>"2700135F"&&window.clientversion<"27001400"?!1:!0;
}
function o(){
return!F.isWechat||U.os.pc||F.is_wxwork?!1:F.isAndroid&&window.clientversion<"2700143c"?!1:F.isIOS&&window.clientversion<"17001228"?!1:!0;
}
function r(e,t,n){
D.report(21146,{
BizUin:K,
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
ExportId:t||"",
Action:e,
Username:n||"",
Scene:window.parseInt(window.scene,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
EnterId:window.parseInt(window.enterid,10)||0
});
}
function s(e){
return"live"===e?void((F.isAndroid&&window.clientversion<"2700143c"||F.isIOS&&window.clientversion<"17001228")&&window.weui.alert("请升级微信客户端版本后查看")):F.isAndroid&&window.clientversion>"2700135F"&&window.clientversion<"27001400"?void window.weui.alert("当前版本暂不支持查看"):(F.isWechat&&U.os.pc?window.weui.alert("当前版本暂不支持查看，请在手机上查看"):(!F.isWechat||F.is_wxwork)&&i("请在微信内打开"),
void(!F.isWechat||U.os.pc||F.is_wxwork||q.jumpUrl("https://support.weixin.qq.com/update/",!0)));
}
function d(e){
if(o()){
var t={
action:"openFinderProfile",
finderUserName:e,
commentScene:5,
reportExtraInfo:JSON.stringify({
scenenote:{
bizUin:K,
msgid:window.parseInt(window.mid,10)||0,
idx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.scene,10)||0,
enterid:window.parseInt(window.enterid,10)||0,
action:5,
status:G,
actionTS:Math.ceil(Date.now()/1e3)
}
})
};
T.invoke("openFinderView",{
extInfo:t
},function(e){
console.log("openFinderView",e);
});
}else s("live");
}
function c(e){
o()?T.invoke("openFinderView",{
extInfo:{
action:"autoOpenFinderLive",
finderUserName:e,
commentScene:5,
reportExtraInfo:JSON.stringify({
scenenote:{
bizUin:K,
msgid:window.parseInt(window.mid,10)||0,
idx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.scene,10)||0,
enterid:window.parseInt(window.enterid,10)||0,
action:4,
status:G,
actionTS:Math.ceil(Date.now()/1e3)
}
})
}
},function(e){
console.log("openFinderLive",e);
}):s("live");
}
function u(e,t,n,i){
if(r(2,e,n),a()){
var o={
action:"openFinderFeed",
feedID:e,
nonceID:t,
notGetReleatedList:9===i?"1":0,
shareScene:11,
requestScene:16,
reportExtraInfo:JSON.stringify({
mp:{
scene:1
}
})
};
T.invoke("openFinderView",{
extInfo:o
},function(e){
console.log("openFinderDetailView",e);
});
}else r(3,e,n),s(i);
}
function l(e){
return R.filter(function(t){
return t.export_id===e;
});
}
function p(e){
return H.filter(function(t){
return t.notice_id===e;
});
}
function w(e){
var t=e.parentNode;
if(t){
var n=t.getAttribute("data-id"),i=l(n),a=void 0;
i&&i.length>0&&(a=i[0]);
var o=a&&a.nonce_id?a.nonce_id:t.getAttribute("data-nonceid"),r=a&&a.flag||0,s=a&&a.username?a.username:t.getAttribute("data-username"),d=a&&a.media_type?a.media_type:t.getAttribute("data-mediatype");
0===r&&u(n,o,s,d);
}
}
function m(){
for(var e=document.getElementsByClassName("js_wechannel_img_card"),t=function(t){
var n=e[t];
z.on(n,"tap",function(){
w(n);
}),E.addAppmsgCardTouchEvent(n);
},n=0;n<e.length;n++)t(n);
}
function _(){
for(var e=document.getElementsByClassName("js_wechannel_video_card"),t=function(t){
var n=e[t];
z.on(n,"tap",function(){
w(n);
}),E.addAppmsgCardTouchEvent(n);
},n=0;n<e.length;n++)t(n);
}
function g(e){
var t=p(e);
t&&t.length>0&&(t=t[0]);
var n=t.status,i=t.reservation;
return 0===n?0===i?1:2:1===n?5:2===n?3:3===n?4:1;
}
function v(){
for(var e=document.getElementsByClassName("js_wechannel_live_card"),t=function(e){
var t=e.currentTarget,n=t.getAttribute("data-username"),i=t.getAttribute("data-noticeid");
L.report(5,i,n,g(i)),G=g(i),d(n);
},n=0;n<e.length;n++){
var i=e[n];
z.on(i,"tap",t),E.addAppmsgCardTouchEvent(i,".js_channel_btn_operation");
}
}
function f(e,t,n){
N({
url:"/mp/appmsg_video_snap?action=reserve_live",
type:"POST",
dataType:"json",
async:!0,
data:{
username:e,
notice_id:t,
reserve_status:n
},
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
for(var i=document.querySelectorAll('.js_channel_btn_operation[data-noticeid="'+t+'"]'),a=0;a<i.length;a++){
var o=i[a];
o.setAttribute("data-reservation",1===n?1:0),o.querySelector(".js_channel_btn_operation_wording").innerHTML=1===n?"已预约":"预约",
1===n?M.addClass(o,"weui-btn_disabled"):M.removeClass(o,"weui-btn_disabled");
}
var r=p(t);
r&&r.length>0&&r.forEach(function(e){
e.reservation=1===n?1:0;
});
}else window.weui.alert("System busy. Try again later.");
},
error:function(){
window.weui.alert("Operation failed");
}
});
}
function b(){
for(var e=document.getElementsByClassName("js_channel_btn_operation"),t=function(e){
var t=e.currentTarget,n=t.getAttribute("data-noticeid"),i=t.getAttribute("data-username");
return L.report(4,n,i,g(n)),G=g(n),c(i),!1;
},n=function(n){
var i=e[n],a=parseInt(i.getAttribute("data-status"),10);
2===a?z.on(i,"tap",t):0===a&&z.on(i,"tap",function(){
if(window.is_temp_url)return window.weui.alert("Unable to do this in preview"),!1;
var e=i.getAttribute("data-noticeid"),t=i.getAttribute("data-reservation"),n=i.getAttribute("data-username");
return"0"===t?L.report(2,e,n,g(e)):L.report(3,e,n,g(e)),f(n,e,"0"===t?1:2,i),!1;
});
},i=0;i<e.length;i++)n(i);
}
function h(){
if(V&&V.length&&P.length===V.length)return void z.off(window,"scroll",h);
for(var e=0;e<V.length;e++){
var t=V[e],n=t.firstChild;
if(n&&n.getBoundingClientRect().top>0&&n.getBoundingClientRect().top+n.getBoundingClientRect().height/2<=B.getInnerHeight()){
var i=t.getAttribute("data-id")||t.getAttribute("data-noticeid"),a=t.getAttribute("data-username"),o=t.getAttribute("data-type");
-1===P.indexOf(i)&&(P.push(i),"live"===o?L.report(1,i,a,g(i)):r(1,i,a));
}
}
}
function y(e,t,n,i){
for(var a=document.querySelectorAll('.js_wechannel_live_card[data-noticeid="'+e+'"]'),o=0;o<a.length;o++){
var r=a[o],s=r.querySelector('.js_channel_btn_operation[data-noticeid="'+e+'"]'),d=W.getStatusWording(t,n),c=W.getStatusDesc(i,t);
s&&(s.querySelector(".js_channel_btn_operation_wording").innerHTML=d,s.setAttribute("data-reservation",n),
s.setAttribute("data-status",t),r.querySelector(".js_wechannel_live_desc").innerHTML=c,
0!==t&&2!==t||0!==n?M.addClass(s,"weui-btn_disabled"):M.removeClass(s,"weui-btn_disabled"),
s.querySelector(".js_wechannnel_live").style.display=2===t?"block":"none");
}
}
function j(){
for(var e={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||"",
video_snap_num:H.length
},t=0;t<H.length;t++){
var n=H[t].notice_id,i=H[t].username;
e["notice_id_"+t]=n,e["username_"+t]=i;
}
var a="/mp/appmsg_video_snap?action=batch_get_flag_info";
for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a+="&"+o+"="+encodeURIComponent(e[o]));
N({
url:a,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret&&e.live_info&&e.live_info.length>0)for(var t=0;t<e.live_info.length;t++){
var n=e.live_info[t],i=p(n.notice_id);
if(i&&i.length>0){
var a=i[0];
(n.status!==a.status||n.reservation!==a.reservation)&&(a.reservation=n.reservation,
a.status=n.status,y(n.notice_id,n.status,n.reservation,a.start_time));
}
}
},
error:function(){}
});
}
function A(){
z.bindVisibilityChangeEvt(function(e){
e&&j();
});
}
function I(){
m(),_(),b(),v(),A(),z.on(window,"scroll",h);
}
function x(){
var e=document.getElementById("js_content");
if(e){
V=e.getElementsByTagName("mpvideosnap")||[];
for(var t=0;t<V.length;t++){
var n=V[t],i=n.getAttribute("data-id")||n.getAttribute("data-noticeid")||"",a=n.getAttribute("data-type")||"video",o=void 0;
if("live"===a){
var r=n.getAttribute("data-noticeid")||"",s=p(r),d=s.length>0?s[0]:{};
o={
snapType:"live",
headImgUrl:d.head_url||n.getAttribute("data-headimgurl")||"",
nickname:d.nickname||n.getAttribute("data-nickname")||"",
desc:W.getStatusDesc(d.start_time,d.status)||n.getAttribute("data-desc")||"",
reservation:d.reservation||0,
status:d.status||0,
username:d.username||n.getAttribute("data-username")||"",
noticeid:d.notice_id||n.getAttribute("data-noticeid")||"",
liveWording:W.getStatusWording(d.status||0,d.reservation||0),
flag:1===d.spam_flag||2===d.spam_flag?1:0
},J.push({
noticeid:d.notice_id||n.getAttribute("data-noticeid")||"",
status:d.status||0
});
}else{
var s=l(i),c=s.length>0?s[0]:{},u=4===c.media_type||9===c.media_type?"video":"image";
o={
snapType:c&&c.media_type?u:n.getAttribute("data-type"),
url:c.feed_cover_url||c.feed_thumb_url||n.getAttribute("data-url")||"",
headImgUrl:c.head_url||n.getAttribute("data-headimgurl")||"",
nickname:c.nickname||n.getAttribute("data-nickname")||"",
desc:c.feed_desc||n.getAttribute("data-desc")||"",
flag:c.flag||0
},"image"===o.snapType&&(o=_extends(o,{
imgCount:parseInt(c.media_num||"0",10)||parseInt(n.getAttribute("data-imgcount")||"0",10)||0
}));
}
var w=document.createElement("div");
w.innerHTML=C.tmpl(O,o),w.firstElementChild&&n.appendChild(w.firstElementChild);
var m=document.querySelector('[data-preloadingid="'+i+'"]');
m&&n.parentNode.removeChild(m);
}
h(),I();
}
}
function S(){
var e=[];
try{
e=JSON.parse(window.video_snap_json).list;
}catch(t){
console.log(t);
}
for(var n={},i={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||""
},a=0;a<e.length;a++){
var o=e[a].export_id||e[a].notice_id,r=e[a].username;
n[o]?n[o].push(a):(n[o]=[a],e[a].export_id?i["exportid_"+a]=o:e[a].notice_id&&(i["notice_id_"+a]=o),
i["username_"+a]=r);
}
i.video_snap_num=Object.keys(n).length;
var s="/mp/appmsg_video_snap?action=batch_get_video_snap";
for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(s+="&"+d+"="+encodeURIComponent(i[d]));
N({
url:s,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret&&(R=e.video_snap_info||[],H=e.live_info||[]),
x();
},
error:function(){
x();
}
});
}
function k(){
S();
}
var C=e("biz_common/tmpl.js"),z=e("biz_common/dom/event.js"),T=e("biz_wap/jsapi/core.js"),E=e("appmsg/appmsg_card.js"),O=e("appmsg/channel/video_snap_tpl.html.js"),N=e("biz_wap/utils/ajax.js"),F=e("biz_wap/utils/mmversion.js"),U=e("biz_wap/utils/device.js"),q=e("pages/utils.js"),B=e("common/utils.js"),D=e("common/comm_report.js"),W=e("appmsg/channel/time_format.js"),L=e("appmsg/channel/report_live.js"),M=e("biz_common/dom/class.js"),V=[],R=[],H=[],P=[],J=[],G=1,K=0;
try{
K=1*window.atob(window.biz);
}catch(Q){}
k();
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var t=arguments[n];
for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);
}
return e;
};
define("question_answer/appmsg.js",["biz_common/utils/string/html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","pages/utils.js","biz_common/tmpl.js","question_answer/qa_card.html.js","question_answer/answer_item.html.js","question_answer/reply_item.html.js","question_answer/write_answer_reply.html.js","biz_common/utils/url/parse.js","biz_common/dom/class.js","pages/mod/bottom_modal.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js","common/comm_report.js","biz_wap/utils/device.js","common/utils.js","biz_common/dom/offset.js","biz_wap/utils/wapsdk.js"],function(e){
"use strict";
function n(e,n){
var t=arguments.length<=2||void 0===arguments[2]?0:arguments[2];
return e.getElementsByClassName(n)[t];
}
function t(e){
var n=void 0;
if(window.qnaCardData)try{
n=JSON.parse(window.qnaCardData);
var t=n.list;
if(t&&t.length)for(var s=0;s<t.length;s++)if(e===t[s].question_id)return t[s].qna_sn;
}catch(a){
console.error(a);
}
return"";
}
function s(e){
e&&(e.style.display="none");
}
function a(e){
e&&(e.style.display="block");
}
function o(e,n){
G.jsmonitor({
id:223326,
key:e,
value:n
});
}
function i(){
window.weui.topTips("System error. Try again later");
}
function r(){
return W.os.ios?1:W.os.android?2:-1;
}
function l(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
F.report(20883,_extends({
Device:r(),
MsgId:1*yn.mid,
ItemIdx:1*yn.idx,
BizUin:nn.biz,
ItemShowType:1*nn.itemShowType,
SessionId:nn.sessionId,
EnterId:1*nn.enterId,
Scene:1*nn.scene,
SubScene:1*nn.subScene,
QaId:K.dataset.id
},e));
}
function _(e,n,t){
var s={
replyListHtml:"",
replyList:document.createDocumentFragment()
};
return e&&e.reply_list&&e.reply_list.length&&(s.leftReplyCount=e.left_reply_cnt,
s.leftReplyTips="余下%s条回复".replace("%s",e.left_reply_cnt),e.reply_list.forEach(function(e){
e.canOp=t,e.content=e.content.htmlEncode(),e.content=R.encode(e.content),e.likeNumFormated=k.formatReadNum(e.like_num),
e.replyStatus=void 0===e.reply_status?1:e.reply_status,e.isLogin=V;
var n=document.createElement("div");
n.innerHTML=B.tmpl(P,e,!1),s.replyListHtml+=n.innerHTML,s.replyList.appendChild(n.firstChild);
})),s;
}
function d(e,n){
var t=arguments.length<=2||void 0===arguments[2]?"":arguments[2],s={
answerListHtml:"",
fragment:document.createDocumentFragment()
};
return e.forEach(function(e){
e.likeNumFormated=k.formatReadNum(e.like_num),e.canOp=n,e.answer_sn=e.answer_sn||"",
e.content=e.content.htmlEncode(),e.oriContent=e.content,e.content=R.encode(e.content),
e.isLogin=V;
var a=_(e.reply_info,e.answer_id,n,t);
_extends(e,a);
var o=document.createElement("div");
o.innerHTML=B.tmpl(x,e,!1),s.answerListHtml+=o.innerHTML,s.fragment.appendChild(o.firstChild);
}),t===un?sn+=cn:t===pn&&(tn+=cn),s;
}
function c(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=_extends({
action:e.action,
limit:cn,
offset:e.offset
},yn);
H({
url:O.join("/mp/qna",n),
dataType:"json",
success:function(n){
var t=void 0;
n&&(t=n.qna_info?n.qna_info.answer_info:n.answer_info,e.successCb(t,n));
},
complete:function(){
e.complete&&e.complete();
}
});
}
function p(e,n){
for(var t=0;e.offsetParent&&e!==n;)t+=e.offsetTop,e=e.offsetParent;
return t;
}
function u(e,t,a){
var o=e.dataset.answerid,i=a?p(e,Y.getScrollEle()):0;
H({
url:O.join("/mp/qna",_extends({
action:"get_more_reply",
answer_id:o,
answer_sn:e.dataset.answersn,
limit:10
},yn)),
dataType:"json",
success:function(r){
if(r&&r.reply_info&&r.reply_info.reply_list&&r.reply_info.reply_list.length){
var l=_(r.reply_info,o,!0,t);
l.replyListHtml?(n(e.parentNode,"js_qa_reply_list").appendChild(l.replyList),l.leftReplyCount?e.innerHTML=l.leftReplyTips:s(e),
a&&Y.scrollTo(0,i-48)):s(e);
}
}
});
}
function m(e){
var t=n(Z,"js_get_more_reply_"+e);
t&&u(t,pn,!0);
}
function f(){
z.on(Z,"tap",".js_get_more_reply",function(e){
var n=e.delegatedTarget;
u(n,pn);
});
}
function w(){
return n(en,"js_qa_input");
}
function y(){
var e=w();
return(e.value||e.innerHTML).trim();
}
function g(){
y()?$.enableBtn():$.disableBtn();
}
function v(){
var e=w();
z.on(en,"tap",".js_get_more_reply",function(e){
var n=e.delegatedTarget;
u(n,un);
}),z.on(e,"input",g),z.on(e,"tap",function(){
$.scrollTo(0,0);
});
}
function j(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
c({
action:e.action,
offset:e.offset,
successCb:function(t,s){
if(t&&t.answer_list&&t.answer_list.length){
var o=void 0,i=void 0;
"get_my_answer"===e.action?(o=un,i=en,a(n(en,"js_qa_write_head"))):(o=pn,i=Z);
var r=n(i,"js_qa_qna_answer_list");
r.appendChild(d(t.answer_list,!0,o).fragment);
}
e.cb&&e.cb(t,s);
}
});
}
function b(){
if(en){
var e="回复: %s".replace("%s",R.encode(dn)),t=n(en,"js_reply_top_content");
on?(t.innerHTML=e,a(t)):s(t);
}
}
function h(e){
n(en,"js_alert_toast_word").innerHTML=e,a(n(en,"js_alert_toast")),setTimeout(function(){
s(n(en,"js_alert_toast"));
},800);
}
function q(){
for(var e=0,n=Z.getElementsByClassName("js_qa_list_item"),t=0;t<n.length&&n[t].getBoundingClientRect().y<Q.getInnerHeight();t++)e++;
e>an&&(an=e);
}
function T(e,t){
if(Y)return Y.show(),void(e&&t&&m(t));
var a=void 0;
Z=K.firstChild.cloneNode(!0);
var o=n(Z,"qa__list-more"),i=n(Z,"js_qa_write_answer");
o&&s(o),i&&U.addClass(i,fn),n(Z,"js_qa_qna_answer_list").innerHTML="",Y=new D(Z,{
title:"读者讨论",
extClass:"qa__card",
onPullUpLoad:function(){
a>0&&(Y.showPullUpLoading(),j({
action:"get_more_answer",
offset:tn,
cb:function(e,n){
Y.hidePullUpLoading(),e.left_answer_cnt||0!==n.base_resp.ret?Y.finishPullUpLoad():Y.showEndLine();
}
}));
},
cb:function(){
j({
action:"get_more_answer",
offset:tn,
cb:function(s){
if(e&&t)m(t);else{
var o=X.dataset.count,i=n(Z,"js_qa_list_item",o),r=p(i,Y.getScrollEle());
Y.scrollTo(0,r-96);
}
a=s.left_answer_cnt,a||Y.showEndLine();
}
});
},
onScroll:function(){
q();
},
onHide:function(){
q(),l({
EventType:3,
Exposure:an
}),an=0;
}
}),Y.show(),f();
}
function C(){
var e=w(),n=e.cloneNode();
n.id="tmp_input",n.style.top=0,n.style.position="absolute",e.parentNode.insertBefore(n,e),
n.value=e.value,n.scrollTop=e.scrollTop;
}
function L(){
var e=document.getElementById("tmp_input");
e&&e.parentNode.removeChild(e);
}
function N(e){
var t=void 0,o=on?"写回复":"参与讨论";
return $?(b(),$.setTitle(o),$.setCloseBtnStyle(e?"back":"close"),void $.show(!0,wn,w(),{
afterTransparentInputEle:C,
afterShowInputEle:L
})):(en=document.createElement("div"),en.innerHTML=B.tmpl(M,{}),$=new D(en,{
title:o,
top:wn,
extClass:"qa__card qa__card_write",
hasBtn:!0,
disableTransition:!0,
innerScrollList:[w()],
onPullUpLoad:function(){
t>0&&($.showPullUpLoading(),j({
action:"get_my_answer",
offset:sn,
cb:function(e,n){
$.hidePullUpLoading(),e.left_answer_cnt||0!==n.base_resp.ret?$.finishPullUpLoad():$.showEndLine();
}
}));
},
onHide:function(){
w().blur();
},
onScroll:function(e){
"up"===e&&w().blur();
},
cb:function(){
j({
action:"get_my_answer",
offset:sn,
cb:function(e){
t=e.left_answer_cnt,t||$.showEndLine();
}
});
},
btnClickCb:function(){
$.disableBtn();
var e=on?"add_reply":"add_answer";
a(n(en,"js_loading_toast")),H({
url:"/mp/qna?action="+e,
type:"POST",
dataType:"json",
data:_extends({
answer_id:ln,
answer_sn:_n,
content:y(),
my_reply_cnt:rn+1,
ignore_tips:1
},yn),
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
if(a(n(en,"js_sended_toast")),setTimeout(function(){
s(n(en,"js_sended_toast"));
},800),w().value="",$.disableBtn(),on&&e.reply_info&&e.reply_info.reply_list){
var t=_(e.reply_info,ln,!0).replyList,o=n(en,"js_qa_reply_list_"+ln);
o.appendChild(t.cloneNode(!0)),a(n(o.parentNode,"js_write_reply")),s(n(o.parentNode.parentNode,"js_write_reply"));
}else if(!on&&e.answer_info&&e.answer_info.answer_list){
var r=n(en,"js_qa_qna_answer_list");
r.insertBefore(d(e.answer_info.answer_list,!0).fragment,r.firstChild),a(n(en,"js_qa_write_head"));
}
}else $.enableBtn(),168003===e.base_resp.ret||168007===e.base_resp.ret?h("内容涉嫌违反平台协议或法规政策"):168004===e.base_resp.ret?h("关注该公众号才能参与讨论"):168005===e.base_resp.ret?h("关注该公众号3天及以上才能参与讨论"):168008===e.base_resp.ret||168009===e.base_resp.ret?h("字数不能多于"+(on?140:600)):i();
},
error:function(){
i(),$.enableBtn();
},
complete:function(){
s(n(en,"js_loading_toast")),w().blur();
}
});
}
}),b(),$.disableBtn(),$.setCloseBtnStyle(e?"back":"close"),$.show(!0,wn,w(),{
afterTransparentInputEle:C,
afterShowInputEle:L
}),v(),void new R.Emotion({
emotionPanel:A("#js_qa_emotion_panel"),
inputArea:A(w()),
emotionPanelArrowWrp:A("#js_qa_emotion_panel_arrow_wrp"),
emotionSwitcher:A("#js_qa_emotion_switch"),
emotionSlideWrapper:A("#js_qa_emotion_slide_wrapper"),
emotionNavBar:A("#js_qa_emotion_navbar"),
inputEmotion:function(){
g();
}
}));
}
function E(){
function e(){
if(!t){
var e=K.firstChild,n=J.getOffset(e).offsetTop,s=Q.getScrollTop();
s+Q.getInnerHeight()>=n&&s<=n+e.offsetHeight&&(l({
EventType:1
}),o("0"),t=!0);
}
}
var t=void 0;
z.on(K,"tap",".js_get_more_reply",function(e){
var n=e.delegatedTarget,t=n.dataset.answerid;
gn[t]?T():(T(!0,t),gn[t]=!0);
}),z.on(document.body,"click",".js_qa_write_answer",function(e){
on=!1,N(U.hasClass(e.delegatedTarget,fn)),o(2);
}),z.on(document.body,"click",".js_write_reply",function(e){
var t=e.delegatedTarget,s=t.parentNode.parentNode;
if(ln=t.dataset.answerid,_n=t.dataset.answersn,s){
var a=s.getElementsByClassName("js_qa_reply_content");
rn=s.getElementsByClassName("js_qa_my_reply").length,dn=a.length?a[a.length-1].innerHTML:n(s,"js_qa_item_content").innerHTML;
}
on=ln,on&&(N(!0),o(3));
}),z.on(X,"click",function(){
T(),l({
EventType:2
}),o(1);
}),z.on(document.body,"tap",".js_qa_like",function(e){
var t=e.delegatedTarget,s=U.hasClass(t,mn);
U.toggleClass(t,mn);
var a=n(t,"js_like_num"),i=parseInt(a.dataset.num,10)||0,r=i+(s?-1:1);
r=r>=0?r:0,a.innerHTML=k.formatReadNum(r),a.dataset.num=r,o("2"===t.dataset.type?6:5),
H({
url:"/mp/qna?action=like",
type:"POST",
data:_extends({
like_type:t.dataset.type,
op:s?2:1,
answer_id:t.dataset.id,
reply_id:t.dataset.id
},yn)
});
}),z.on(document.body,"tap",".js_delete_answer",function(e){
var n=e.delegatedTarget;
o(7),setTimeout(function(){
window.weui.confirm("确定删除讨论内容吗？",{
buttons:[{
label:"Cancel",
type:"default"
},{
label:"Delete",
type:"primary",
onClick:function(){
H({
url:"/mp/qna?action=del_answer",
type:"POST",
dataType:"json",
data:_extends({
answer_id:n.dataset.id
},yn),
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
var t=n.parentNode.parentNode.parentNode.parentNode;
t&&U.hasClass(t,"js_qa_list_item")&&t.parentNode.removeChild(t);
}else i();
}
});
}
}]
});
},50);
}),z.on(document.body,"tap",".js_delete_reply",function(e){
var t=e.delegatedTarget;
o(8),setTimeout(function(){
window.weui.confirm("确定删除回复吗？",{
buttons:[{
label:"Cancel",
type:"default"
},{
label:"Delete",
type:"primary",
onClick:function(){
H({
url:"/mp/qna?action=del_reply",
type:"POST",
dataType:"json",
data:_extends({
reply_id:t.dataset.id
},yn),
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
var o=t.parentNode.parentNode.parentNode;
if(o&&U.hasClass(o,"js_qa_reply_item")){
var r=o.parentNode;
r.removeChild(o),r.children.length||(s(r.parentNode),s(n(r.parentNode,"js_write_reply")),
a(n(r.parentNode.parentNode,"js_write_reply")));
}
}else i();
}
});
}
}]
});
},50);
}),Q.bindDebounceScrollEvent(e),e();
}
function S(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
yn.mid=e.mid,yn.idx=e.idx,nn.userUin=e.userUin,nn.biz=e.biz,nn.itemShowType=e.itemShowType,
nn.enterId=e.enterId,nn.scene=e.scene,nn.subScene=e.subScene,nn.sessionId=e.sessionId,
V=e.isLogin,c({
action:"get_qna_info",
successCb:function(e,t){
var s=void 0,a=void 0,i=void 0,r=void 0,l=t.base_resp.ret,_=168001===l,c=t.qna_info&&t.qna_info.question_info;
return _?void(K.innerHTML=B.tmpl(I,{
qaDeleted:_
})):void(0===l&&("1"===O.getQuery("js_my_answer")&&(N(),o(4)),e&&e.answer_list&&e.answer_list.length&&(i=d(e.answer_list,!1).answerListHtml,
a=e.answer_list.length,e.left_answer_cnt&&(s="余下%s条讨论内容".replace("%s",e.left_answer_cnt))),
1===c.can_answer_type&&0===t.qna_info.is_fans?r="作者已设置关注后才可参与讨论":2===c.can_answer_type&&0===t.qna_info.is_fans_days&&(r="作者已设置关注3天后才可参与讨论"),
K.innerHTML=B.tmpl(I,{
qaDeleted:_,
answerCount:a,
leftAnswerCnt:s,
answerListStr:i,
disableAnswerWord:r,
title:R.encode(c.question_title.htmlEncode()),
nickname:c.biz_info.nickname,
isLogin:V
}),X=n(K,"js_more_answer_entry"),E()));
}
});
}
e("biz_common/utils/string/html.js");
var H=e("biz_wap/utils/ajax.js"),z=e("biz_common/dom/event.js"),k=e("pages/utils.js"),B=e("biz_common/tmpl.js"),I=e("question_answer/qa_card.html.js"),x=e("question_answer/answer_item.html.js"),P=e("question_answer/reply_item.html.js"),M=e("question_answer/write_answer_reply.html.js"),O=e("biz_common/utils/url/parse.js"),U=e("biz_common/dom/class.js"),D=e("pages/mod/bottom_modal.js"),R=e("appmsg/emotion/emotion.js"),A=e("appmsg/emotion/dom.js"),F=e("common/comm_report.js"),W=e("biz_wap/utils/device.js"),Q=e("common/utils.js"),J=e("biz_common/dom/offset.js"),G=e("biz_wap/utils/wapsdk.js"),K=document.getElementsByTagName("mp-qa")[0];
if(!K)return{};
var V=void 0,X=void 0,Y=void 0,Z=void 0,$=void 0,en=void 0,nn={},tn=0,sn=0,an=0,on=void 0,rn=void 0,ln=void 0,_n=void 0,dn="",cn=10,pn="answerList",un="myAnswerList",mn="praised",fn="modalWriteAnswerClass",wn="25px",yn={
__biz:K.dataset.bizuin,
question_id:K.dataset.id,
qna_sn:t(K.dataset.id)
},gn={};
return{
renderQaCard:S
};
});define("appmsg/weapp.js",["biz_common/utils/string/html.js","pages/weapp_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_wap/utils/device.js","appmsg/weapp_common.js","common/utils.js","biz_wap/utils/mmversion.js","biz_common/base64.js","appmsg/popup_report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function t(e,t,n){
var o=new Image;
o.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=106&content="+n+",biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(t.toString())+"&r="+Math.random()).substr(0,1024);
}
function n(e,t,n,o,i,p,a){
h({
url:"/mp/appmsgreport?action=appmsg_weapp_report",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e||"",
weapp_pos:t||0,
weapp_title:o||0,
weapp_nickname:n||0,
type:i||0,
scene:window.source||-1,
weapp_type:p,
is_confirm:a||0,
ascene:window.ascene||-1
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function o(e){
var t=e.innerHTML,n=/<img.*src=[\'\"]/,o=/background-image:(\s*)url\(/,i=/background:[^;"']+url\(/;
return n.test(t)||o.test(t)||i.test(t)?!0:!1;
}
function i(e){
var t=e.innerHTML,n=e.style.fontSize;
return 0===t.trim().length||0===parseFloat(n)?!0:!1;
}
function p(){
var e=c("js_content");
if(!e)return!1;
z=e.getElementsByTagName("mp-weapp")||[],R=e.getElementsByTagName("mp-miniprogram")||[],
x=[];
for(var t=e.getElementsByTagName("a"),n=0,o=t.length;o>n;n++){
var i=t[n],p=i.getAttribute("data-miniprogram-appid");
p&&x.push(i);
}
return z.length<=0&&R.length<=0&&0==x.length?!1:T&&0!=T.length?!0:(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1),
!1);
}
function a(e){
return e=e||"",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function r(e,t,o,i,p){
n(e,t,o,i,4,p),window.__addIdKeyReport&&window.__addIdKeyReport("28307",103);
}
function d(e,t,o,i,p){
n(e,t,o,i,5,p);
}
function s(){
function e(e){
e.preventDefault();
}
function p(e){
e&&(l=setTimeout(function(){
e.style.display="none",c=-1;
},100));
}
window.reportWeappid=[];
for(var s=0;s<T.length;s++)window.reportWeappid.push(T[s].appid);
var m=function(){};
y.on(document.getElementById("js_minipro_dialog_ok"),"click",function(t){
t.stopPropagation(),t.preventDefault(),document.querySelector("body").removeEventListener("touchmove",e);
var n=document.getElementById("js_minipro_dialog");
m&&m(),document.getElementById("js_minipro_dialog").style.display="none",C.report([4,1,"",img_popup?1:0,window.source,n._appid]);
}),y.on(document.getElementById("js_minipro_dialog_cancel"),"click",function(t){
t.stopPropagation(),t.preventDefault(),document.querySelector("body").removeEventListener("touchmove",e);
var o=document.getElementById("js_minipro_dialog");
o.style.display="none",n(o._appid,o._i,o._nickname,o._title,3,1,1),window.__addIdKeyReport&&window.__addIdKeyReport("28307",116),
C.report([3,1,"",img_popup?1:0,window.source,o._appid]);
});
var l,c,h=j.os.pc,E=document.getElementById("js_pc_weapp_code"),z=document.getElementById("js_pc_weapp_code_img"),R=document.getElementById("js_pc_weapp_code_des");
h&&(y.on(E,"mouseenter",function(){
clearTimeout(l);
}),y.on(E,"mouseleave",function(){
p(E);
})),I.getAppidInfo({
onSuccess:function(j){
console.log("WeappCommon.getAppidInfo onsuccess");
var x=j.data.infoMap;
if(!x)return void(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1));
for(s=0;s<B.length;s++)(function(s){
window.__addIdKeyReport("111535",1);
var k=B[s].appid,K=B[s].path,T=B[s].imageUrl,A=B[s].title,N=B[s].elem,S=x[k];
if(!S)return void(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1));
var W=N.tagName.toLowerCase(),q=N.firstChild&&1==N.firstChild.nodeType&&"IMG"===N.firstChild.tagName;
if(q=q||N.firstElementChild&&"IMG"===N.firstElementChild.tagName,"a"!=W)N.innerHTML=v.tmpl(w,{
imageUrl:a(T),
title:a(A),
nickname:a(S.nickname),
avatar:a(S.logo_url)
},!1);else{
if(q){
var L=N.firstChild;
L&&b.addClass(N,"weapp_image_link");
}else b.addClass(N,"weapp_text_link");
N.setAttribute("href","");
}
if(j.resp&&j.resp.weapp_info&&j.resp.weapp_info.length)for(var M=0;M<j.resp.weapp_info.length;M++){
var U=N.getElementsByClassName("guarantee_icon")[0];
if(j.resp.weapp_info[M].weapp_appid===k&&1===j.resp.weapp_info[M].has_guarantee_flag){
U&&b.addClass(U,"show");
break;
}
}
y.on(N,"tap",function(){
if(m=function(){
var e=q?1:"a"==W?2:0;
return I.jumpUrl({
sceneNote:encodeURIComponent(location.href)+":"+window.biz,
appid:k,
path:K,
scene:window.__weapp_scene__||1058,
beforeNonWechatWarn:function(){
d(k,s,S.nickname,A,e);
},
beforeJumpBackupPage:function(){
r(k,s,S.nickname,A,e);
},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",102),
t(107,new Error(e.err_msg),"");
}
}),window.__addIdKeyReport&&window.__addIdKeyReport("28307",100),n(k,s,S.nickname,A,3,e,q?2:0),
q&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",115),!1;
},q&&C.report([2,1,"",img_popup?1:0,window.source,k]),(q||b.hasClass(N,"weapp_text_link")&&(o(N)||i(N)))&&img_popup){
document.getElementById("js_minipro_dialog_head").innerText="即将打开小程序",document.getElementById("js_minipro_dialog_body").innerText=S.nickname;
var p=document.getElementById("js_minipro_dialog");
return p.style.display="block",document.querySelector("body").addEventListener("touchmove",e,{
passive:!1
}),p._appid=k,p._i=s,p._nickname=S.nickname,p._title=A,n(k,s,S.nickname,A,3,1,0),
I.canJumpOnTap&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",114),!1;
}
return m();
},"a"==W),y.on(N,"click",function(e){
e.preventDefault(),e.stopPropagation();
},"a"==W),h&&(y.on(N,"mouseenter",function(){
function e(e){
function t(){
if(!l&&c===s){
E.style.display="block",l=!0;
var e=E.offsetHeight,t=E.offsetWidth;
"a"!=W||q?n>t?(f(E,"right-center"),E.style.left=n-t-m+"px",E.style.top=o+"px"):(f(E),
E.style.top=o+d-e-m+"px",E.style.left=n+r-t-m+"px"):(E.style.left=i>n+r/2-t/2?i+"px":n+r/2+t/2>i+p?i+p-t+"px":n+r/2-t/2+"px",
a>e?(f(E,"down-center"),E.style.top=o-e-m+"px"):(f(E,"up-center"),E.style.top=o+d-m+"px"));
}
}
if(e){
var n=u(N),o=_(q?N.firstElementChild:N),i=u(N.parentNode),p=N.parentNode.offsetWidth,a=N.getBoundingClientRect().top,r=q?N.firstElementChild.offsetWidth:N.offsetWidth,d=q?N.firstElementChild.offsetHeight:N.offsetHeight,m=8,l=!1;
R.innerText=g(S.nickname,48),z.onload=t,z.src=e,(z.complete||z.width)&&t();
}
}
clearTimeout(l),c!==s&&(E.style.display="none",c=s,I.getAppidCode({
appid:k,
path:K
},e));
}),y.on(N,"mouseleave",function(){
p(E);
}));
})(s);
var K=null,T=function(){
K=null;
for(var e=0;e<A.length;e++){
var t=A[e].elem,o=t.tagName.toLowerCase(),i=t.firstChild&&1==t.firstChild.nodeType,p=i?1:"a"==o?2:0,a=A[e].elem.getBoundingClientRect();
if(a.top<k.getInnerHeight()&&a.bottom>0){
setTimeout(function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307",101);
},0);
var r=A[e].appid;
r&&x[r]&&x[r].nickname&&n(r,e,x[r].nickname,A[e].title,2,p),A.splice(e--,1);
}
}
};
T(),y.on(window,"scroll",function(){
K||(K=setTimeout(T,100));
});
},
onError:function(e){
3==e.code&&t(106,e.catchErr,"parsing weapp info error");
}
});
}
function m(){
for(var e=0,t=0;t<R.length+z.length;t++){
var n=t<R.length,o=n?R[t]:z[t-R.length],i=o.getAttribute(n?"data-miniprogram-appid":"data-weapp-appid")||"",p=o.getAttribute(n?"data-miniprogram-path":"data-weapp-path")||"",a=o.getAttribute(n?"data-miniprogram-imageUrl":"data-weapp-imageUrl")||"",r=o.getAttribute(n?"data-miniprogram-title":"data-weapp-title")||"",d=document.createElement("span");
o.setAttribute("class",""),d.setAttribute("class","weapp_display_element js_weapp_display_element"),
B.push({
appid:i,
path:p,
imageUrl:a,
title:r,
elem:d
}),A.push({
appid:i,
elem:d,
title:r
}),o.parentNode.insertBefore(d,o.nextSibling),l(a)||e++;
}
for(var t=0;t<x.length;t++){
var s=x[t];
B.push({
appid:s.getAttribute("data-miniprogram-appid"),
path:s.getAttribute("data-miniprogram-path")||"",
elem:s
});
}
e>0&&E.setSum(64469,33,e);
}
function l(e){
for(var t,n=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i],o=0;t=n[o++];)if(t.test(e))return!0;
return!1;
}
function c(e){
return document.getElementById(e);
}
function u(e){
for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;
return t;
}
function _(e){
for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;
return t;
}
function f(e,t){
for(var n=0;3>n;n++)b.removeClass(e,"weui-desktop-popover_pos-up-"+N[n]),b.removeClass(e,"weui-desktop-popover_pos-down-"+N[n]),
b.removeClass(e,"weui-desktop-popover_pos-left-"+S[n]),b.removeClass(e,"weui-desktop-popover_pos-right-"+S[n]);
b.removeClass(e,"weui-desktop-popover_hide-arrow"),t?b.addClass(e,"weui-desktop-popover_pos-"+t):b.addClass(e,"weui-desktop-popover_hide-arrow");
}
function g(e,t){
var n=/[^\x00-\xff]/g;
if(e.replace(n,"**").length>t)for(var o=Math.floor(t/2),i=o,p=e.length;p>i;i++)if(e.substring(0,i).replace(n,"**").length>=t)return e.substring(0,i)+"...";
return e;
}
e("biz_common/utils/string/html.js");
var w=e("pages/weapp_tpl.html.js"),h=e("biz_wap/utils/ajax.js"),y=e("biz_common/dom/event.js"),v=e("biz_common/tmpl.js"),b=e("biz_common/dom/class.js"),j=e("biz_wap/utils/device.js"),I=e("appmsg/weapp_common.js"),k=e("common/utils.js"),C=(e("biz_wap/utils/mmversion.js"),
e("biz_common/base64.js"),e("appmsg/popup_report.js")),E=e("biz_wap/utils/jsmonitor_report.js"),z=null,R=null,x=null,K={},B=[],T=I.appidSnInfo,A=[];
if(p()){
m(),s();
var N=["left","center","right"],S=["top","center","bottom"];
return K;
}
});define("appmsg/weproduct.js",["appmsg/weapp_common.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/jsmonitor_report.js","common/utils.js"],function(t){
"use strict";
function e(){
if(console.log("weproduct init"),"function"==typeof document.getElementsByClassName){
var t=document.getElementsByClassName("js_product_container");
t&&t.length>0&&(a(t),d.getAppidInfo({
onSuccess:function(e){
g.data=e.data,o(t);
}
})),r();
}
}
function a(t){
try{
for(var e=0,a=t.length;a>e;e++){
var o=t[e];
if(o.className.indexOf("js_list_container")>=0){
var i=o.querySelector("img.js_cover");
if(i){
var r=i.parentNode.getBoundingClientRect();
i.style.setProperty("width",r.width+"px","important"),i.style.setProperty("height",r.height+"px","important"),
i.style.setProperty("background-size","unset","important"),"0"==i.getAttribute("data-fail")?n.call(i):i.getAttribute("data-fail")||(i.lazyLoadOnload=i.lazyLoadOnload||[],
i.lazyLoadOnload.push(n));
}
}
}
}catch(p){}
}
function n(){
var t=this.parentNode;
if(t){
var e=document.createElement("span");
e.className=this.className,e.style.background='url("'+this.src+'") no-repeat center',
t.insertBefore(e,this),t.removeChild(this);
}
}
function o(t){
for(var e=0,a=t.length;a>e;e++)!function(t,e){
s.on(t,"tap",".js_product_loop_content",function(t){
var a=t.delegatedTarget,n=a.getAttribute("data-wxaappid"),o=a.getAttribute("data-wxapath"),i=a.getAttribute("data-pid"),r=a.getAttribute("data-appid");
return d.jumpUrl({
privateExtraData:{
cookies:"cps_package=123456; expires=1538286412; busid=mmbiz_ad_cps; domain=*"
},
sourceAppId:r,
appid:n,
path:o,
scene:1091,
sceneNote:encodeURIComponent(location.href)+":"+encodeURIComponent(i),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(t){
if("openWeApp:ok"===t.err_msg&&i){
var o=a.getAttribute("data-pidtype"),r=2;
2==o&&(r=4),p([{
wxa_appid:n,
pid:i,
type:r,
absolute_order:e+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
}]);
}
}
}),!1;
});
}(t[e],e);
var n=document.getElementsByClassName("js_product_loop_content");
if(n&&n.length>0&&m.getInnerHeight()){
for(var e=0;e<n.length;e++)g.pvele.push(n[e]);
i(),s.on(window,"scroll",i);
}
}
function i(){
g.checkInScreenId&&clearTimeout(g.checkInScreenId),g.checkInScreenId=setTimeout(function(){
g.checkInScreenId=null;
for(var t=[],e=0;e<g.pvele.length;e++){
var a=g.pvele[e],n=a.getBoundingClientRect(),o=n.height||n.bottom-n.top;
if(o>0&&n.top<m.getInnerHeight()&&n.bottom>0){
var r=a.getAttribute("data-pid");
if(r){
var d=a.getAttribute("data-pidtype"),c=1;
2==d&&(c=3),t.push({
wxa_appid:a.getAttribute("data-wxaappid"),
pid:r,
type:c,
absolute_order:e+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
});
}
g.pvele.splice(e--,1);
}
}
p(t),0==g.pvele.length&&(s.off(window,"scroll",i),i=null);
},100);
}
function r(){
setTimeout(function(){
var t=document.getElementsByClassName("js_product_loop_content").length,e=document.getElementsByClassName("js_product_err_container").length;
u.setSum("64469","15",t+e),u.setSum("64469","16",t),u.setSum("64469","18",e);
},0);
}
function p(t){
if(t&&0!=t.length){
for(var e={
batch_no:l.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:t.length
},a=0;a<t.length;a++){
var n=t[a],o=a+1;
for(var i in n)n.hasOwnProperty(i)&&(e[i+""+o]=n[i]);
}
c({
url:"/mp/productreport?",
type:"POST",
data:e,
dataType:"json",
async:!0
});
}
}
var d=t("appmsg/weapp_common.js"),s=t("biz_common/dom/event.js"),c=t("biz_wap/utils/ajax.js"),l=t("biz_common/utils/url/parse.js"),u=t("biz_wap/utils/jsmonitor_report.js"),m=t("common/utils.js"),g={
pvele:[],
checkInScreenId:null,
reportRandom:Math.random()
};
e();
});define("appmsg/voicemsg.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js","pages/voice_component.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var i=e("biz_wap/jsapi/core.js"),t=e("biz_wap/utils/ajax.js"),o=e("pages/voice_component.js"),a=document.getElementById("js_read_container"),n={
player:null,
srcId:"__wxtag__"+window.biz+"-"+window.mid+"-"+window.idx,
mediaId:"",
tag:"===mediaId-sep===",
playDuration:0,
playTime:0,
maxNum:5,
curNum:0,
format:"",
type:6,
speed:100,
voiceInfo:{
title:"",
nickname:"",
appmsgUrl:"",
duration:0
},
voiceOpt:null,
lock:!1,
status:"stop",
currentTime:0,
beginTime:0,
leaveNeedReport:!1,
pause2PlayNeedReport:!1,
isSeek:!1,
loadingTimer:null
},s=function(e){
return e+"&uin="+window.uin+"&key="+window.key+"&pass_ticket="+encodeURIComponent(window.pass_ticket);
},r=function(e){
return e||null===n.loadingTimer?void i.invoke("handleMPPageAction",{
action:"showToast",
status:e?"loading":"dismissloading"
}):(clearTimeout(n.loadingTimer),void(n.loadingTimer=null));
},d=function m(){
if(n.curNum>10)return r(!1),n.lock=!1,void weui.alert("System busy. Try again later.");
n.curNum++;
var e=n.curNum>n.maxNum?5e3:1e3;
t({
url:"/mp/msgvoice?action=getvoiceinfo&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&type="+n.type+"&speed="+n.speed,
type:"GET",
dataType:"json",
async:!0,
success:function(i){
if(i&&i.base_resp&&0===i.base_resp.ret)if(i.mediaid){
n.mediaId=i.mediaid;
var t=encodeURIComponent("__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx),o=n.voiceInfo;
n.voiceOpt={
protocol:2===i.format?"hls":"",
src:s("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&mediaid="+i.mediaid+"&devicetype="+window.devicetype+"&_type="+n.type+"&speed="+n.speed+"&encodeurl="+t),
lowbandUrl:s("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&mediaid="+i.mediaid+"&devicetype="+window.devicetype+"&_type="+n.type+"&speed="+n.speed+"&encodeurl="+t),
title:o.title,
epname:"Source Article",
singer:o.nickname?"的语音":"Official Account audio",
srcId:n.srcId+n.tag+n.mediaId,
coverImgUrl:"",
webUrl:o.appmsgUrl,
musicbar_url:"https://mp.weixin.qq.com/mp/msgvoice?action=ttspage&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&type="+n.type+"#wechat_redirect",
needStartMusicUI:0
},c();
}else setTimeout(m,1e3);else console.log("getvoiceinfo err",i),setTimeout(m,e);
},
error:function(i){
console.log("getvoiceinfo err",i),setTimeout(m,e);
}
});
},c=function(){
n.player=o.init({
protocal:"hls",
wxIndex:n.voiceOpt.srcId,
type:7,
comment_id:"",
src:n.voiceOpt.src,
jsapi2Src:n.voiceOpt.src+"&voice_type=1",
allowPause:!0,
duration:n.voiceInfo.duration,
title:n.voiceOpt.title,
singer:n.voiceOpt.singer,
epname:n.voiceOpt.epname,
coverImgUrl:n.voiceOpt.coverImgUrl,
playingCss:"share_audio_playing",
playCssDom:a.getElementsByClassName("js_read_main")[0],
playArea:a.getElementsByClassName("js_read_play")[0],
progress:a.getElementsByClassName("js_read_progress")[0],
fileSize:0,
playtimeDom:a.getElementsByClassName("js_read_playtime")[0],
bufferDom:a.getElementsByClassName("js_read_buffer")[0],
playdotDom:a.getElementsByClassName("js_read_playdot")[0],
seekRange:a.getElementsByClassName("js_read_seekRange")[0],
seekContainer:a.getElementsByClassName("js_read_main")[0],
loadingDom:a.getElementsByClassName("js_read_loading")[0],
detailArea:"",
detailUrl:n.voiceOpt.musicbar_url,
webUrl:n.voiceOpt.musicbar_url
});
};
t({
url:"/mp/msgvoice?action=ttspage&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&type="+n.type+"&f=json",
type:"GET",
dataType:"json",
async:!0,
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret?(n.voiceInfo={
title:e.title,
nickname:e.nickname,
appmsgUrl:e.appmsg_url,
duration:1*e.voice_info.duration
},d(),a.getElementsByClassName("js_read_duration")[0].innerHTML=function(e){
var i=function(e){
return e>=10?e:"0"+e;
};
return i(Math.floor(e/60))+":"+i(e%60);
}(1*e.voice_info.duration)):weui.alert("System busy. Try again later.");
},
error:function(e){
console.log("ttspage err: ",e),weui.alert("网络不可用，请检查网络设置");
}
});
});define("appmsg/autoread.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","pages/voice_tpl.html.js","pages/voice_component.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function i(){
var e=d("autoread");
e&&(e.innerHTML='<p><label>朗读类型：</label>                                <select id="autoreadSelect">                                <option selected="true" value="0">女1</option>                                <option value="1">女2</option>                                <option value="2">男1</option>                                <option value="6">男2</option>                                </select></p><p id="autoread_voice"></p>',
u.on(d("autoreadSelect"),"change",function(){
p.player&&(p.player.destory(),p.player=null),p.checkAudioId&&(clearTimeout(p.checkAudioId),
p.checkAudioId=null);
var e=d("autoreadSelect");
d("autoread_voice").innerHTML="",o(e.value);
}),o(0));
}
function o(e){
var i=d("autoread_voice");
p._oMusic={
voiceid:p.voiceid,
duration_str:"",
posIndex:p.posIndex,
title:"文章朗读体验（"+p.voiceType[e||0]+"）",
nickname:window.nickname||"公众号"
},s.renderPlayer(r,p._oMusic,i,!0),d("voice_author_"+p.key).innerHTML="来自"+p._oMusic.nickname+"（创建音频中）",
c(e);
}
function n(e,i){
var o=p._oMusic;
d("voice_author_"+p.key).innerHTML="来自"+o.nickname,d("voice_duration_"+p.key).innerHTML=s.formatTime(1*i),
p.player=s.init({
protocal:"hls",
wxIndex:o.posIndex,
type:2,
songId:e,
src:a("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&media="+e),
allowPause:!0,
autoPlay:!0,
duration:i,
title:o.title,
singer:o.nickname?o.nickname+"'s audio":"Official Account audio",
epname:"Source Article",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:d("voice_main_"+p.key),
playArea:d("voice_play_"+p.key),
progress:d("voice_progress_"+p.key),
fileSize:o.fileSize,
playtimeDom:d("voice_playtime_"+p.key),
bufferDom:d("voice_buffer_"+p.key),
playdotDom:d("voice_playdot_"+p.key),
seekRange:d("voice_seekRange_"+p.key),
seekContainer:d("voice_main_"+p.key),
loadingDom:d("voice_loading_"+p.key)
});
}
function t(e){
p.curNum+=1;
var i=1e3;
p.curNum>p.maxNum&&(i=2e3);
var o=["/mp/msgvoice?action=get_media&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&type=",e||0].join("");
m({
url:o,
type:"GET",
dataType:"json",
async:!0,
success:function(o){
o.mediaid&&o.duration?n(o.mediaid,o.duration):p.checkAudioId=setTimeout(function(){
t(e);
},i);
},
error:function(){
p.checkAudioId=setTimeout(function(){
t(e);
},i);
}
});
}
function a(e){
return e+=["&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&uin=",window.uin||"","&key=",window.key||"","&pass_ticket=",window.pass_ticket||"","&clientversion=",window.clientversion||"","&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join("");
}
function c(e){
p.curNum=0;
var i=["/mp/msgvoice?action=tts&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&type=",e||0].join("");
m({
url:i,
type:"GET",
dataType:"json",
async:!0,
success:function(i){
i&&i.base_resp&&0==i.base_resp.ret?t(e):d("voice_author_"+p.key).innerHTML="来自"+window.nickname+"（失败）";
},
error:function(){
d("voice_author_"+p.key).innerHTML="来自"+window.nickname+"（失败）";
}
});
}
function d(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var u=e("biz_common/dom/event.js"),r=e("pages/voice_tpl.html.js"),s=e("pages/voice_component.js"),m=e("biz_wap/utils/ajax.js"),p={
checkId:"",
voiceid:"autoread",
posIndex:0,
key:"autoread_0",
voiceType:{
0:"女1",
1:"女2",
2:"男1",
6:"男2"
},
maxNum:5,
curNum:0
};
i();
});var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);
}
return t;
};
define("appmsg/poi/poi.js",["biz_common/utils/string/html.js","appmsg/poi/poi_tpl.html.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","common/utils.js","pages/player_tips.js","biz_wap/utils/mmversion.js","common/comm_report.js","biz_wap/utils/jsmonitor_report.js","biz_common/base64.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var e=t("appmsg/poi/poi_tpl.html.js"),o=t("biz_common/dom/event.js"),n=t("biz_wap/jsapi/core.js"),i=t("biz_common/tmpl.js"),a=t("common/utils.js"),r=t("pages/player_tips.js"),d=t("biz_wap/utils/mmversion.js"),s=t("common/comm_report.js"),m=t("biz_wap/utils/jsmonitor_report.js"),p=t("biz_common/base64.js"),c={
tagName:"mppoi",
isWechat:(d.isAndroid||d.isIOS)&&d.isWechat&&!d.isWxwork,
screen_height:a.getInnerHeight(),
commonReportData:{
bizuin:1*p.decode(window.biz),
msgid:1*window.mid,
itemidx:1*window.idx,
sessionidnew:window.sessionid,
enterid:1*window.enterid
},
poiDom:[]
},u=function(){
return document.documentElement.scrollTop||document.body.scrollTop;
},l=function(t){
c.isWechat?n.invoke("openLocation",{
latitude:1*t.latitude,
longitude:1*t.longitude,
name:t.name,
address:t.address,
infoUrl:""
},function(t){
-1!==t.err_msg.indexOf("ok")?m.setSum(110809,53,1):m.setSum(110809,54,1);
}):new r({
msg:"请使用移动端微信打开。"
});
},g=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.dom,n=t.poiInfo;
o.on(e,"tap",function(t){
t.stopPropagation(),t.preventDefault(),s.report(19937,_extends({},c.commonReportData,{
type:2,
actiontype:2
})),m.setSum(110809,55,1),l(n);
},!0),o.on(e,"click",function(t){
t.preventDefault(),t.stopPropagation();
},!0);
},f=function(){
for(var t=0;t<c.poiDom.length;t++){
var e=c.poiDom[t];
if(1*e.getAttribute("data-hasreport")!==1){
e.setAttribute("data-hasreport",1);
var o=u();
e.clientHeight+e.offsetTop>=o+e.clientHeight/2&&e.clientHeight+e.offsetTop<=o+e.clientHeight/2+c.screen_height&&("A"===e.tagName?(s.report(19937,_extends({},c.commonReportData,{
type:1,
actiontype:1
})),m.setSum(110809,58,1)):(s.report(19937,_extends({},c.commonReportData,{
type:2,
actiontype:1
})),m.setSum(110809,56,1)));
}
}
};
o.on(window,"scroll",f);
var b=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.node&&t.data&&t.data.img&&!function(){
var o=function(t){
var o=t.node,n=t.data;
return function(){
var t=document.createElement("div");
t.innerHTML=i.tmpl(e,{
data:n
},!0).replace(/>\s*</g,"><").replace(/^\s+/,"").replace(/\s+$/,"");
var a=t.firstChild;
o.parentNode.insertBefore(a,o.nextSibling);
var r=o.parentNode.querySelector('[data-preloadingid="'+n.id+'"]');
r&&r.parentNode.removeChild(r),g({
dom:a,
poiInfo:n
}),c.poiDom.push(a),f();
};
}(t),n=function(){
this.onload=null,this.onerror=null,o();
},a=new Image;
a.onload=n,a.onerror=n,a.src=t.data.img;
}();
},v=function(){
for(var t=document.querySelectorAll(c.tagName),e=0,n=t.length;n>e;e++){
var i=t[e],a={
id:decodeURIComponent(i.getAttribute("data-id")||""),
name:decodeURIComponent(i.getAttribute("data-name")||""),
address:decodeURIComponent(i.getAttribute("data-address")||""),
img:decodeURIComponent(i.getAttribute("data-img")||""),
longitude:decodeURIComponent(i.getAttribute("data-longitude")||""),
latitude:decodeURIComponent(i.getAttribute("data-latitude")||""),
type:decodeURIComponent(i.getAttribute("data-type")||"")
};
b({
data:a,
node:i
});
}
for(var r=document.getElementsByClassName("js_poi_entry"),d=0;d<r.length;d++)!function(t){
var e=r[t];
c.poiDom.push(e),o.on(e,"tap",function(t){
t.stopPropagation(),t.preventDefault();
var o={
id:decodeURIComponent(e.getAttribute("data-id")||""),
name:decodeURIComponent(e.getAttribute("data-name")||""),
address:decodeURIComponent(e.getAttribute("data-address")||""),
img:decodeURIComponent(e.getAttribute("data-img")||""),
longitude:decodeURIComponent(e.getAttribute("data-longitude")||""),
latitude:decodeURIComponent(e.getAttribute("data-latitude")||""),
type:decodeURIComponent(e.getAttribute("data-type")||"")
};
return o.longitude&&o.latitude&&o.name&&o.address&&(s.report(19937,_extends({},c.commonReportData,{
type:1,
actiontype:2
})),m.setSum(110809,57,1),l(o)),!1;
},!0),o.on(e,"click",function(t){
t.preventDefault(),t.stopPropagation();
},!0);
}(d);
f();
};
v();
});