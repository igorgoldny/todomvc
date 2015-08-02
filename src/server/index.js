var config = require('./config')

if (config.isProduction || require('piping')(config.piping)) {
  if (!process.env.NODE_ENV)
    throw new Error('Enviroment variable NODE_ENV must be set.');

  require('babel/register');
  // To ignore webpack custom loaders on server.
  config.webpackStylesExtensions.forEach(function(ext) {
    require.extensions['.' + ext] = function() {}
  });
  require('./main');
}
