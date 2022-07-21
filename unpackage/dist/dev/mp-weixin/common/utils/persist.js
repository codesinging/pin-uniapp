"use strict";
var common_vendor = require("../vendor.js");
const prefix = "pin_persist__";
const prefixedKey = (key) => prefix + key;
const set = (key, value) => {
  common_vendor.index.setStorageSync(prefixedKey(key), value);
  return value;
};
const get = (key, def = null) => common_vendor.index.getStorageSync(prefixedKey(key)) || def;
const remove = (key) => {
  common_vendor.index.removeStorageSync(prefixedKey(key));
  return null;
};
var persist = {
  prefix,
  prefixedKey,
  set,
  get,
  remove
};
exports.persist = persist;
