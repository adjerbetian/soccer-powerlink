module.exports = {
    extends: ["react-app"],
    rules: {},
    overrides: [
        {
            files: ["cypress/**/*.tsx"],
            plugins: ["cypress"],
        },
    ],
};
