"use strict";
var common_vendor = require("../common/vendor.js");
var store_auth = require("../store/auth.js");
require("../common/utils/persist.js");
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const auth = store_auth.useAuth();
    const login = () => auth.setToken("token_value");
    const logout = () => auth.clear();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(auth).token),
        b: common_vendor.t(common_vendor.unref(auth).isLogin),
        c: common_vendor.o(login),
        d: common_vendor.o(logout)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/pages/mine.vue"]]);
wx.createPage(MiniProgramPage);
