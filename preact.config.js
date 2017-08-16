import path from 'path';
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
    /** you can change config here **/
  const plugins = config.plugins.filter((plugin) => {
    return plugin.constructor.name !== 'SWPrecacheWebpackPlugin';
  });
  let { plugin: htmlWebpackPlugin } = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0];
  htmlWebpackPlugin.options.template = `!!ejs-loader!${path.resolve(__dirname, 'src/index.html')}`;
  
  config.devServer.proxy = [
    {
      path: '/api/**',
      target: 'http://localhost:3000',
    },
  ];
  config.plugins = plugins;
  return config;
}
