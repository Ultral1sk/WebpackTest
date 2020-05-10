// **** Cache Busting and Plugins **** //

Browsers have the ability to cache stuff so whenever they are the same name they m8 not show the latest version of that file with the same name even though somethings m8 have changed inside the file.
That is why whenever we deploy something OR we update we want to use something that is unique so the browser recognises and doesn't cache it. For that we use   content has and on every npm start itll create a new hashed name file version

   output: {
            filename : "main.[contentHash].js",
      },


hashes the code running in the application and it sticks in into the filename.
We need to take into the consideration since our file will change its name every time there will be a change in our code we are going to have a problem with the   script src="./dist/main.js"> /script
because it;ll bee static all the time.

to solve this problem we need to learn how to install webpack PLUGINS so that scripts changes automatically 

https://webpack.js.org/plugins/html-webpack-plugin/#root
npm install --save-dev html-webpack-plugin


when we start the app with filename : "main.[contentHash].js", inside the dist folder there will be a new index.html. Inside the script the code will be dinamicaly changed script src="main.1d14ac95197f7f3b97f5.js" all the time.


But we don't have the other features like bootstrap and link tags meta tags etc.. to use them we need to create a template.html for those things we are using AND insinde the webpack.config set a plugin that is going to run whenever the application starts the index.html will also carry the templet.html inside and in that way itll add the additional stuff we want


const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      mode : "development",
      entry: "./src/index.js",
      output: {
            filename : "main.[contentHash].js",
            path: path.resolve(__dirname, "dist")

      },
      plugins: [new HtmlWebpackPlugin({                    <-----------------------
            template: "./src/template.html"                <-----------------------
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
            }
                ]
      }
};