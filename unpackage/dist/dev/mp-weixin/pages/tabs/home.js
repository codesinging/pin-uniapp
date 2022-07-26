"use strict";
var store_auth = require("../../store/auth.js");
var common_vendor = require("../../common/vendor.js");
require("../../common/utils/persist.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    store_auth.useAuth();
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/pages/tabs/home.vue"]]);
wx.createPage(MiniProgramPage);
