const path = require('path');
const MiniCSSExtract = require('mini-css-extract-plugin');

module.exports = env => {
  const CSSExtract = new MiniCSSExtract({ filename: 'styles.css' });
  
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCSSExtract.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: env === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/dist/',
      historyApiFallback: true
    }
  };
};