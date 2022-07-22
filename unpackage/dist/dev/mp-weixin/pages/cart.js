"use strict";
var common_vendor = require("../common/vendor.js");
var store_auth = require("../store/auth.js");
require("../common/utils/persist.js");
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    store_auth.useAuth();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.message)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangrui/projects/pin-uniapp/pages/cart.vue"]]);
wx.createPage(MiniProgramPage);
