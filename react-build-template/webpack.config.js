var path = require('path');

module.exports = {
    entry: {
        app: "./src/app/app.js",
        lib: "./src/app/lib.js",
    },

    output: {
        path: path.resolve('./public/js'),
        filename: "[name].js"
    },

    resolve: {
        alias: {
            "lib": path.resolve('./src/lib'),
            "conf": path.resolve('./src/conf'),
            "components": path.resolve('./src/components'),
            "bower_components": path.resolve('./src/bower_components'),
            "jquery": "bower_components/jquery/dist/jquery.js",
            // // for amd; bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js
            "moment": "bower_components/moment/moment.js",
            // "randomColor": "bower_components/randomColor/randomColor.js"
        }
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query:
              {
                presets:['react','es2015']
              }
        }]
    }
};