module.exports = {
  "extends": "react-app",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        singleQuote: true,
        arrowParens: "always"
      }
    ],
  }
}