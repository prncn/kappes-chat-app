var hoxy = require("hoxyws");
var proxy = hoxy.createServer().listen(3002, () => {
  console.log("Proxy running");
});
proxy.intercept(
  {
    phase: "response",
    as: "$",
  },
  function (req, resp) {
    console.log(resp._data.headers.date);
    resp.$("title").text("Unicorns!");
  }
);
