/*************************************
项目名称：blued
下载地址：
更新日期：2024-01-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/social\.blued\.cn\/users\/.*\/setting url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
^https:\/\/social\.blued\.cn\/users\/.*\/flash url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
^https:\/\/social\.blued\.cn\/users\/call\/state\?detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
[mitm]
hostname = social.blued.cn
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/social\.blued\.cn\/users\/.*\/setting/;
const vip2 = /^https:\/\/social\.blued\.cn\/users\/.*\/flash/;
const vip3 = /^https:\/\/social\.blued\.cn\/users\?birth_time/;
const vip4 = /^https:\/\/social\.blued\.cn\/users\/call\/state\?detail/;
    if(vip1.test($request.url)){
        //全局私密查看
        anye.data[0].is_global_view_secretly = 1;
        //无痕模式访问
        anye.data[0].is_traceless_access = 1;
        //黑名单数量
        anye.data[0].black_allowed_count = 999999;
    };
    if(vip2.test($request.url)){
        anye.data[0].is_vip = 1;
        anye.data[0].flash_left_times = 9999;
        anye.data[0].stimulate_flash = 1;
        anye.data[0].adms_type = 6;
    };
    if(vip3.test($request.url)){
        anye.data.forEach((item) => {
        item.is_hide_distance = 0;
    })
    };
    if(vip4.test($request.url)){
        anye.data[0].promote_person_num = 99999;
        anye.data[0].pay_count = 9999;
        anye.data[0].free_count = 9999;
        anye.data[0].call_type = 1;
        anye.data[0].call_status = 1
    };
$done({body: JSON.stringify(anye)});