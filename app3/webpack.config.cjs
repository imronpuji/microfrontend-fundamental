// // Generated using webpack-cli https://github.com/webpack/webpack-cli
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container
// const { VueLoaderPlugin } = require('vue-loader')
// const path = require('path');

// const isProduction = process.env.NODE_ENV == 'production';

// const config = {
//     entry: './src/bootstrap.ts',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index_bundle.js',
//     },
//     devServer: {
//         open: true,
//         host: 'localhost',
//         port: 8003,
//         hot: true
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './index.html'
//         }),
//         new ModuleFederationPlugin({
//             name: 'app2',
//             filename:'remoteEntry.js',
//             exposes: {
//                 './App': './src/bootstrap.ts',
//             },
//         }),
//         new VueLoaderPlugin()
//         // Add your plugins here
//         // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/i,
//                 loader: 'ts-loader',
//                 exclude: ['/node_modules/'],
               
//             },

      
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//                 type: 'asset',
//             },

//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//               },
//               // this will apply to both plain `.js` files
//               // AND `<script>` blocks in `.vue` files
//             //   {
//             //     test: /\.(js|ts)$/,
//             //     loader: 'babel-loader'
//             //   },
//               // this will apply to both plain `.css` files
//               // AND `<style>` blocks in `.vue` files
//               {
//                 test: /\.css$/,
//                 use: [
//                   'vue-style-loader',
//                   'css-loader'
//                 ]
//               }

//             // Add your rules for custom modules here
//             // Learn more about loaders from https://webpack.js.org/loaders/
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '...'],
//     },
// };

// module.exports = () => {
//     if (isProduction) {
//         config.mode = 'production';
        
        
//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };


const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
mode:"development",
  entry: './src/bootstrap.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
    },
          {
            test: /\.(tsx|ts)?$/,
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
            exclude: /node_modules/,
        },
    //   {
    //     test: /\.ts$/,
    //     loader: 'ts-loader',
    //     exclude: /node_modules/,
    //     options: {
    //       appendTsSuffixTo: [/\.vue$/],
    //     },
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
    },
  
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['dist/*'],
        dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
      new ModuleFederationPlugin({
        name: 'app2',
        filename:'remoteEntry.js',
        exposes: {
            './App': './src/bootstrap.ts',
        },
    }),
  ],
  devServer: {
            open: true,
            host: 'localhost',
            port: 8003,
            hot: true
        },
};
