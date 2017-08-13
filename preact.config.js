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
  config.devServer.proxy = [
    {
      path: '/api/**',
      target: 'http://localhost:3000',
    },
  ];
  config.plugins = plugins;
  return config;
}
