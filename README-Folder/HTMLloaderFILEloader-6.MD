// **** HTMLLoader **** //

What this loader does is whenever it is going to encounter src="someimage"
it is going to require('./findtheimagepath') and tell webpack hey here is a file we need to load but after that we need to use something else because webpack wont recognize the file becuase itll be of some type.

npm install --save-dev html-loader

    { 
      test: /\.html$/,
      use: 'html-loader',
    }



//**** FILELoader ****//

File loader will tell webpack what type of file the required file is either jpeg,svg,jpg,png etc.. so it knows what to display wwhen it's required

$ npm install file-loader --save-dev

       {
                  test: /\.(svg|png|jpe?g|gif)$/i,
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]',
                        },
      }



There is one problem with this approach. The problem will be that on every npm run build we are going to create another image in our folder, we need to prevent that.
To prevent that we can add a plugin which is going to overwrite whenever something with that kind of type is being required in the dist/images.

npm install --save-dev clean-webpack-plugin

const CleanWebpackPlugin = require('clean-webpack-plugin');

 plugins: [new CleanWebpackPlugin()]