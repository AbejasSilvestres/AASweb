const prod = process.env.NODE_ENV === 'production';

export const getBasePath = () => (prod ? '/AASweb' : '');

export const formatDate = (dateString) =>
  dateString.substring(0, 10).split('-').reverse().join('/');
