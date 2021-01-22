const cssnano = require('cssnano')({ preset: 'default' });
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require('postcss-preset-env')({
			// Full list of features: https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
			features: {
				'nesting-rules': true, // delete if you don’t want nesting (optional)
			},
		}),
    ...(production ? [cssnano] : []),
  ],
};