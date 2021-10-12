const prod = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: prod ? '/AASweb' : '',
  assetPrefix: prod ? '/AASweb/' : '',
};
