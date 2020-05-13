const path = require('path');

module.exports = {
    
 
      entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
      },
    
      module : {
            rules: [
   
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