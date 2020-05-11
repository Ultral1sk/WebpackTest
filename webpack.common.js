const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
      entry: "./src/index.js",
      plugins: [new HtmlWebpackPlugin({
            template: "./src/template.html"
      })] ,
      module : {
            rules: [
            {
                  test: /\.scss$/, 
                  use: [
                        "style-loader", 
                        "css-loader", 
                        "sass-loader"
                  ]
            },
            {
                  test: /\.html$/,
                  use: 'html-loader',
           
            },
            {
                  test: /\.(svg|png|jpe?g|gif)$/i,
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]',
                        },
            }
                ]
      }
};