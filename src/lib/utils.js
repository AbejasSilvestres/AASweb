export const isProd = process.env.NODE_ENV === 'production';

export const getBasePath = () => (isProd ? '/AASweb' : '');

export const formatDate = (dateString) =>
  dateString.substring(0, 10).split('-').reverse().join('/');

export const isExternalLink = (url) => url.startsWith('http');

export const filter = (fn, array) => {
  const final = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      final.push(array[i]);
    }
  }
  return final;
};
