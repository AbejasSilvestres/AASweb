const prod = process.env.NODE_ENV === 'production';

export const getBasePath = () => (prod ? '/AASWeb' : '');
