//**** Multiple entry points ****//
creating an new entry example : vendor.js inside this vendor will be the bootstrap library imported so we can use it later on same as css in order to use it we need to import it!-=
import "bootstrap"

if we want our code to be splitted and make our entry points dynamic
we need to change our entry points to be dynamic. Instead of putting fixed nnames we are going to put a variable there to accept also all new entry points created.

instead of single entry 

in webpack.common.js

module.exports = {
  entry: "./src/index.js",
}

we put multiple entry as an object

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },

then, in webpack.dev.js

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
});

instead of fixed filename we need to sset it to dynaamic file name

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
});

then, in webpack.prod.js 


module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },

instead of fixed filename we need to set a dynamic filename

  module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },