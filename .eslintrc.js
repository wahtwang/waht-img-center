
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
 },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'standard',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules:{
    "no-empty": ["error", { "allowEmptyCatch": true }],
    'react/jsx-max-props-per-line':[2, { "maximum": 2 }],
    'react/jsx-equals-spacing':[2, "never"],
    quotes:[2,"single", { "allowTemplateLiterals": true }]
  },
  overrides: [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires":'off',
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}; 