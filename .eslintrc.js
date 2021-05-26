module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": 2,
        "semi": 2,
        "@typescript-eslint/no-var-requires": 0,
    },
    "extends": [
        'plugin:@typescript-eslint/recommended'
    ]
};
