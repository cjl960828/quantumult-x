/***
@anyeyey
@ios151

小蓝视频网址:https://p4.gv009.fun/
***/

[rewrite_local]
https?:\/\/[\w.]+\/videos3\/[a-f0-9]+\/[a-f0-9]+\.m3u8 url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/m3u8/m3u8.js


[mitm]
hostname = *.xgfipub.cn