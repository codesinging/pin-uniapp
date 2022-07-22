"use strict";
require("../vendor.js");
const page = (delta = 1) => {
  const pages = getCurrentPages();
  return pages[pages.length - delta];
};
exports.page = page;
