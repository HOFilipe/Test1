import React from 'react';
import { Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Button } from './Button';
import { color } from './tokens';

/**
 * Placeholder for the SF Symbol used in the Figma component.
 *
 * SF Symbols are a macOS/iOS system font, so they render as an empty box on
 * the Linux machines Chromatic builds on. A real icon set (SVGs, or
 * react-native-svg) is the production answer; this keeps the demo honest.
 */
const ShareIcon = () => (
  <Text style={{ fontSize: 17, lineHeight: 20, color: color.textPrimary }}>↑</Text>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
    showLabel: true,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The default state, exactly as drawn in Figma: State=Default, no icons. */
export const Primary: Story = {};

export const WithIconLeft: Story = {
  args: { iconLeft: <ShareIcon /> },
};

export const WithIconRight: Story = {
  args: { iconRight: <ShareIcon /> },
};

export const IconOnly: Story = {
  args: { showLabel: false, iconLeft: <ShareIcon /> },
};

export const LongLabel: Story = {
  args: { label: 'Place bet on Flamengo' },
};

/** Not in the Figma component yet — code needs a disabled state regardless. */
export const Disabled: Story = {
  args: { disabled: true },
};
