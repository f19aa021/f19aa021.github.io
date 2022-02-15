const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'docs', 'js'),
      filename: 'app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      inline: true,
      open: false,
      openPage: '',
      contentBase: path.join(__dirname, 'docs'),
      watchContentBase: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: ['@babel/plugin-syntax-jsx']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  };
