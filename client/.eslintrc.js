module.exports = {
    "parser": "babel-eslint",
    "rules": {
        "semi": 0,
        "no-console":0,
        "global-require":0,
        "no-mixed-spaces-and-tabs":0
    },
    "env": {
        "es6": true,
        "amd":true,
        "commonjs":true,
        "browser": true,
        "jquery": true
    },
    "globals": {
    },
    "plugins": [
        "react"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "extends": "eslint:recommended"
};