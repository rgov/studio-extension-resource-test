module.exports = {
    webpack: (config) => {
        // Tell Webpack the base URL from which to load assets
        config.output.publicPath = "x-foxglove-extension-rsrc://unknown.studio-extension-resource-test/dist/";

        // Allow loading .png files
        // https://webpack.js.org/guides/asset-management/
        config.module.rules.push({
            test: /\.png$/i,
            type: "asset/resource",
        });

        return config;
    },
};
