module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true 
  },
  "extends": "eslint:recommended",
  "overrides": [
      {
          "files": ["webpack.config.dev.js", "webpack.config.prod.js"],
          "env": {
              "browser": true,
              "node": false 
          }
      }
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
  }
}