import type { Preview } from '@storybook/react-native-web-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
