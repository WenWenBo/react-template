const { resolve } = require("path");

const ROOT_PATH = resolve(__dirname, '../'); // 根目录

const SRC_PATH = resolve(ROOT_PATH, "./src"); // src目录
const DIST_PATH = resolve(ROOT_PATH, "./dist"); // dist目录
const PUBLIC_PATH = resolve(ROOT_PATH, "./public"); // public目录

module.exports = {
  SRC_PATH,
  DIST_PATH,
  PUBLIC_PATH,
}
