module.exports = {
    "extends": "airbnb",
    "plugins": ["jest"],
    "rules": {
        // windows linebreaks when not in production environment
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "indent": [2, 4],
        "max-len":[1, 250],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-indent": [1, 4],
        "react/prop-types": 0,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/valid-expect": "error",        
    },
    "env": {
        "jest/globals": true,
        "browser": true
    }
};