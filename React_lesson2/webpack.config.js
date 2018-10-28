'use strict';

const path = require( 'path' );


module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'app', 'App.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
