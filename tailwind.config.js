module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffff',
        background: '#f3f3f3',
        'base-100': '#14161c',
        'base-80': '#14161c',
      },
      spacing: {
        2: '2px',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        72: '72px',
        80: '80px',
        88: '88px',
        96: '96px',
        120: '120px',
        160: '160px',
        200: '200px',
        '1/4': '25%',
        '1/2': '50%',
        'container-sm': '554px',
        'container-md': '768px',
        'container-lg': '1012px',
        'container-xl': '1280px',
      },
      fontFamily: {
        smooch: 'Smooch, Arial, sans-serif',
        noto: 'Noto-Regular, Arial, sans-serif',
        lato: 'Lato-Regular, Arial, sans-serif',
      },
      maxWidth: {
        'container-sm': '554px',
        'container-md': '768px',
        'container-lg': '1012px',
        'container-xl': '1280px',
      },
      minWidth: {
        'container-sm': '554px',
        'container-md': '768px',
        'container-lg': '1012px',
        'container-xl': '1280px',
      },
      screens: {
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '24px',
          md: '48px',
        },
      },
    },
  },
  plugins: [],
};
