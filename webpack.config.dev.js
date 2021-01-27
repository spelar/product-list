const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	//웹팩이 빌드하게 될 파일
  entry: "./src/productList.js",
	// 빌드된 파일 위치와 네임 설정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
	// 웹팩 개발 서버
	devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 9000
  },
  mode: "development",
	// html, css 빌드
	module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
			{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
			{
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
			{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
						options: {
							name: "[name].[ext]",
							outputPath: "images",
							publicPath: 'images',
						}
          },
        ],
      },
    ]
  },
	// html, css output 설정
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', 
      filename: 'index.html' 
    }),
		new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
	// js, css 파일 압축
	optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};