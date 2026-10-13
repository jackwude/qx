/*
ZK助手抓包：只记广告平台和业务域名，跳过官网 zktools.net。不改响应。
*/
(function () {
  var url = ($request && $request.url) || "";
  var host = "";
  try { host = (url.split("/")[2] || "").toLowerCase(); } catch (e) { host = ""; }
  if (!host || host === "zktools.net" || host.endsWith(".zktools.net")) {
    $done({});
    return;
  }
  var path = url.split("?")[0];
  var key = "zk_ad_log";
  var prev = $persistentStore.read(key) || "";
  var line = host + " " + path;
  if (prev.indexOf(line) === -1) {
    var next = (prev ? prev + "\n" : "") + line;
    if (next.length > 3500) next = next.slice(-3500);
    $persistentStore.write(next, key);
    $notification.post("ZK助手抓包", host, path);
  }
  $done({});
})();
