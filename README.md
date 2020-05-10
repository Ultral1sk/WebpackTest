# Webpack 2 Basics
1 - Starting with a git init 
1.5 - inside the json folder we need to give webpack a clue which file should find basically where to start its journey
we start inside the "script" with the following : 
"build": "webpack src/js/app.js dist/bundle.js" 

- since now we gave webpack a clue which file to run when it s starting the next step is also tell webpack ON which dependency does this file run (or which depencency does this file use)
Then it'll start to run and will try to understand which imports exports files does this file use, then it'll merge that code into a one bundle 


2 - Right now the code is spreaded out but where tha appstarts is in app.js with the run function.
- What this means is we are spreading the code manually without webpack

// ***** MAIN PART ***** //

installing webpack
1 - npm install --save-dev webpack webpack-cli
1.5 -   "scripts": {"start" : "webpack" },
2   - now when ew start the weback it looks for an entry that is why we create index.js inside the src folder and npm start to test it. Then It'll create a folder for  us with the name dist and some weboack code magic inside, if we can see our code at the end of the code inside the file it means we are proceeding into the right direction
2.5 - since right now dist/main.js is going to be our entry for the webpack we need to slowly transfer our code from app to main.js by using import export

3   - Since we've created a window for webpack to run our code for us if we want to make it work we need to be careful which code is running first and what that code depents on first while running from start.
When we realize that we need to epoxrt the stuff that code needs and import at the place where that code is needed, then call the run function at the end

** In our case index.js is our entry window for webpack dist/main.js to read.
We start our app with the main function run which sis in app.js we bring everything into index.js

import { run } from './app/app'
import { AlertService } from './app/alert.service'
import { ComponentService } from './app/component.service'

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService)

if we want to use this code and run it properly in webpack we need to understand what functions before running depend on for ex :
the run function depends on a 
const alertService = new AlertService();
const componentService = new ComponentService();

BUT !

the Alert service and new ComponentService depend also on smth else beofre running so we need to take care of them also before bringing it here for ex : Alert service needs to be exported so we can use it here and alert service depends also on the function 
import { inputsAreValid } from './utils/inputs-are-valid'
so we import that to the alert service. 
Since Component Service relies on its own it only needs to be exported it doesnt relly on anything when running.




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
