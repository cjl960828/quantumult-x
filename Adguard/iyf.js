/*
^https:\/\/api\.iyf\.tv\/api\/Video\/GetAdsDataList\?typeList url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js

hostname = api.iyf.tv
*/


anye = JSON.parse($response.body);
    anye.data.bofang[0].showURL = "";
    anye.data.bofang[0].piDuration = 0;
    anye.data.bofang[0].chaBo = [];
$done({body: JSON.stringify(anye)});