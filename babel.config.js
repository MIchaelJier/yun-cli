module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ],
    plugins: [
        // import动态导入语法 s
        "@babel/plugin-syntax-dynamic-import"
    ]
}