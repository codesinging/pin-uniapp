"use strict";
var common_utils_route = require("../../../../common/utils/route.js");
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    common_vendor.onShow(() => {
      console.log(getCurrentPages());
      console.log(common_utils_route.page());
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/packages/default/pages/auth/login.vue"]]);
wx.createPage(MiniProgramPage);
