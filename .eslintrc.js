module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  rules: {
    "no-console": "off",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
  },
};
