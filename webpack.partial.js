const postcssRTLCSS = require('postcss-rtlcss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {plugins: [
                postcssRTLCSS
              ]}
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
};
