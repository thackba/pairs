const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    modules: ["node_modules", "spritesmith-generated"]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, "src/pairs_images"),
        glob: "*.jpg"
      },
      target: {
        image: path.resolve(__dirname, "src/pairs_sprite/sprite.png"),
        css: path.resolve(__dirname, "src/pairs_sprite/sprite.scss")
      },
      apiOptions: {
        cssImageRef: "./pairs_sprite/sprite.png"
      }
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [],
        loader: "babel-loader"
      },
      {
        test: /.(scss|css)$/,

        use: [
          {
            loader: "style-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",

            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
