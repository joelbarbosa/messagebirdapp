module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import",
      "jest"
    ],
    "globals": {
      "document": true,
      "window": true
    },
    "rules": {
      "max-len": ["error", 80],
      "import/extensions": ["off"],
      "eslint-plugin-import": ["off", "never"],
      "import/prefer-default-export": ["off", "never"],
      "react/jsx-filename-extension": ["off", "never"],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
      "react/prop-types": 0,
      "arrow-body-style": 0,
      "indent": [2, 2],
      "react/jsx-indent": [2, 2],
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "no-unused-vars": "off"
    },
};
