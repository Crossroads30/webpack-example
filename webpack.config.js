const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      assetModuleFilename: 'assets/[hash][ext]',
   },
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
                  options: { minimize: true },
               }
            ]
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource',
         }, 
         {
            test: /\.(woff(2)?|eat|ttf|otf)$/i,
            type: 'asset/resource',
         }, 
         {
            test: /\.css$/i,
            use: [ MiniCssExtractPlugin.loader, 'css-loader']
         }, 
         {
            test: /\.s[ac]ss$/i,
            use: [
               //Create 'style' nodes from JS strings
               "style-loader",
               //Translates CSS into CommonJS
               "css-loader",
               //Compiles sass to CSS
               "sass-loader",
               // "sass-resources-loader",
               {
                  loader: 'sass-resources-loader',
                  options: {
                     resources: [
                        'src/styles/vars.scss',
                        'src/styles/mixins.scss' 
                     ]
                  }
               }
            ],
         },
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: './src/index.html',
         filename: './index.html'
      }),
      new CleanWebpackPlugin({ 
         cleanStaleWebpackAssets: false 
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css'
      }),
      // new CopyPlugin({ //папка 'public' не должна быть пустой иначе билд не соберется!!!
      //    patterns: [
      //       { from: './src/public' }
      //    ]
      // }),
   ],
   optimization: {
      minimize: true,
   },
   devServer: {
      compress: true,
      port: 3000,
   },
}