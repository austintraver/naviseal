module.exports = {
    sourceDir: "src",
    artifactsDir: "firefox",
    ignoreFiles: [],
    run: {
        startUrl: ['www.google.com']
    },
    build: {
        overwriteDest: false,
    },
    sign: {
        id: '{2a3c73f9-7877-4b44-939e-f55dd85be49d}',
        channel: 'listed'
    }
}
