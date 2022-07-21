"use strict";
var common_vendor = require("../common/vendor.js");
var common_utils_persist = require("../common/utils/persist.js");
const useAuth = common_vendor.defineStore("auth", {
  state: () => ({
    user: common_utils_persist.persist.get("user"),
    token: common_utils_persist.persist.get("token")
  }),
  getters: {
    isLogin: (state) => state.user !== null && state.token !== null
  },
  actions: {
    setUser(user) {
      this.user = common_utils_persist.persist.set("user", user);
    },
    updateUser(user) {
      Object.assign(this.user, common_utils_persist.persist.set("user", user));
    },
    setToken(token) {
      this.token = common_utils_persist.persist.set("token", token);
    },
    clear() {
      this.user = common_utils_persist.persist.remove("user");
      this.token = common_utils_persist.persist.remove("token");
    }
  }
});
exports.useAuth = useAuth;
