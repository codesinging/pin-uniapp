"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const message = common_vendor.ref("hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(message.value)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/pages/cart.vue"]]);
wx.createPage(MiniProgramPage);
