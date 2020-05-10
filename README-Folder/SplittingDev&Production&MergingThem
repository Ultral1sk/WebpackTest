// **** Spliting the webpack dev production scripts **** //

Because we dont want to build an apllication all the time whenever we start the program
We can have multiple versions of our application like development and production mode
But we don't wannt to repeat ourselfs in the config, dev and production mode, 
we can bring the code that we need into the place where it is needed meaning we are going to merge themn
whenever we need for that we need to use webpack-merge package here is an example :

webpack-config.js = webpack-common.js

Then whenever we need the code from the commong we ware going to require it to that place 
for example we need the code in webpac.dev.js what we do is we 

const common = require(./webpack-common);
const merge  = require('webpack-merge');


module.exports = merge(common, {
      mode : "development",
      output: {
            filename : "main.js",
            path: path.resolve(__dirname, "dist")

      },
});

what this code does is it merging the common dependencies comming from the webpack.common.j
with the file dependencies.


* After combining everything the last step we should do is go 
to package.json and tell the script which production to use on start

"start": "webpack --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"

with this on npm start it'll use the development mode   in the index.js in dist we can check the scrit <src="main.js"> 
with         npm build it;ll use the production mode    in the index.js in dist we can check the scrit <src="main123353ascasdbasdasd.js">




// **** Live browser update for development production ****//

If we dont want to start the application all the time and have a live webpack updater
we install the package webpack-dev-server
Inside the package json we tell the program on npm start to use the webpack package

----> "start": "webpack-dev-server --config webpack.dev.js --open",

test it by changing smth in the sass file






// **** IMPORTANT **** // 

Development MODE

we can delete the disc folder from the program when we run the development production
it is unneccessary to stay because even though we delete it, it is stored in the memory and we can still
work on it and see it


Production MODE
If we want to see the production mode we'll just use the npm build and create the latest versions
and open the disc/index.html file.