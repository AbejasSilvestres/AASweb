export const isProd = process.env.NODE_ENV === 'production';

export const getBasePath = () => (isProd ? '/AASweb' : '');

export const formatDate = (dateString) =>
  dateString.substring(0, 10).split('-').reverse().join('/');

export const isExternalLink = (url) => url.startsWith('http');
