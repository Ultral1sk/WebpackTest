//**** Installing other loaders (css, style) ****//

If we want to use other stuff inside webpack we need to install them and bring them manually into webpack.config.js
For example if we want to use css inside the webpack config module 

module.exports = {
      mode : "development",
      entry: "./src/index.js",
      output: {
            filename : "main.js",
            path: path.resolve(__dirname, "dist")

      },
      module : {                                               <----- css loader
            rules: [    
                  { 
                        test: /\.css$/,                           
                        use: ["style-loader", "css-loader"]
                        }       
                ]
      }                                                        <----- css loader
};

But the css loader only converts the css code into valid js string code only.
If we want the css code to be implemented in our weebpack we need to add the style loader also
Style loader will take the css code that was convetted into JS string from the css loader and inject it into the DOM and we need to be carefull when adding the "style-loader" it should come before "css-loader" for ex : use: ["style-loader", "css-loader"]
