"use strict";
var common_vendor = require("../common/vendor.js");
var store_auth = require("../store/auth.js");
require("../common/utils/persist.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const auth = store_auth.useAuth();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(auth).token)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/pages/home.vue"]]);
wx.createPage(MiniProgramPage);
