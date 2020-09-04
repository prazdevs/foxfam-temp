import defaultTheme from '@chakra-ui/theme';

console.log(defaultTheme);

const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    body: `Quicksand, ${defaultTheme.fonts.body}`,
    heading: `Quicksand, ${defaultTheme.fonts.heading}`,
  },
};

export default theme;
