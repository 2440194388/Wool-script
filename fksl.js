/*
软件名称:疯狂森林 
更新时间：2021-05-08 @肥皂
脚本说明：疯狂森林收取果实

随手写的一个小脚本

扫码注册送五块。一个月零撸22。二十提现。没有限制。不需要实名人脸

明眼人一看就知道这是资金盘。所以别去被割了。别充值投资。零撸就行。上车早应该可以撸点。撸不到也不亏。参考阳光果园，上车早的都零撸了一百。投资的都亏了。别充值让我骂你傻逼。。。。

二维码下载地址 https://ae01.alicdn.com/kf/U8d2e615950fc4f9489817a8855f197bcs.jpg
微信扫描打不开网址的用其他扫码软件打开就行了

如果注册方式一不行的话就点注册二

注册二的上级账号为:15894440800

本脚本以学习为主！
使用方法:

点击我的。获取数据

TG电报群: https://t.me/hahaha802



boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


疯狂森林
圈X配置如下，其他软件自行测试
[task_local]
#疯狂森林
50 12 * * * https://raw.githubusercontent.com/age174/-/main/fksl.js, tag=疯狂森林, img-url=https://ae01.alicdn.com/kf/U1d2f24494aa1460286360f8bb0e10210Y.jpg, enabled=true


[rewrite_local]
#疯狂森林
^http://yunshu.haoshi.co/index.php/index/wallet/index url script-request-header https://raw.githubusercontent.com/age174/-/main/fksl.js



#loon
^http://yunshu.haoshi.co/index.php/index/wallet/index script-path=https://raw.githubusercontent.com/age174/-/main/fksl.js, requires-header=true, timeout=10, tag=疯狂森林



#surge

疯狂森林 = type=http-request,pattern=^http://yunshu.haoshi.co/index.php/index/wallet/index,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/fksl.js,script-update-interval=0




[MITM]
hostname = 省略。不需要填写

*/


const $ = new Env('疯狂森林');
let status;
status = (status = ($.getval("fkslstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const fkslbodyArr = [], fkslhdArr = [],fkslurlArr = [],fkslcount = ''
let fkslbody = $.getdata('fkslbody')
let fkslhd = $.getdata('fkslhd')
let fkslurl = $.getdata('fkslurl')
let sdk = '';
!(async () => {
  if (typeof $request !== "undefined") {
    await fkslck()
   
  } else {
  if (process.env.fkslurl && process.env.fkslurl.indexOf('\n') > -1) {
    fkslurlArr.push(process.env.fkslurl.split('\n'))
  } else {
    fkslurlArr.push(process.env.fkslurl.split())
  };
  if (process.env.fkslhd && process.env.fkslhd.indexOf('\n') > -1) {
    fkslhdArr.push(process.env.fkslhd.split('\n'))
  } else {
    fkslhdArr.push(process.env.fkslhd.split())
  };
  if (process.env.fkslbody && process.env.fkslbody.indexOf('\n') > -1) {
    fkslbodyArr.push(process.env.fkslbody.split('\n'))
  } else if(process.env.fkslbody !== undefined) {
    fkslbodyArr.push(process.env.fkslbody.split())
  };
    console.log(`------------- 共${fkslhdArr.length}个账号-------------\n`)
      for (let i = 0; i < fkslhdArr.length; i++) {
        if (fkslhdArr[i]) {
         
          fkslbody = fkslbodyArr[i];
          fkslhd = fkslhdArr[i];
          fkslhd = fkslhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【疯狂森林${$.index}】`)
          //await fkslhhb();
            await fkslsq();
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//疯狂森林数据获取


function fkslck() {
   if ($request.url.indexOf("index/wallet/index") > -1 || $request.url.indexOf("collectFruit") > -1) {
const fkslurl = $request.url
  if(fkslurl)     $.setdata(fkslurl,`fkslurl${status}`)
    $.log(fkslurl)
  const fkslhd = JSON.stringify($request.headers)
        if(fkslhd)    $.setdata(fkslhd,`fkslhd${status}`)
$.log(fkslhd)
   $.msg($.name,"",'疯狂森林'+`${status}` +'获取数据获取成功！')
  }
}


//疯狂森林收取果实     
function fkslsq(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `http://yunshu.haoshi.co/index.php/robot/jiesuan/id/4540`,
        headers : JSON.parse(fkslhd),
        }
      $.post(url, async (err, resp, data) => {
        try {
           
    //const result = JSON.parse(data)
        if(resp.statusCode == 200){
        console.log('\n疯狂森林收取果实回执: '+data.match(/alert(.*?);/)[1])
    
}else{
       console.log('\n疯狂森林收取果实回执:'+data)
}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}






function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
