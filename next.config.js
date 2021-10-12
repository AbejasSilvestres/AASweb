const prod = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: '/AASweb',
  assetPrefix: prod ? 'https://abejassilvestres.github.io/AASweb/' : '',
};
