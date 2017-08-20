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

  let htmlWebpackPlugin = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0];
  if(htmlWebpackPlugin){
    htmlWebpackPlugin.plugin.options.template = `!!ejs-loader!${path.resolve(__dirname, 'src/index.html')}`;
  }
  config.plugins = plugins;
  return config;
}
