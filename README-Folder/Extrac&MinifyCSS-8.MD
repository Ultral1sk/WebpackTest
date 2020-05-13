npm install --save-dev mini-css-extract-pluginin


const MiniCssExtractPlugin = require('mini-css-extract-plugin');


in production mode add this inside the plugin

 plugins: [  new MiniCssExtractPlugin({filename : "[name].[contentHash].css"}),
             new CleanWebpackPlugin()
       ]


then 
from webpack common remove 

         {
                  test: /\.scss$/, 
                  use: [
                        "style-loader", 
                        "css-loader", 
                        "sass-loader"
                  ]
            },

from rules

and 

add id to webpack.dev

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
            ]
      }

at the end in the webpack.common we add also
this code with some small changes in the use we brring the required package    MiniCssExtractPlugin.loader, 
    module : {
                  rules: [
                        {
                              test: /\.scss$/, 
                              use: [
                                    MiniCssExtractPlugin.loader, 
                                    "css-loader", 
                                    "sass-loader"
                              ]
                        },
                  ]
            }



last step on npm run build
a new css file is created and also a link tag is added into index.js







Our css file right now is not minified if we want to miniffy the file we can use the package
npm install --save-dev optimize-css-assets-webpack-plugin

then

In produciton we require it and we create another object property and that is 

  optimization : {
            minimizer: [
                  new OptimizeCssAssetsPlugin()
            ]
      },
      with this plugin we can overwrite what was there originally so be careful from sideffects