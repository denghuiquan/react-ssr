module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: { version: '3.29', proposals: true }
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
