"use strict";
var common_vendor = require("../common/vendor.js");
const useStatus = common_vendor.defineStore("status", {
  state: () => ({
    status: {}
  }),
  getters: {
    get: (state) => {
      return (...keys) => !!state.status[keys.join("_")];
    },
    any: (state) => {
      return (...labels) => labels.map((label) => state.status[label]).every((status) => !!status);
    }
  },
  actions: {
    set(...keys) {
      this.status[keys.join("_")] = true;
    },
    unset(...keys) {
      this.status[keys.join("_")] = false;
    }
  }
});
exports.useStatus = useStatus;
