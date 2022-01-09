module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      primary: {
        50: '#FAFBF7',
        100: '#D5E2B9',
        200: '#BFD494',
        300: '#AAC570',
        400: '#94B64C',
        500: '#77933C',
        600: '#5A6F2D',
        700: '#3C4B1E',
        800: '#1F2610',
        900: '#020201',
      },
      neutral: {
        0: '#FFFFFF',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
    fontFamily: {
      raleway: 'Raleway',
    },
    extend: {
      zIndex: {
        9999: '9999',
      },
    },
  },
  purge: [
    './src/components/**/*.js',
    './src/containers/**/*.js',
    './src/pages/**/*.js',
  ],
};
