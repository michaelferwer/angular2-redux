"use strict";
var webpack = require('webpack');
var path = require('path');
var clone = require('js.clone');
var webpackMerge = require('webpack-merge');
exports.commonPlugins = [
    new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)src(\\|\/)linker/, root('./src'), {}),
    // Loader options
    new webpack.LoaderOptionsPlugin({}),
];
exports.commonConfig = {
    // https://webpack.github.io/docs/configuration.html#devtool
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [root('node_modules')]
    },
    context: __dirname,
    output: {
        publicPath: '',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            // TypeScript
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.html$/, loaders: 'raw-loader' },
            { test: /\.css$/, loaders: 'raw-loader' },
            { test: /\.json$/, loaders: 'json-loader' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loaders: 'file?name=assets/[name].[hash].[ext]' },
        ],
    },
    plugins: []
};
// Client.
exports.clientPlugins = [];
exports.clientConfig = {
    target: 'web',
    entry: './src/client',
    output: {
        path: root('dist/client')
    },
    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    }
};
// Server.
exports.serverPlugins = [];
exports.serverConfig = {
    target: 'node',
    entry: './src/server',
    output: {
        filename: 'index.js',
        path: root('dist/server'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            { test: /@angular(\\|\/)material/, use: "imports-loader?window=>global" }
        ],
    },
    externals: includeClientPackages(/@angularclass|@angular|angular2-|ng2-|ng-|@ng-|angular-|@ngrx|ngrx-|@angular2|ionic|@ionic|-angular2|-ng2|-ng/),
    node: {
        global: true,
        crypto: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    // Client
    webpackMerge(clone(exports.commonConfig), exports.clientConfig, { plugins: exports.clientPlugins.concat(exports.commonPlugins) }),
];
// Helpers
function includeClientPackages(packages, localModule) {
    return function (context, request, cb) {
        if (localModule instanceof RegExp && localModule.test(request)) {
            return cb();
        }
        if (packages instanceof RegExp && packages.test(request)) {
            return cb();
        }
        if (Array.isArray(packages) && packages.indexOf(request) !== -1) {
            return cb();
        }
        if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
            return cb(null, 'commonjs ' + request);
        }
        return cb();
    };
}
exports.includeClientPackages = includeClientPackages;
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
exports.root = root;
//# sourceMappingURL=webpack.common.js.map