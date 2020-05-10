
// **** LOADING SASS Through WEBPACK ****//

1 - install the dependency  npm install sass-loader sass webpack --save-dev
2 - create a sass file ex : main.scss
@import the library in this case bootstrap
@import "~bootstrap/scss/bootstrap";

3 - inside webpack.config.js use it 

  module : {
            rules: [
            {
                  test: /\.sass$/,        /regex code
                  use: [
                        "style-loader",    // 3 - Injects styles into the DOM
                        "css-loader",     // 2 - turns css into js code
                        "sass-loader"    // 1 -  turns sass into css
                        ]
            }
                ]
      }



4 - if we want to overwrite the styles right now it is easy to do it for ex : if we want to overwrite the primary color in bootstrap 
we add $primary : red; make npm start the color will be overwritten. or
$danger : black and the color will be changed