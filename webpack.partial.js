const postcssRTLCSS = require('postcss-rtlcss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /styles\.scss/i,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssRTLCSS({
                    ltrPrefix: ':host-context([dir=\'ltr\'])',
                    rtlPrefix: ':host-context([dir=\'rtl\'])'
                    }
                  )
                ]
              }
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /styles\.scss/i,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssRTLCSS
                ]
              }
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
};
