    

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
mode:"development",
    entry: './src/main.js',
  
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
        //   {
        //     test: /\.(tsx|ts)?$/,
        //     loader: 'ts-loader',
        //     options: {
        //       appendTsSuffixTo: [/\.vue$/],
        //     },
        //     exclude: /node_modules/,
        // },
    //   {
    //     test: /\.ts$/,
    //     loader: 'ts-loader',
    //     exclude: /node_modules/,
    //     options: {
    //       appendTsSuffixTo: [/\.vue$/],
    //     },
    //   },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env'],
              // plugins: ['@babel/plugin-transform-runtime'],
          }
      }
  },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: 'asset',
        },
    ],
    },
  
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './index.html',
    }),

      new ModuleFederationPlugin({
        name: 'app4',
        filename:'remoteEntry.js',
        exposes: {
            './App': './src/bootstrap',
        },
    }),
  ],
  devServer: {
            open: true,
            host: 'localhost',
            port: 3004,
             hot: false,
       
        },
};