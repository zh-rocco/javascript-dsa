module.exports = {
  extends: ["standard"],
  plugins: ["jest"],
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
