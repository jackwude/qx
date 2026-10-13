/*
ZK助手：只把 queryConfig 返回里的 data.Ad 改成 0。其它字段不动。
*/
(function () {
  var body = $response.body;
  if (typeof body !== "string") {
    try { body = new TextDecoder("utf-8").decode(body); } catch (e) { $done({}); return; }
  }
  try {
    var obj = JSON.parse(body);
    if (obj && obj.data && obj.data.Ad != null) {
      obj.data.Ad = "0";
      body = JSON.stringify(obj);
    }
  } catch (e) {}
  $done({ body: body });
})();
