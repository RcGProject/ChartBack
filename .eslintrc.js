module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
    "airbnb",
  ],

  plugins: ["prettier"],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    quotes: "off",
    "prettier/prettier": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "max-len": "off",
    "import/order": [
      "off",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "components/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "templates/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "types/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "utils/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
