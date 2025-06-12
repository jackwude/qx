#!name=jparking_sign
#!desc=jparking_sign
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1014.png

[Script]
http-request ^https:\/\/sytgate\.jslife\.com\.cn\/core-gateway\/order\/carno\/pay\/info script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jparking_sign.js, requires-body=true, tag=获取捷停车userId

[MITM]
hostname = sytgate.jslife.com.cn
