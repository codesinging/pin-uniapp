"use strict";
var common_vendor = require("../common/vendor.js");
var store_status = require("../store/status.js");
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const status = store_status.useStatus();
    const load = () => status.set("loading");
    const stop = () => status.unset("loading");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(status).status.loading),
        b: common_vendor.o(load),
        c: common_vendor.o(stop)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/pages/mine.vue"]]);
wx.createPage(MiniProgramPage);
