//**** webpack.config.js ****//

If we don't have a webpack config and we npm start the program
webpack will just use the package json entry point to run the program.
That is why in webpack.config.js we have some options to configure the webpack dependency when it starts

1 - create file webpack.config.js

module.exports = {
      mode: "development"           development/production 2 options
      entry : "./src/index.js",     what to run when started
      output : {
            filename : "main.js"    the created webpack filename
            path : path.resolve(__dirname, "dist") the folder name
      }

}
