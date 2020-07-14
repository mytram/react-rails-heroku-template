const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    /^\/((?!app)[\s\S])*$/,
    createProxyMiddleware({
      target: "http://localhost:5001",
      sameOrigin: true
    })
  );
};
