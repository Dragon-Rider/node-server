module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": false,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "rules": {
           "indent": [
            2,
            4
        ]
    },
    "globals": {},
};
